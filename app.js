/**
 * TABOO WORD GAME - CORE APPLICATION LOGIC (MOBILE & PWA ENHANCED)
 */

// ==========================================================================
// 🔊 ÇEVRİMDIŞI WEB AUDIO API SES SENTEZLEYİCİ
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isUnlocked = false;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.isUnlocked = true;
    } catch (e) {
      console.warn("Web Audio API not supported or blocked", e);
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
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
    } catch (e) {}
  }

  // 10 - 4 saniye arası standart uyarı tıkı
  playCountdownTick() {
    this.playTone(650, 'sine', 0.08, 0.14);
  }

  // Son 3 saniye acil durum hızlandırılmış yüksek tonlu nabız
  playUrgentTick() {
    if (!this.ctx) return;
    this.playTone(920, 'sine', 0.06, 0.18);
    setTimeout(() => {
      this.playTone(1100, 'sine', 0.07, 0.2);
    }, 45);
  }

  // Süre bittiğinde çalan kapanış zili/düdüğü
  playTimeUpChime() {
    if (!this.ctx) return;
    const notes = [440.00, 330.00, 220.00];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sawtooth', 0.22, 0.18);
      }, idx * 70);
    });
  }

  playStartChime() {
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.22, 0.15);
      }, idx * 60);
    });
  }

  playCorrect() {
    if (!this.ctx) return;
    this.playTone(523.25, 'sine', 0.09, 0.15);
    setTimeout(() => this.playTone(659.25, 'sine', 0.16, 0.15), 70);
  }

  playTabu() {
    if (!this.ctx) return;
    this.playTone(140, 'sawtooth', 0.22, 0.2);
  }

  playPassWhoosh() {
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const bufferSize = this.ctx.sampleRate * 0.15;
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
      filter.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.13);
      filter.Q.value = 3;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {
      this.playTone(400, 'sine', 0.12, 0.1);
    }
  }

  playUndo() {
    if (!this.ctx) return;
    const notes = [659.25, 523.25, 392.00];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.1, 0.15);
      }, idx * 50);
    });
  }

  playReviewToggle() {
    this.playTone(880, 'sine', 0.05, 0.09);
  }
}

const soundFX = new SoundFX();

// ==========================================================================
// 📳 HİBRİT HAPTİC TİTREŞİM MOTORU (WEB VIBRATE + CAPACITOR HAPTICS)
// ==========================================================================
const HapticManager = {
  async trigger(patternType) {
    // 1. Capacitor Native Haptics
    const Haptics = window.Capacitor?.Plugins?.Haptics;
    if (Haptics) {
      try {
        if (patternType === 'correct') await Haptics.notification({ type: 'SUCCESS' });
        else if (patternType === 'tabu') await Haptics.notification({ type: 'ERROR' });
        else if (patternType === 'pass') await Haptics.impact({ style: 'MEDIUM' });
        else if (patternType === 'undo') await Haptics.impact({ style: 'LIGHT' });
        else if (patternType === 'warning') await Haptics.impact({ style: 'HEAVY' });
        else if (patternType === 'timeup') await Haptics.notification({ type: 'WARNING' });
        return;
      } catch (e) {}
    }

    // 2. Web API (navigator.vibrate) Fallback
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      try {
        const patterns = {
          correct: [40, 60, 80],
          tabu: [120, 60, 180],
          pass: 35,
          undo: [25, 40, 25],
          warning: 65,
          timeup: 160
        };
        navigator.vibrate(patterns[patternType] || 40);
      } catch (e) {}
    }
  }
};

// ==========================================================================
// 💡 EKRAN AÇIK TUTMA (SCREEN WAKE LOCK API)
// ==========================================================================
let wakeLockSentinel = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator && typeof navigator.wakeLock.request === 'function') {
    try {
      if (!wakeLockSentinel || wakeLockSentinel.released) {
        wakeLockSentinel = await navigator.wakeLock.request('screen');
        wakeLockSentinel.addEventListener('release', () => {
          wakeLockSentinel = null;
        });
      }
    } catch (e) {
      // Düşük güç modu vb. durumlarda sessizce geç
    }
  }
}

async function releaseWakeLock() {
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
    } catch (e) {}
    wakeLockSentinel = null;
  }
}

// Sekme arka plana geçtiğinde oyunu otomatik duraklat, geri gelince wake lock'u tazele
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible') {
    if (gameState.currentScreen === 'play' && !gameState.isPaused) {
      await requestWakeLock();
    }
  } else {
    if (gameState.currentScreen === 'play' && !gameState.isPaused) {
      pauseGameManually();
    }
    await releaseWakeLock();
  }
});

// ==========================================================================
// 🌍 YERELLEŞTİRME & DİL YÖNETİMİ (i18n)
// ==========================================================================
function detectInitialLanguage() {
  const saved = localStorage.getItem('taboo_language');
  if (saved === 'tr' || saved === 'en') return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
  return browserLang.startsWith('tr') ? 'tr' : 'en';
}

function t(key, ...args) {
  const lang = gameState.currentLanguage || 'tr';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;
  const entry = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.tr[key] || key);
  return typeof entry === 'function' ? entry(...args) : entry;
}

// ==========================================================================
// 📦 KALICI KART HAVUZU & OYUN DURUMU (STORAGE & STATE)
// ==========================================================================
const STORAGE_KEYS = {
  SETTINGS: 'taboo_game_settings',
  PLAYED_CARDS_PREFIX: 'taboo_played_card_ids_'
};

