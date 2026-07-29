// 📱 MOBİL CİHAZ KONTROLÜ VE STATUS BAR YÜKSEKLİK HESAPLAYICI (KORUNDU)
function detectAndApplyStatusBarHeight() {
  let calcHeight = 32; // Varsayılan mobil status bar yüksekliği

  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || window.innerWidth <= 600;

  if (isMobile) {
    const screenRatio = window.screen.height / window.screen.width;
    
    if (screenRatio >= 2.0) {
      calcHeight = 44; // Çentikli veya kameralı modern cihazlar
    } else {
      calcHeight = 34; // Standart status barı olan cihazlar
    }

    if (window.visualViewport && window.visualViewport.offsetTop > 0) {
      calcHeight = Math.max(calcHeight, window.visualViewport.offsetTop + 12);
    }
  } else {
    calcHeight = 16; // Masaüstü/Tarayıcı önizleme için minimal padding
  }

  document.documentElement.style.setProperty('--status-bar-height', `${calcHeight}px`);
}

// 🔊 ÇEVRİMDIŞI WEB AUDIO API SES SENTEZLEYİCİ
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch(e) {}
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  }

  playCountdownTick() {
    this.playTone(700, 'sine', 0.08, 0.12);
  }

  playStartChime() {
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.15);
      }, idx * 70);
    });
  }

  playCorrect() {
    if (!this.ctx) return;
    this.playTone(523.25, 'sine', 0.1, 0.15);
    setTimeout(() => this.playTone(659.25, 'sine', 0.18, 0.15), 90);
  }

  playTabu() {
    if (!this.ctx) return;
    this.playTone(140, 'sawtooth', 0.25, 0.2);
  }

  playPassWhoosh() {
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.15);
      filter.Q.value = 3;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch(e) {
      this.playTone(400, 'sine', 0.15, 0.1);
    }
  }

  playUndo() {
    if (!this.ctx) return;
    const notes = [659.25, 523.25, 392.00];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.12, 0.15);
      }, idx * 60);
    });
  }
}

const soundFX = new SoundFX();

// OYUN DURUM DEĞİŞKENLERİ
let gameState = {
  teams: [
    { name: "Kırmızı Takım", score: 0 },
    { name: "Mavi Takım", score: 0 }
  ],
  currentTeamIndex: 0,
  turnDuration: 60,
  totalRounds: 3,
  tabuPenalty: 1,
  passLimit: 3,
  currentRound: 1,
  availableCards: [],
  
  // Tur İçi Değişkenler
  turnPassesLeft: 3,
  turnStats: { correct: 0, tabu: 0, pass: 0 },
  turnHistory: [],
  currentCard: null,
  lastAction: null,
  timeLeft: 60,
  timerInterval: null,
  isPaused: false,
  timerPathLength: 236,
  isAnimating: false
};

// DOM ELEMENTLERİ
const screens = {
  setup: document.getElementById("screen-setup"),
  ready: document.getElementById("screen-ready"),
  play: document.getElementById("screen-play"),
  summary: document.getElementById("screen-summary"),
  gameover: document.getElementById("screen-gameover")
};

// UYGULAMA BAŞLANGICI
window.addEventListener("DOMContentLoaded", () => {
  detectAndApplyStatusBarHeight();
  window.addEventListener("resize", detectAndApplyStatusBarHeight);

  initSetupScreen();
  shuffleCardPool();
  
  const timerBorder = document.getElementById("timer-border");
  if (timerBorder) {
    try {
      const len = timerBorder.getTotalLength();
      if (len > 0) gameState.timerPathLength = len;
    } catch(e) {}
    timerBorder.style.strokeDasharray = gameState.timerPathLength;
  }

  // Splash Bar Dolduğu An HİÇ BEKLEMEDEN Açılış Ekranını Kapat
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.pointerEvents = "none";
      splash.style.transform = "scale(1.02) translateY(-6px)";
      setTimeout(() => {
        splash.classList.add("hidden");
      }, 350);
    }
  }, 1700); 
});

function shuffleCardPool() {
  gameState.availableCards = [...ALL_CARDS];
  for (let i = gameState.availableCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gameState.availableCards[i], gameState.availableCards[j]] = [gameState.availableCards[j], gameState.availableCards[i]];
  }
}

function showScreen(screenName) {
  Object.keys(screens).forEach(key => {
    if (key === screenName) {
      screens[key].classList.remove("hidden");
      screens[key].classList.remove("screen-enter");
      void screens[key].offsetWidth;
      screens[key].classList.add("screen-enter");
    } else {
      screens[key].classList.add("hidden");
    }
  });
}