const gameState = {
  currentLanguage: 'tr',
  currentScreen: 'setup',
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
  
  // Deste Yönetimi
  rawCards: [],
  availableCards: [],
  playedCardIds: new Set(),
  currentCard: null,

  // Tur İçi Durumlar
  turnPassesLeft: 3,
  turnStats: { correct: 0, tabu: 0 },
  turnHistory: [],
  lastAction: null,
  timeLeft: 60,
  lastTickedSecond: null,
  turnEndTime: 0,
  turnInitialTeamScore: 0,
  timerInterval: null,
  
  // Duraklatma Durumu: 'none' | 'manual' | 'undo'
  pauseReason: 'none',
  isPaused: false,
  
  // Animasyon ve Sayaç
  isAnimating: false,
  animationTimeout1: null,
  animationTimeout2: null,
  timerPathLength: 236
};

// DOM EKRANLARI
const screens = {
  setup: document.getElementById("screen-setup"),
  ready: document.getElementById("screen-ready"),
  play: document.getElementById("screen-play"),
  summary: document.getElementById("screen-summary"),
  gameover: document.getElementById("screen-gameover")
};

// ==========================================================================
// 🚀 UYGULAMA BAŞLANGICI & SERVICE WORKER
// ==========================================================================
let deferredPWAInstallPrompt = null;

window.addEventListener("DOMContentLoaded", async () => {
  // Safari / Mobil Ses Kilidi Açma (İlk Dokunuşta Sessiz Resume)
  const unlockAudio = () => {
    soundFX.init();
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio, { passive: true });
  window.addEventListener('touchstart', unlockAudio, { passive: true });

  // Çift dokunma ve pinch-zoom engeli
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });

  // Service Worker Kaydı (PWA Çevrimdışı Desteği)
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js');
    } catch (err) {
      console.warn('Service Worker kaydı başarısız:', err);
    }
  }

  // PWA Kurulum Olayı Dinleyicisi
  initPWAInstallBanner();

  // Donanım Geri Tuşu Yönetimi (Android & Browser History)
  initNavigationManager();

  // Otomatik Dil Tespiti
  gameState.currentLanguage = detectInitialLanguage();
  initLanguageSwitcher();
  loadSavedSettings();
  applyLanguageUI();

  // Seçili dilin kartlarını tembel/dinamik yükle (Lazy Loading)
  await loadAndInitDeck(gameState.currentLanguage, false);

  initSetupScreen();
  
  const timerBorder = document.getElementById("timer-border");
  if (timerBorder) {
    try {
      const len = timerBorder.getTotalLength();
      if (len > 0) gameState.timerPathLength = len;
    } catch (e) {}
    timerBorder.style.strokeDasharray = gameState.timerPathLength;
  }

  // Açılış Splash Ekranını Kapat
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.pointerEvents = "none";
      splash.style.transform = "scale(1.02) translateY(-6px)";
      setTimeout(() => splash.classList.add("hidden"), 350);
    }
  }, 1400);
});

// ==========================================================================
// 📲 PWA INSTALL BANNER YÖNETİMİ
// ==========================================================================
function initPWAInstallBanner() {
  const banner = document.getElementById("pwa-install-banner");
  const btnInstall = document.getElementById("btn-pwa-install");

  // Eğer zaten standalone / kurulu ise banner'ı gösterme
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    if (banner) banner.classList.add("hidden");
    return;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPWAInstallPrompt = e;
    if (banner && gameState.currentScreen === 'setup') {
      banner.classList.remove("hidden");
    }
  });

  if (btnInstall) {
    btnInstall.addEventListener('click', async () => {
      if (!deferredPWAInstallPrompt) return;
      deferredPWAInstallPrompt.prompt();
      const choice = await deferredPWAInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        if (banner) banner.classList.add("hidden");
      }
      deferredPWAInstallPrompt = null;
    });
  }

  window.addEventListener('appinstalled', () => {
    if (banner) banner.classList.add("hidden");
    deferredPWAInstallPrompt = null;
  });
}

// ==========================================================================
// 🔙 DONANIMSAL GERİ TUŞU & GEÇMİŞ (NAVIGATION & POPSTATE)
// ==========================================================================
function initNavigationManager() {
  // Sayfa geçmişine ilk state'i yaz
  window.history.replaceState({ screen: 'setup' }, '');

  window.addEventListener('popstate', (event) => {
    handleAppBackNavigation(event);
  });

  // Capacitor Android Geri Tuşu Eklentisi
  if (window.Capacitor?.Plugins?.App) {
    window.Capacitor.Plugins.App.addListener('backButton', () => {
      handleAppBackNavigation();
    });
  }
}

function handleAppBackNavigation() {
  if (gameState.currentScreen === 'play') {
    if (!gameState.isPaused) {
      pauseGameManually();
      window.history.pushState({ screen: 'play' }, '');
    } else {
      if (confirm(t('exitConfirm'))) {
        resetActiveTurnState();
        releaseWakeLock();
        updateDeckUI();
        showScreen('setup');
      } else {
        window.history.pushState({ screen: 'play' }, '');
      }
    }
  } else if (gameState.currentScreen === 'ready' || gameState.currentScreen === 'summary' || gameState.currentScreen === 'gameover') {
    resetActiveTurnState();
    releaseWakeLock();
    showScreen('setup');
  } else if (gameState.currentScreen === 'setup') {
    if (window.Capacitor?.Plugins?.App) {
      window.Capacitor.Plugins.App.exitApp();
    }
  }
}

// ==========================================================================
// 🃏 DİNAMİK KART YÜKLEYİCİ (ON-DEMAND LAZY LOADER)
// ==========================================================================
function loadCardDeckFile(lang) {
  return new Promise((resolve, reject) => {
    const oldScript = document.getElementById('dynamic-cards-script');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'dynamic-cards-script';
    script.src = lang === 'en' ? 'cards_en.js' : 'cards_tr.js';
    
    script.onload = () => {
      gameState.rawCards = window.TABOO_CARDS || [];
      resolve(gameState.rawCards);
    };
    script.onerror = () => {
      console.error("Kart dosyası yüklenemedi:", script.src);
      gameState.rawCards = [];
      resolve([]);
    };
    document.body.appendChild(script);
  });
}