// AYARLAR EKRANI
function initSetupScreen() {
  const inputTime = document.getElementById("input-time");
  const timeVal = document.getElementById("time-val");
  const inputRounds = document.getElementById("input-rounds");
  const roundsVal = document.getElementById("rounds-val");
  const inputTabuPenalty = document.getElementById("input-tabu-penalty");
  const tabuPenaltyVal = document.getElementById("tabu-penalty-val");
  const inputPassLimit = document.getElementById("input-pass-limit");
  const passLimitVal = document.getElementById("pass-limit-val");

  inputTime.addEventListener("input", (e) => timeVal.textContent = `${e.target.value} saniye`);
  inputRounds.addEventListener("input", (e) => roundsVal.textContent = `${e.target.value} Tur`);
  inputTabuPenalty.addEventListener("input", (e) => tabuPenaltyVal.textContent = `-${e.target.value} Puan`);
  inputPassLimit.addEventListener("input", (e) => passLimitVal.textContent = `${e.target.value} Pas`);

  document.getElementById("btn-start-game").addEventListener("click", () => {
    soundFX.init();

    const team1 = document.getElementById("team1-name").value.trim() || "Kırmızı Takım";
    const team2 = document.getElementById("team2-name").value.trim() || "Mavi Takım";

    gameState.teams[0].name = team1;
    gameState.teams[0].score = 0;
    gameState.teams[1].name = team2;
    gameState.teams[1].score = 0;

    gameState.turnDuration = parseInt(inputTime.value);
    gameState.totalRounds = parseInt(inputRounds.value);
    gameState.tabuPenalty = parseInt(inputTabuPenalty.value);
    gameState.passLimit = parseInt(inputPassLimit.value);

    gameState.currentRound = 1;
    gameState.currentTeamIndex = 0;

    prepareReadyScreen();
  });
}

// TUR HAZIRLIK EKRANI
function prepareReadyScreen() {
  const activeTeam = gameState.teams[gameState.currentTeamIndex];

  document.getElementById("ready-round-badge").textContent = `Tur ${gameState.currentRound} / ${gameState.totalRounds}`;
  
  const readyTeamName = document.getElementById("ready-team-name");
  readyTeamName.textContent = activeTeam.name;
  readyTeamName.style.color = gameState.currentTeamIndex === 0 ? '#f87171' : '#60a5fa';

  document.getElementById("ready-score-team1-label").textContent = gameState.teams[0].name;
  document.getElementById("ready-score-team1").textContent = gameState.teams[0].score;
  document.getElementById("ready-score-team2-label").textContent = gameState.teams[1].name;
  document.getElementById("ready-score-team2").textContent = gameState.teams[1].score;

  showScreen("ready");
}

// 3-2-1 GERİ SAYIM ANİMASYONU
function runCountdown(callback) {
  soundFX.init();

  const overlay = document.getElementById("countdown-overlay");
  const numberEl = document.getElementById("countdown-number");
  const teamTitle = document.getElementById("countdown-team-title");

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  teamTitle.textContent = `${activeTeam.name} Hazırlan!`;
  
  overlay.classList.remove("hidden");
  
  let count = 3;
  
  function updateDisplay(val, isText = false) {
    numberEl.classList.remove("animate-pop");
    void numberEl.offsetWidth;
    numberEl.textContent = val;
    
    if (isText) {
      numberEl.style.fontSize = "clamp(50px, 15vw, 64px)";
      numberEl.style.color = "#34d399";
      numberEl.style.textShadow = "0 10px 30px rgba(52,211,153,0.4)";
      soundFX.playStartChime();
    } else {
      numberEl.style.fontSize = "clamp(80px, 22vw, 110px)";
      numberEl.style.color = "#f59e0b";
      numberEl.style.textShadow = "0 10px 30px rgba(251,191,36,0.4)";
      soundFX.playCountdownTick();
    }
    numberEl.classList.add("animate-pop");
  }

  updateDisplay(count);

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      updateDisplay(count);
    } else if (count === 0) {
      updateDisplay("BAŞLA!", true);
    } else {
      clearInterval(interval);
      overlay.classList.add("hidden");
      callback();
    }
  }, 900);
}

document.getElementById("btn-start-turn").addEventListener("click", () => {
  runCountdown(() => {
    startTurn();
  });
});