async function loadAndInitDeck(lang, forceReset = false) {
  await loadCardDeckFile(lang);
  initDeckPool(forceReset);
}

function initDeckPool(forceReset = false) {
  const storageKey = STORAGE_KEYS.PLAYED_CARDS_PREFIX + gameState.currentLanguage;
  try {
    if (forceReset) {
      localStorage.removeItem(storageKey);
      gameState.playedCardIds = new Set();
    } else {
      const saved = localStorage.getItem(storageKey);
      gameState.playedCardIds = saved ? new Set(JSON.parse(saved)) : new Set();
    }
  } catch (e) {
    gameState.playedCardIds = new Set();
  }

  const all = gameState.rawCards || [];
  let pool = all.filter(c => !gameState.playedCardIds.has(c.id));

  // Eğer tüm kartlar bittiyse desteyi otomatik sıfırla
  if (pool.length === 0 && all.length > 0) {
    gameState.playedCardIds.clear();
    localStorage.removeItem(storageKey);
    pool = [...all];
  }

  // Fisher-Yates Karıştırma
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  gameState.availableCards = pool;
  updateDeckUI();
}

function markCardAsPlayed(card) {
  if (!card || !card.id) return;
  gameState.playedCardIds.add(card.id);
  const storageKey = STORAGE_KEYS.PLAYED_CARDS_PREFIX + gameState.currentLanguage;
  try {
    localStorage.setItem(storageKey, JSON.stringify([...gameState.playedCardIds]));
  } catch (e) {}
  updateDeckUI();
}

function unmarkCardAsPlayed(card) {
  if (!card || !card.id) return;
  gameState.playedCardIds.delete(card.id);
  const storageKey = STORAGE_KEYS.PLAYED_CARDS_PREFIX + gameState.currentLanguage;
  try {
    localStorage.setItem(storageKey, JSON.stringify([...gameState.playedCardIds]));
  } catch (e) {}
  updateDeckUI();
}

function updateDeckUI() {
  const el = document.getElementById("deck-remaining-count");
  if (el) {
    el.textContent = gameState.availableCards ? gameState.availableCards.length : (gameState.rawCards ? gameState.rawCards.length : 0);
  }
}

// ==========================================================================
// 🌐 DİL DEĞİŞTİRME & ARAYÜZ YENİLEME
// ==========================================================================
function initLanguageSwitcher() {
  const btnTr = document.getElementById("btn-lang-tr");
  const btnEn = document.getElementById("btn-lang-en");

  btnTr.addEventListener("click", () => switchLanguage('tr'));
  btnEn.addEventListener("click", () => switchLanguage('en'));
}

async function switchLanguage(lang) {
  if (gameState.currentLanguage === lang) return;
  
  soundFX.init();
  HapticManager.trigger('pass');
  gameState.currentLanguage = lang;
  localStorage.setItem('taboo_language', lang);

  applyLanguageUI();
  await loadAndInitDeck(lang, false);
}

function applyLanguageUI() {
  const isTr = gameState.currentLanguage === 'tr';

  // Buton aktiflik durumu
  document.getElementById("btn-lang-tr").classList.toggle("active", isTr);
  document.getElementById("btn-lang-en").classList.toggle("active", !isTr);

  // Başlıklar & Etiketler
  document.getElementById("splash-title").textContent = t('appTitle');
  document.getElementById("app-title-logo").textContent = t('appTitle');
  document.getElementById("lbl-game-settings").textContent = t('gameSettings');
  document.getElementById("lbl-team1").textContent = t('team1Label');
  document.getElementById("lbl-team2").textContent = t('team2Label');
  document.getElementById("lbl-turn-time").textContent = t('turnDurationLabel');
  document.getElementById("lbl-total-rounds").textContent = t('totalRoundsLabel');
  document.getElementById("lbl-tabu-penalty").textContent = t('tabuPenaltyLabel');
  document.getElementById("lbl-pass-limit").textContent = t('passLimitLabel');
  document.getElementById("lbl-remaining-cards").textContent = t('remainingCards') + ":";
  document.getElementById("btn-reset-deck").textContent = t('resetDeckBtn');
  document.getElementById("btn-start-game-text").textContent = t('startGameBtn');

  // PWA Install Banner
  const pwaTitle = document.getElementById("pwa-install-title");
  const pwaDesc = document.getElementById("pwa-install-desc");
  const pwaBtnText = document.getElementById("pwa-install-btn-text");
  if (pwaTitle) pwaTitle.textContent = t('pwaInstallTitle');
  if (pwaDesc) pwaDesc.textContent = t('pwaInstallDesc');
  if (pwaBtnText) pwaBtnText.textContent = t('pwaInstallBtn');

  // Slider Değer Göstergeleri
  const inputTime = document.getElementById("input-time");
  const inputRounds = document.getElementById("input-rounds");
  const inputTabuPenalty = document.getElementById("input-tabu-penalty");
  const inputPassLimit = document.getElementById("input-pass-limit");

  document.getElementById("time-val").textContent = `${inputTime.value} ${t('secondsUnit')}`;
  document.getElementById("rounds-val").textContent = `${inputRounds.value} ${t('roundsUnit')}`;
  document.getElementById("tabu-penalty-val").textContent = `-${inputTabuPenalty.value} ${t('penaltyUnit')}`;
  document.getElementById("pass-limit-val").textContent = `${inputPassLimit.value} ${t('passUnit')}`;

  // Varsayılan takım isimlerini güncelle
  const t1Input = document.getElementById("team1-name");
  const t2Input = document.getElementById("team2-name");
  t1Input.placeholder = t('team1Default');
  t2Input.placeholder = t('team2Default');

  if (!t1Input.value || t1Input.value === "Kırmızı Takım" || t1Input.value === "Red Team") {
    t1Input.value = t('team1Default');
  }
  if (!t2Input.value || t2Input.value === "Mavi Takım" || t2Input.value === "Blue Team") {
    t2Input.value = t('team2Default');
  }

  // Hazırlık & Oyun İçi
  document.getElementById("ready-subtitle").textContent = t('readySubtitle');
  document.getElementById("btn-start-turn-text").textContent = t('startTurnBtn');

  document.getElementById("pause-title").textContent = t('pauseTitle');
  document.getElementById("pause-subtitle").textContent = t('pauseSubtitle');
  document.getElementById("btn-resume-text").textContent = t('resumeBtn');
  document.getElementById("btn-main-menu-text").textContent = t('mainMenuBtn');
  document.getElementById("btn-undo-text").textContent = t('undoBtn');
  document.getElementById("btn-undo").title = t('undoTitle');

  document.getElementById("lbl-stat-correct").textContent = t('statCorrect');
  document.getElementById("lbl-stat-tabu").textContent = t('statTabu');
  document.getElementById("lbl-stat-pass").textContent = t('statPass');

  document.getElementById("label-tabu-btn").textContent = t('tabuBtn', gameState.tabuPenalty);
  document.getElementById("label-pass-btn").textContent = t('passBtn', gameState.turnPassesLeft);
  document.getElementById("label-correct-btn").textContent = t('correctBtn');

  // Tur Özeti
  document.getElementById("summary-title").textContent = t('summaryTitle');
  document.getElementById("summary-net-label").textContent = t('summaryNetLabel');
  document.getElementById("summary-history-title").textContent = t('playedWordsTitle');
  document.getElementById("summary-hint-text").textContent = t('reviewHint');
  document.getElementById("btn-next-turn-text").textContent = t('nextTurnBtn');

  // Oyun Bitti
  document.getElementById("gameover-title").textContent = t('gameOverTitle');
  document.getElementById("lbl-final-scores").textContent = t('finalScoresTitle');
  document.getElementById("btn-restart-text").textContent = t('newGameBtn');
}

// ==========================================================================
// ⚙️ AYARLAR YÖNETİMİ VE KAYDETME
// ==========================================================================
function loadSavedSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!saved) return;
    const s = JSON.parse(saved);

    const t1Input = document.getElementById("team1-name");
    const t2Input = document.getElementById("team2-name");

    if (s.team1) {
      if (s.team1 === "Kırmızı Takım" || s.team1 === "Red Team") {
        t1Input.value = t('team1Default');
      } else {
        t1Input.value = s.team1;
      }
    }
    if (s.team2) {
      if (s.team2 === "Mavi Takım" || s.team2 === "Blue Team") {
        t2Input.value = t('team2Default');
      } else {
        t2Input.value = s.team2;
      }
    }
    if (s.time) {
      document.getElementById("input-time").value = s.time;
      document.getElementById("time-val").textContent = `${s.time} ${t('secondsUnit')}`;
    }
    if (s.rounds) {
      document.getElementById("input-rounds").value = s.rounds;
      document.getElementById("rounds-val").textContent = `${s.rounds} ${t('roundsUnit')}`;
    }
    if (s.tabuPenalty) {
      document.getElementById("input-tabu-penalty").value = s.tabuPenalty;
      document.getElementById("tabu-penalty-val").textContent = `-${s.tabuPenalty} ${t('penaltyUnit')}`;
    }
    if (s.passLimit !== undefined) {
      document.getElementById("input-pass-limit").value = s.passLimit;
      document.getElementById("pass-limit-val").textContent = `${s.passLimit} ${t('passUnit')}`;
    }
  } catch (e) {}
}

function saveCurrentSettings() {
  try {
    const s = {
      team1: document.getElementById("team1-name").value.trim(),
      team2: document.getElementById("team2-name").value.trim(),
      time: parseInt(document.getElementById("input-time").value),
      rounds: parseInt(document.getElementById("input-rounds").value),
      tabuPenalty: parseInt(document.getElementById("input-tabu-penalty").value),
      passLimit: parseInt(document.getElementById("input-pass-limit").value)
    };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(s));
  } catch (e) {}
}

function showScreen(screenName) {
  gameState.currentScreen = screenName;
  
  // History state güncelle (Geri tuşu takibi için)
  try {
    window.history.pushState({ screen: screenName }, '');
  } catch (e) {}

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

  // PWA banner görünürlük kontrolü
  const pwaBanner = document.getElementById("pwa-install-banner");
  if (pwaBanner && deferredPWAInstallPrompt) {
    if (screenName === 'setup') {
      pwaBanner.classList.remove("hidden");
    } else {
      pwaBanner.classList.add("hidden");
    }
  }
}