// TURU BAŞLAT
function startTurn() {
  gameState.turnPassesLeft = gameState.passLimit;
  gameState.turnStats = { correct: 0, tabu: 0, pass: 0 };
  gameState.turnHistory = [];
  gameState.lastAction = null;
  gameState.timeLeft = gameState.turnDuration;
  gameState.isPaused = false;
  gameState.isAnimating = false;

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  document.getElementById("play-team-name").textContent = activeTeam.name;
  document.getElementById("play-team-badge").style.background = gameState.currentTeamIndex === 0 ? '#ef4444' : '#3b82f6';

  document.getElementById("label-tabu-btn").textContent = `TABU (-${gameState.tabuPenalty})`;

  document.getElementById("timer-box").classList.remove("timer-paused-glow");

  updateUndoButtonUI();
  updateTurnStatsUI();
  updateTimerUI();
  nextCard();
  showScreen("play");
  startTimer();
}

// SAYAÇ VE ÇERÇEVE ANİMASYONU
function updateTimerUI() {
  const timerEl = document.getElementById("play-timer");
  const timerBorder = document.getElementById("timer-border");
  const timerBox = document.getElementById("timer-box");
  const timerIcon = document.getElementById("timer-icon");

  timerEl.textContent = gameState.timeLeft;

  if (timerBorder && gameState.timerPathLength > 0) {
    const progress = gameState.timeLeft / gameState.turnDuration;
    const offset = gameState.timerPathLength * (1 - progress);
    timerBorder.style.strokeDashoffset = offset;

    if (gameState.timeLeft <= 10 && gameState.timeLeft > 0 && !gameState.isPaused) {
      timerBorder.setAttribute("stroke", "#ef4444");
      timerEl.style.color = "#ef4444";
      timerIcon.style.color = "#ef4444";
      timerBox.classList.add("timer-warning");

      if (gameState.timeLeft <= 3) {
        soundFX.playCountdownTick();
      }
    } else {
      timerBorder.setAttribute("stroke", "#facc15");
      timerEl.style.color = "#facc15";
      timerIcon.style.color = "#facc15";
      timerBox.classList.remove("timer-warning");
    }
  }
}

function startTimer() {
  clearInterval(gameState.timerInterval);
  updateTimerUI();

  gameState.timerInterval = setInterval(() => {
    if (!gameState.isPaused) {
      gameState.timeLeft--;
      updateTimerUI();

      if (gameState.timeLeft <= 0) {
        endTurn();
      }
    }
  }, 1000);
}

// PAUSE / RESUME / ANA MENÜ
const btnPause = document.getElementById("btn-pause");
const pauseOverlay = document.getElementById("pause-overlay");
const btnResume = document.getElementById("btn-resume");
const btnMainMenu = document.getElementById("btn-main-menu");

function togglePause() {
  gameState.isPaused = !gameState.isPaused;
  if (gameState.isPaused) {
    pauseOverlay.classList.remove("hidden");
    document.getElementById("timer-box").classList.add("timer-paused-glow");
  } else {
    pauseOverlay.classList.add("hidden");
    document.getElementById("timer-box").classList.remove("timer-paused-glow");
  }
}

btnPause.addEventListener("click", togglePause);
btnResume.addEventListener("click", togglePause);

btnMainMenu.addEventListener("click", () => {
  clearInterval(gameState.timerInterval);
  gameState.isPaused = false;
  pauseOverlay.classList.add("hidden");
  document.getElementById("timer-box").classList.remove("timer-paused-glow");
  showScreen("setup");
});

// KART ANIMASYON TETİKLEYİCİSİ
function triggerCardAnimation(animClass, callback) {
  if (gameState.isAnimating) return;
  gameState.isAnimating = true;

  const cardCard = document.getElementById("card-card");
  cardCard.classList.remove("anim-correct", "anim-tabu", "anim-pass", "anim-undo");
  void cardCard.offsetWidth;
  cardCard.classList.add(animClass);

  setTimeout(() => {
    callback();
  }, 180);

  setTimeout(() => {
    cardCard.classList.remove(animClass);
    gameState.isAnimating = false;
  }, 500);
}

// KART ALMA
function nextCard() {
  if (gameState.availableCards.length === 0) {
    shuffleCardPool();
  }

  gameState.currentCard = gameState.availableCards.pop();
  renderCard(gameState.currentCard);
}

// KART ÇİZİMİ
function renderCard(card) {
  document.getElementById("card-word").textContent = card.kelime;

  const forbiddenContainer = document.getElementById("card-forbidden");
  forbiddenContainer.innerHTML = "";

  card.yasakli_kelimeler.forEach(word => {
    const item = document.createElement("div");
    item.style.cssText = "background: rgba(2,6,23,0.9); border: 1px solid rgba(239,68,68,0.25); color: #f1f5f9; font-weight: 800; font-size: clamp(12px, 3.8vw, 15px); text-align: center; padding: clamp(6px, 1.6vh, 9px); border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px;";
    item.textContent = word;
    forbiddenContainer.appendChild(item);
  });
}

// GERİ AL (UNDO) BUTON DURUMU
function updateUndoButtonUI() {
  const btnUndo = document.getElementById("btn-undo");
  if (gameState.lastAction) {
    btnUndo.classList.remove("disabled");
  } else {
    btnUndo.classList.add("disabled");
  }
}

// GERİ AL (UNDO) İŞLEMİ (SÜREYİ DURDURUR)
document.getElementById("btn-undo").addEventListener("click", () => {
  if (!gameState.lastAction || gameState.isAnimating) return;

  soundFX.playUndo();

  const last = gameState.lastAction;

  if (last.type === 'correct') {
    gameState.turnStats.correct = Math.max(0, gameState.turnStats.correct - 1);
  } else if (last.type === 'tabu') {
    gameState.turnStats.tabu = Math.max(0, gameState.turnStats.tabu - 1);
  } else if (last.type === 'pass') {
    gameState.turnStats.pass = Math.max(0, gameState.turnStats.pass - 1);
    gameState.turnPassesLeft++;
  }

  if (gameState.turnHistory.length > 0) {
    gameState.turnHistory.pop();
  }

  const previousCard = last.card;
  if (gameState.currentCard && gameState.currentCard !== previousCard) {
    gameState.availableCards.push(gameState.currentCard);
  }

  gameState.currentCard = previousCard;
  renderCard(gameState.currentCard);

  gameState.lastAction = null;

  // GERİ AL'A BASILDIĞINDA SÜREYİ DURDUR
  gameState.isPaused = true;
  document.getElementById("timer-box").classList.add("timer-paused-glow");

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-undo", () => {});
});

// YENİ BIR AKSİYON BUTONUNA BASILDIĞINDA SÜREYİ DEVAM ETTİR
function resumeTimerIfPausedByUndo() {
  if (gameState.isPaused) {
    gameState.isPaused = false;
    document.getElementById("timer-box").classList.remove("timer-paused-glow");
  }
}

// BUTON AKSİYONLARI (DOĞRU, TABU, PAS)
document.getElementById("btn-correct").addEventListener("click", () => {
  if (gameState.isAnimating) return;
  resumeTimerIfPausedByUndo();
  soundFX.playCorrect();

  gameState.lastAction = { type: "correct", card: gameState.currentCard };
  gameState.turnStats.correct++;
  gameState.turnHistory.push({ card: gameState.currentCard, type: "correct" });

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-correct", () => {
    nextCard();
  });
});

document.getElementById("btn-tabu").addEventListener("click", () => {
  if (gameState.isAnimating) return;
  resumeTimerIfPausedByUndo();
  soundFX.playTabu();

  gameState.lastAction = { type: "tabu", card: gameState.currentCard };
  gameState.turnStats.tabu++;
  gameState.turnHistory.push({ card: gameState.currentCard, type: "tabu" });

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-tabu", () => {
    nextCard();
  });
});

document.getElementById("btn-pass").addEventListener("click", () => {
  if (gameState.isAnimating || gameState.turnPassesLeft <= 0) return;
  resumeTimerIfPausedByUndo();
  soundFX.playPassWhoosh();

  gameState.lastAction = { type: "pass", card: gameState.currentCard };
  gameState.turnPassesLeft--;
  gameState.turnStats.pass++;
  gameState.turnHistory.push({ card: gameState.currentCard, type: "pass" });

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-pass", () => {
    nextCard();
  });
});

function updateTurnStatsUI() {
  document.getElementById("stat-correct").textContent = gameState.turnStats.correct;
  document.getElementById("stat-tabu").textContent = gameState.turnStats.tabu;
  document.getElementById("stat-pass").textContent = gameState.turnPassesLeft;

  const btnPass = document.getElementById("btn-pass");
  document.getElementById("label-pass-btn").textContent = `PAS (${gameState.turnPassesLeft})`;
  
  if (gameState.turnPassesLeft <= 0) {
    btnPass.disabled = true;
  } else {
    btnPass.disabled = false;
  }
}