function initSetupScreen() {
  const inputTime = document.getElementById("input-time");
  const timeVal = document.getElementById("time-val");
  const inputRounds = document.getElementById("input-rounds");
  const roundsVal = document.getElementById("rounds-val");
  const inputTabuPenalty = document.getElementById("input-tabu-penalty");
  const tabuPenaltyVal = document.getElementById("tabu-penalty-val");
  const inputPassLimit = document.getElementById("input-pass-limit");
  const passLimitVal = document.getElementById("pass-limit-val");
  const btnResetDeck = document.getElementById("btn-reset-deck");

  inputTime.addEventListener("input", (e) => timeVal.textContent = `${e.target.value} ${t('secondsUnit')}`);
  inputRounds.addEventListener("input", (e) => roundsVal.textContent = `${e.target.value} ${t('roundsUnit')}`);
  inputTabuPenalty.addEventListener("input", (e) => tabuPenaltyVal.textContent = `-${e.target.value} ${t('penaltyUnit')}`);
  inputPassLimit.addEventListener("input", (e) => passLimitVal.textContent = `${e.target.value} ${t('passUnit')}`);

  btnResetDeck.addEventListener("click", () => {
    initDeckPool(true);
    HapticManager.trigger('pass');
    btnResetDeck.textContent = t('deckResetSuccess');
    setTimeout(() => btnResetDeck.textContent = t('resetDeckBtn'), 1200);
  });

  document.getElementById("btn-start-game").addEventListener("click", () => {
    soundFX.init();
    HapticManager.trigger('pass');
    saveCurrentSettings();

    const team1 = document.getElementById("team1-name").value.trim() || t('team1Default');
    const team2 = document.getElementById("team2-name").value.trim() || t('team2Default');

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

    // Destede yeterli kart yoksa tazele
    if (gameState.availableCards.length === 0) {
      initDeckPool(false);
    }

    prepareReadyScreen();
  });
}

// ==========================================================================
// 🚩 TUR HAZIRLIK VE 3-2-1 GERİ SAYIM
// ==========================================================================
function prepareReadyScreen() {
  const activeTeam = gameState.teams[gameState.currentTeamIndex];

  document.getElementById("ready-round-badge").textContent = t('roundBadge', gameState.currentRound, gameState.totalRounds);
  
  const readyTeamName = document.getElementById("ready-team-name");
  readyTeamName.textContent = activeTeam.name;
  readyTeamName.style.color = gameState.currentTeamIndex === 0 ? '#f87171' : '#60a5fa';

  document.getElementById("ready-score-team1-label").textContent = gameState.teams[0].name;
  document.getElementById("ready-score-team1").textContent = gameState.teams[0].score;
  document.getElementById("ready-score-team2-label").textContent = gameState.teams[1].name;
  document.getElementById("ready-score-team2").textContent = gameState.teams[1].score;

  showScreen("ready");
}

function runCountdown(callback) {
  soundFX.init();

  const overlay = document.getElementById("countdown-overlay");
  const numberEl = document.getElementById("countdown-number");
  const teamTitle = document.getElementById("countdown-team-title");

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  teamTitle.textContent = t('getReadyTitle', activeTeam.name);
  
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
      HapticManager.trigger('correct');
    } else {
      numberEl.style.fontSize = "clamp(80px, 22vw, 110px)";
      numberEl.style.color = "#f59e0b";
      numberEl.style.textShadow = "0 10px 30px rgba(251,191,36,0.4)";
      soundFX.playCountdownTick();
      HapticManager.trigger('warning');
    }
    numberEl.classList.add("animate-pop");
  }

  updateDisplay(count);

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      updateDisplay(count);
    } else if (count === 0) {
      updateDisplay(t('countdownStart'), true);
    } else {
      clearInterval(interval);
      overlay.classList.add("hidden");
      callback();
    }
  }, 850);
}

document.getElementById("btn-start-turn").addEventListener("click", () => {
  runCountdown(() => {
    startTurn();
  });
});

// ==========================================================================
// ⏱️ SAYAÇ VE AKTİF OYUN DÖNGÜSÜ
// ==========================================================================
function clearAnimationTimeouts() {
  if (gameState.animationTimeout1) clearTimeout(gameState.animationTimeout1);
  if (gameState.animationTimeout2) clearTimeout(gameState.animationTimeout2);
  gameState.animationTimeout1 = null;
  gameState.animationTimeout2 = null;
  gameState.isAnimating = false;
  
  const cardCard = document.getElementById("card-card");
  if (cardCard) {
    cardCard.classList.remove("anim-correct", "anim-tabu", "anim-pass", "anim-undo");
  }
}

function resetActiveTurnState() {
  clearInterval(gameState.timerInterval);
  clearAnimationTimeouts();

  gameState.isPaused = false;
  gameState.pauseReason = 'none';
  gameState.turnStats = { correct: 0, tabu: 0 };
  gameState.turnHistory = [];
  gameState.lastAction = null;
  gameState.lastTickedSecond = null;
  
  const pauseOverlay = document.getElementById("pause-overlay");
  if (pauseOverlay) pauseOverlay.classList.add("hidden");
  
  const timerBox = document.getElementById("timer-box");
  if (timerBox) {
    timerBox.classList.remove("timer-paused-glow", "timer-warning");
  }
}

function startTurn() {
  resetActiveTurnState();

  gameState.turnPassesLeft = gameState.passLimit;
  gameState.timeLeft = gameState.turnDuration;
  gameState.lastTickedSecond = gameState.timeLeft;

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  document.getElementById("play-team-name").textContent = activeTeam.name;
  document.getElementById("play-team-badge").style.background = gameState.currentTeamIndex === 0 ? '#ef4444' : '#3b82f6';
  document.getElementById("label-tabu-btn").textContent = t('tabuBtn', gameState.tabuPenalty);

  updateUndoButtonUI();
  updateTurnStatsUI();
  updateTimerUI();
  nextCard();
  showScreen("play");
  
  // Ekranı açık tut (Wake Lock)
  requestWakeLock();
  startTimer();
}