// TUR BİTİŞİ
function endTurn() {
  clearInterval(gameState.timerInterval);
  pauseOverlay.classList.add("hidden");
  document.getElementById("timer-box").classList.remove("timer-paused-glow");

  const netScore = (gameState.turnStats.correct * 1) - (gameState.turnStats.tabu * gameState.tabuPenalty);
  gameState.teams[gameState.currentTeamIndex].score += netScore;

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  document.getElementById("summary-team-title").textContent = `${activeTeam.name} Sonuçları`;
  
  const netScoreEl = document.getElementById("summary-net-score");
  netScoreEl.textContent = (netScore >= 0 ? `+${netScore}` : `${netScore}`);
  netScoreEl.style.color = netScore >= 0 ? '#34d399' : '#f87171';

  const historyContainer = document.getElementById("summary-history-list");
  historyContainer.innerHTML = "";

  if (gameState.turnHistory.length === 0) {
    historyContainer.innerHTML = `<p style="color: #64748b; font-style: italic; text-align: center; padding: 16px;">Bu turda kelime oynanmadı.</p>`;
  } else {
    gameState.turnHistory.forEach(item => {
      const row = document.createElement("div");
      row.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: rgba(2,6,23,0.7); padding: 8px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06);";
      
      let typeBadge = '';
      if (item.type === 'correct') {
        typeBadge = `<span style="background: rgba(16,185,129,0.2); color: #34d399; border: 1px solid rgba(16,185,129,0.3); padding: 2px 8px; border-radius: 6px; font-weight: 800; font-size: 11px;">+1 Doğru</span>`;
      } else if (item.type === 'tabu') {
        typeBadge = `<span style="background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 2px 8px; border-radius: 6px; font-weight: 800; font-size: 11px;">-${gameState.tabuPenalty} Tabu</span>`;
      } else {
        typeBadge = `<span style="background: rgba(245,158,11,0.2); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); padding: 2px 8px; border-radius: 6px; font-weight: 800; font-size: 11px;">0 Pas</span>`;
      }

      row.innerHTML = `
        <span style="font-weight: 800; color: #ffffff; text-transform: uppercase; font-size: clamp(11px, 3.2vw, 13px);">${item.card.kelime}</span>
        ${typeBadge}
      `;
      historyContainer.appendChild(row);
    });
  }

  showScreen("summary");
}

document.getElementById("btn-next-turn").addEventListener("click", () => {
  if (gameState.currentTeamIndex === 0) {
    gameState.currentTeamIndex = 1;
  } else {
    gameState.currentTeamIndex = 0;
    gameState.currentRound++;
  }

  if (gameState.currentRound > gameState.totalRounds) {
    renderGameOverScreen();
  } else {
    prepareReadyScreen();
  }
});

function renderGameOverScreen() {
  const t1 = gameState.teams[0];
  const t2 = gameState.teams[1];

  let winnerText = "";
  if (t1.score > t2.score) {
    winnerText = `🏆 ${t1.name} Kazandı!`;
  } else if (t2.score > t1.score) {
    winnerText = `🏆 ${t2.name} Kazandı!`;
  } else {
    winnerText = `🤝 Berabere Bitti!`;
  }

  document.getElementById("gameover-winner-text").textContent = winnerText;

  const scoresContainer = document.getElementById("gameover-scores");
  scoresContainer.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(2,6,23,0.8); padding: 12px; border-radius: 12px; border: 1px solid rgba(239,68,68,0.3);">
      <span style="font-weight: 800; color: #f87171; font-size: clamp(12px, 3.5vw, 14px);">${t1.name}</span>
      <span style="font-size: clamp(18px, 5.5vw, 22px); font-weight: 900; color: #ffffff;">${t1.score} Puan</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(2,6,23,0.8); padding: 12px; border-radius: 12px; border: 1px solid rgba(59,130,246,0.3);">
      <span style="font-weight: 800; color: #60a5fa; font-size: clamp(12px, 3.5vw, 14px);">${t2.name}</span>
      <span style="font-size: clamp(18px, 5.5vw, 22px); font-weight: 900; color: #ffffff;">${t2.score} Puan</span>
    </div>
  `;

  showScreen("gameover");
}

document.getElementById("btn-restart").addEventListener("click", () => {
  showScreen("setup");
});