function updateTimerUI() {
  const timerEl = document.getElementById("play-timer");
  const timerBorder = document.getElementById("timer-border");
  const timerBox = document.getElementById("timer-box");
  const timerIcon = document.getElementById("timer-icon");

  timerEl.textContent = gameState.timeLeft;

  if (timerBorder && gameState.timerPathLength > 0) {
    const progress = Math.max(0, gameState.timeLeft / gameState.turnDuration);
    const offset = gameState.timerPathLength * (1 - progress);
    timerBorder.style.strokeDashoffset = offset;

    // Son 10 saniye uyarı stili
    if (gameState.timeLeft <= 10 && gameState.timeLeft > 0 && !gameState.isPaused) {
      timerBorder.setAttribute("stroke", "#ef4444");
      timerEl.style.color = "#ef4444";
      timerIcon.style.color = "#ef4444";
      timerBox.classList.add("timer-warning");
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
  gameState.turnEndTime = Date.now() + (gameState.timeLeft * 1000);
  gameState.lastTickedSecond = gameState.timeLeft;
  updateTimerUI();

  gameState.timerInterval = setInterval(() => {
    if (!gameState.isPaused) {
      const remaining = Math.max(0, Math.ceil((gameState.turnEndTime - Date.now()) / 1000));
      
      if (remaining !== gameState.timeLeft) {
        gameState.timeLeft = remaining;
        updateTimerUI();

        // ⏰ Ses ve Titreşim Koreografisi
        if (gameState.lastTickedSecond !== remaining) {
          gameState.lastTickedSecond = remaining;

          // 1) 10 - 4 saniye arası standart tık sesi
          if (remaining <= 10 && remaining > 3) {
            soundFX.playCountdownTick();
          }
          // 2) Son 3 saniye (3, 2, 1): Hızlandırılmış/yüksek ses + Senkronize Titreşim
          else if (remaining <= 3 && remaining > 0) {
            soundFX.playUrgentTick();
            HapticManager.trigger('warning');
          }
        }
      }

      if (gameState.timeLeft <= 0) {
        soundFX.playTimeUpChime();
        HapticManager.trigger('timeup');
        endTurn();
      }
    }
  }, 100);
}

// ==========================================================================
// ⏸️ DURAKLATMA (PAUSE) VE GERİ AL (UNDO) ENTEGRASYONU
// ==========================================================================
const btnPause = document.getElementById("btn-pause");
const pauseOverlay = document.getElementById("pause-overlay");
const btnResume = document.getElementById("btn-resume");
const btnMainMenu = document.getElementById("btn-main-menu");

function pauseGameManually() {
  gameState.isPaused = true;
  gameState.pauseReason = 'manual';
  clearInterval(gameState.timerInterval);
  releaseWakeLock();
  HapticManager.trigger('pass');
  pauseOverlay.classList.remove("hidden");
  document.getElementById("timer-box").classList.add("timer-paused-glow");
}

function resumeGame() {
  gameState.isPaused = false;
  gameState.pauseReason = 'none';
  pauseOverlay.classList.add("hidden");
  document.getElementById("timer-box").classList.remove("timer-paused-glow");
  HapticManager.trigger('pass');
  requestWakeLock();
  startTimer();
}

btnPause.addEventListener("click", () => {
  if (gameState.isPaused && gameState.pauseReason === 'manual') {
    resumeGame();
  } else {
    pauseGameManually();
  }
});

btnResume.addEventListener("click", resumeGame);

btnMainMenu.addEventListener("click", () => {
  resetActiveTurnState();
  releaseWakeLock();
  updateDeckUI();
  showScreen("setup");
});

// Aksiyon butonlarına basıldığında, eğer sadece Undo yüzünden duraklatılmışsa süreyi devam ettir
function resumeIfPausedByUndo() {
  if (gameState.isPaused && gameState.pauseReason === 'undo') {
    gameState.isPaused = false;
    gameState.pauseReason = 'none';
    document.getElementById("timer-box").classList.remove("timer-paused-glow");
    requestWakeLock();
    startTimer();
  }
}

// ==========================================================================
// 🎴 KART ANİMASYONLARI VE KART ÇEKME
// ==========================================================================
function triggerCardAnimation(animClass, callback) {
  if (gameState.isAnimating) return;
  gameState.isAnimating = true;

  const cardCard = document.getElementById("card-card");
  cardCard.classList.remove("anim-correct", "anim-tabu", "anim-pass", "anim-undo");
  void cardCard.offsetWidth;
  cardCard.classList.add(animClass);

  // 100ms sonra kart içeriğini değiştir
  gameState.animationTimeout1 = setTimeout(() => {
    if (typeof callback === "function") callback();
  }, 100);

  // 260ms sonra animasyon kilidini aç
  gameState.animationTimeout2 = setTimeout(() => {
    cardCard.classList.remove(animClass);
    gameState.isAnimating = false;
  }, 260);
}

function nextCard() {
  if (gameState.availableCards.length === 0) {
    initDeckPool(false);
  }

  gameState.currentCard = gameState.availableCards.pop();
  updateDeckUI();
  renderCard(gameState.currentCard);
}

function renderCard(card) {
  if (!card) return;
  document.getElementById("card-word").textContent = card.kelime;

  const forbiddenContainer = document.getElementById("card-forbidden");
  forbiddenContainer.innerHTML = "";

  if (card.yasakli_kelimeler && Array.isArray(card.yasakli_kelimeler)) {
    card.yasakli_kelimeler.forEach(word => {
      const item = document.createElement("div");
      item.className = "forbidden-word-item";
      item.textContent = word;
      forbiddenContainer.appendChild(item);
    });
  }
}

// ==========================================================================
// ↩️ GERİ AL (UNDO) İŞLEMİ
// ==========================================================================
function updateUndoButtonUI() {
  const btnUndo = document.getElementById("btn-undo");
  if (gameState.lastAction) {
    btnUndo.classList.remove("disabled");
  } else {
    btnUndo.classList.add("disabled");
  }
}

document.getElementById("btn-undo").addEventListener("click", () => {
  if (!gameState.lastAction || gameState.isAnimating) return;

  soundFX.playUndo();
  HapticManager.trigger('undo');

  const last = gameState.lastAction;

  if (last.type === 'correct') {
    gameState.turnStats.correct = Math.max(0, gameState.turnStats.correct - 1);
  } else if (last.type === 'tabu') {
    gameState.turnStats.tabu = Math.max(0, gameState.turnStats.tabu - 1);
  } else if (last.type === 'pass') {
    gameState.turnPassesLeft++;
  }

  if (gameState.turnHistory.length > 0) {
    gameState.turnHistory.pop();
  }

  const previousCard = last.card;
  unmarkCardAsPlayed(previousCard);

  // Şimdiki kartı desteye geri koy
  if (gameState.currentCard && gameState.currentCard !== previousCard) {
    gameState.availableCards.push(gameState.currentCard);
    updateDeckUI();
  }

  gameState.currentCard = previousCard;
  renderCard(gameState.currentCard);

  gameState.lastAction = null;

  // Geri Al basıldığında süreyi duraklat (kartı gizlemeden)
  gameState.isPaused = true;
  gameState.pauseReason = 'undo';
  clearInterval(gameState.timerInterval);
  document.getElementById("timer-box").classList.add("timer-paused-glow");

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-undo");
});

// ==========================================================================
// 🎮 OYUN BUTONLARI (DOĞRU, TABU, PAS)
// ==========================================================================
document.getElementById("btn-correct").addEventListener("click", () => {
  if (gameState.isAnimating || (gameState.isPaused && gameState.pauseReason === 'manual')) return;
  resumeIfPausedByUndo();
  soundFX.playCorrect();
  HapticManager.trigger('correct');

  const played = gameState.currentCard;
  markCardAsPlayed(played);

  gameState.lastAction = { type: "correct", card: played };
  gameState.turnStats.correct++;
  gameState.turnHistory.push({ card: played, type: "correct" });

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-correct", () => {
    nextCard();
  });
});

document.getElementById("btn-tabu").addEventListener("click", () => {
  if (gameState.isAnimating || (gameState.isPaused && gameState.pauseReason === 'manual')) return;
  resumeIfPausedByUndo();
  soundFX.playTabu();
  HapticManager.trigger('tabu');

  const played = gameState.currentCard;
  markCardAsPlayed(played);

  gameState.lastAction = { type: "tabu", card: played };
  gameState.turnStats.tabu++;
  gameState.turnHistory.push({ card: played, type: "tabu" });

  updateUndoButtonUI();
  updateTurnStatsUI();

  triggerCardAnimation("anim-tabu", () => {
    nextCard();
  });
});

document.getElementById("btn-pass").addEventListener("click", () => {
  if (gameState.isAnimating || gameState.turnPassesLeft <= 0 || (gameState.isPaused && gameState.pauseReason === 'manual')) return;
  resumeIfPausedByUndo();
  soundFX.playPassWhoosh();
  HapticManager.trigger('pass');

  const played = gameState.currentCard;
  markCardAsPlayed(played);

  gameState.lastAction = { type: "pass", card: played };
  gameState.turnPassesLeft--;
  gameState.turnHistory.push({ card: played, type: "pass" });

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
  document.getElementById("label-pass-btn").textContent = t('passBtn', gameState.turnPassesLeft);
  btnPass.disabled = gameState.turnPassesLeft <= 0;
}

// ==========================================================================
// 📊 TUR BİTİŞİ VE İNTERAKTİF ÖZET EKRANI (ROUND REVIEW UI)
// ==========================================================================
function endTurn() {
  clearInterval(gameState.timerInterval);
  clearAnimationTimeouts();
  releaseWakeLock();
  
  pauseOverlay.classList.add("hidden");
  document.getElementById("timer-box").classList.remove("timer-paused-glow", "timer-warning");

  // O anki taban puanı sakla
  gameState.turnInitialTeamScore = gameState.teams[gameState.currentTeamIndex].score;

  const activeTeam = gameState.teams[gameState.currentTeamIndex];
  document.getElementById("summary-team-title").textContent = t('summaryTeamSubtitle', activeTeam.name);
  
  renderSummaryHistoryList();
  recalculateSummaryScore(false);

  showScreen("summary");
}

function recalculateSummaryScore(animate = true) {
  const correctCount = gameState.turnHistory.filter(i => i.type === 'correct').length;
  const tabuCount = gameState.turnHistory.filter(i => i.type === 'tabu').length;
  
  const netScore = (correctCount * 1) - (tabuCount * gameState.tabuPenalty);
  gameState.teams[gameState.currentTeamIndex].score = gameState.turnInitialTeamScore + netScore;

  const netScoreEl = document.getElementById("summary-net-score");
  netScoreEl.textContent = (netScore >= 0 ? `+${netScore}` : `${netScore}`);
  netScoreEl.style.color = netScore >= 0 ? '#34d399' : '#f87171';

  if (animate) {
    netScoreEl.classList.remove("animate-pop");
    void netScoreEl.offsetWidth;
    netScoreEl.classList.add("animate-pop");
  }
}

function renderSummaryHistoryList() {
  const historyContainer = document.getElementById("summary-history-list");
  historyContainer.innerHTML = "";

  if (gameState.turnHistory.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "history-empty-msg";
    emptyMsg.textContent = t('noWordsPlayed');
    historyContainer.appendChild(emptyMsg);
    return;
  }

  gameState.turnHistory.forEach((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "history-item-card";

    // Ana Satır
    const row = document.createElement("div");
    row.className = "history-row";

    // Kelime & Akordeon Başlığı (Chevron ile)
    const toggleArea = document.createElement("div");
    toggleArea.className = "history-word-toggle";
    toggleArea.title = t('reviewHint');

    toggleArea.innerHTML = `
      <svg class="history-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
      <span class="history-word-text truncate">${item.card.kelime}</span>
    `;

    toggleArea.addEventListener("click", () => {
      cardContainer.classList.toggle("expanded");
      HapticManager.trigger('pass');
    });

    // 3'lü Review Buton Grubu
    const btnGroup = document.createElement("div");
    btnGroup.className = "review-btn-group";

    const btnCorrect = document.createElement("button");
    btnCorrect.className = `review-btn review-btn-correct ${item.type === 'correct' ? 'active-correct' : ''}`;
    btnCorrect.textContent = t('reviewCorrect');

    const btnTabu = document.createElement("button");
    btnTabu.className = `review-btn review-btn-tabu ${item.type === 'tabu' ? 'active-tabu' : ''}`;
    btnTabu.textContent = t('reviewTabu', gameState.tabuPenalty);

    const btnPass = document.createElement("button");
    btnPass.className = `review-btn review-btn-pass ${item.type === 'pass' ? 'active-pass' : ''}`;
    btnPass.textContent = t('reviewPass');

    const updateButtonVisuals = (newType) => {
      btnCorrect.classList.toggle("active-correct", newType === 'correct');
      btnTabu.classList.toggle("active-tabu", newType === 'tabu');
      btnPass.classList.toggle("active-pass", newType === 'pass');
    };

    btnCorrect.addEventListener("click", (e) => {
      e.stopPropagation();
      if (item.type !== 'correct') {
        item.type = 'correct';
        soundFX.playReviewToggle();
        HapticManager.trigger('correct');
        updateButtonVisuals('correct');
        recalculateSummaryScore(true);
      }
    });

    btnTabu.addEventListener("click", (e) => {
      e.stopPropagation();
      if (item.type !== 'tabu') {
        item.type = 'tabu';
        soundFX.playReviewToggle();
        HapticManager.trigger('tabu');
        updateButtonVisuals('tabu');
        recalculateSummaryScore(true);
      }
    });

    btnPass.addEventListener("click", (e) => {
      e.stopPropagation();
      if (item.type !== 'pass') {
        item.type = 'pass';
        soundFX.playReviewToggle();
        HapticManager.trigger('pass');
        updateButtonVisuals('pass');
        recalculateSummaryScore(true);
      }
    });

    btnGroup.appendChild(btnCorrect);
    btnGroup.appendChild(btnTabu);
    btnGroup.appendChild(btnPass);

    row.appendChild(toggleArea);
    row.appendChild(btnGroup);
    cardContainer.appendChild(row);

    // Akordeon Detayı: 5 Yasaklı Kelime
    const accordion = document.createElement("div");
    accordion.className = "history-accordion";

    const label = document.createElement("div");
    label.className = "accordion-label";
    label.textContent = t('forbiddenWordsLabel');

    const tagsGrid = document.createElement("div");
    tagsGrid.className = "accordion-tags-grid";

    if (item.card.yasakli_kelimeler && Array.isArray(item.card.yasakli_kelimeler)) {
      item.card.yasakli_kelimeler.forEach(w => {
        const tag = document.createElement("span");
        tag.className = "accordion-tag";
        tag.textContent = w;
        tagsGrid.appendChild(tag);
      });
    }

    accordion.appendChild(label);
    accordion.appendChild(tagsGrid);
    cardContainer.appendChild(accordion);

    historyContainer.appendChild(cardContainer);
  });
}

document.getElementById("btn-next-turn").addEventListener("click", () => {
  HapticManager.trigger('pass');
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

// ==========================================================================
// 🏆 OYUN BİTTİ VE FİNAL SKOR EKRANI
// ==========================================================================
function renderGameOverScreen() {
  releaseWakeLock();
  const t1 = gameState.teams[0];
  const t2 = gameState.teams[1];

  let winnerText = "";
  if (t1.score > t2.score) {
    winnerText = t('winnerBanner', t1.name);
  } else if (t2.score > t1.score) {
    winnerText = t('winnerBanner', t2.name);
  } else {
    winnerText = t('drawBanner');
  }

  document.getElementById("gameover-winner-text").textContent = winnerText;

  const scoresContainer = document.getElementById("gameover-scores");
  scoresContainer.innerHTML = "";

  // 1. Takım Satırı
  const row1 = document.createElement("div");
  row1.className = "gameover-score-row gameover-score-row-red";
  const name1 = document.createElement("span");
  name1.className = "gameover-team-name-red";
  name1.textContent = t1.name;
  const score1 = document.createElement("span");
  score1.className = "gameover-score-text";
  score1.textContent = `${t1.score} ${t('pointsSuffix')}`;
  row1.appendChild(name1);
  row1.appendChild(score1);

  // 2. Takım Satırı
  const row2 = document.createElement("div");
  row2.className = "gameover-score-row gameover-score-row-blue";
  const name2 = document.createElement("span");
  name2.className = "gameover-team-name-blue";
  name2.textContent = t2.name;
  const score2 = document.createElement("span");
  score2.className = "gameover-score-text";
  score2.textContent = `${t2.score} ${t('pointsSuffix')}`;
  row2.appendChild(name2);
  row2.appendChild(score2);

  scoresContainer.appendChild(row1);
  scoresContainer.appendChild(row2);

  showScreen("gameover");
}

document.getElementById("btn-restart").addEventListener("click", () => {
  resetActiveTurnState();
  releaseWakeLock();
  HapticManager.trigger('pass');
  updateDeckUI();
  showScreen("setup");
});
