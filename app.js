// 🔹 SİSTEM YÖNETİCİLERİ
class AudioController {
  constructor() { this.ctx = null; }
  init() { if (!this.ctx && window.AudioContext) this.ctx = new AudioContext(); if(this.ctx) this.ctx.resume(); }
  playTone(freq, type='sine', dur=0.1) {
    if(!this.ctx) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.1, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(); o.stop(this.ctx.currentTime + dur);
  }
  playCorrect() { this.playTone(523.25); setTimeout(()=>this.playTone(659.25), 90); }
  playTabu() { this.playTone(140, 'sawtooth', 0.25); }
  playUndo() { this.playTone(400); }
}

class TabooGame {
  constructor() {
    this.audio = new AudioController();
    this.state = {
      teams: [{ name: "Kırmızı Takım", score: 0 }, { name: "Mavi Takım", score: 0 }],
      settings: { time: 60, rounds: 3, penalty: 1, passLimit: 3 },
      currentTeamIdx: 0, currentRound: 1,
      deck: [], turnHistory: [], currentCard: null, turnNetScore: 0,
      timerState: { active: false, timeLeft: 0, endTime: 0, pauseTime: 0, reqId: null }
    };
    this.editingIndex = -1; 
    this.isAnimating = false; // 🔴 Hata 2: Çakışmaları önleyecek global bayrak eklendi
    
    this.cacheDOM();
    this.bindEvents();
    this.hideSplash();
  }

  cacheDOM() {
    this.dom = {
      splash: document.getElementById('splash-screen'), // 🟡 Hata 7: Splash DOM'a taşındı
      screens: document.querySelectorAll('.screen'),
      // 🟡 Hata 6: Dizi yerine isimli objeye geçildi (Kırılganlık giderildi)
      setupInputs: {
        time: { input: document.getElementById('input-time'), val: document.getElementById('time-val') },
        rounds: { input: document.getElementById('input-rounds'), val: document.getElementById('rounds-val') },
        penalty: { input: document.getElementById('input-tabu-penalty'), val: document.getElementById('tabu-penalty-val') },
        passLimit: { input: document.getElementById('input-pass-limit'), val: document.getElementById('pass-limit-val') }
      },
      team1Name: document.getElementById('team1-name'), team2Name: document.getElementById('team2-name'),
      btnStart: document.getElementById('btn-start-game'),
      
      readyBadge: document.getElementById('ready-round-badge'), readyTitle: document.getElementById('ready-team-name'),
      score1: document.getElementById('ready-score-team1'), score2: document.getElementById('ready-score-team2'),
      label1: document.getElementById('ready-score-team1-label'), label2: document.getElementById('ready-score-team2-label'),
      btnStartTurn: document.getElementById('btn-start-turn'), countOverlay: document.getElementById('countdown-overlay'),
      
      playTeam: document.getElementById('play-team-name'), playTimer: document.getElementById('play-timer'),
      timerBorder: document.getElementById('timer-border'),
      statCorrect: document.getElementById('stat-correct'), statTabu: document.getElementById('stat-tabu'), statPass: document.getElementById('stat-pass'),
      cardWord: document.getElementById('card-word'), cardForbidden: document.getElementById('card-forbidden'),
      cardContainer: document.getElementById('card-card'),
      btnUndo: document.getElementById('btn-undo'),
      btnCorrect: document.getElementById('btn-correct'), btnTabu: document.getElementById('btn-tabu'), btnPass: document.getElementById('btn-pass'),
      lblTabu: document.getElementById('label-tabu-btn'), lblPass: document.getElementById('label-pass-btn'),
      
      summaryTeam: document.getElementById('summary-team-title'), summaryNet: document.getElementById('summary-net-score'),
      historyList: document.getElementById('summary-history-list'), btnNextTurn: document.getElementById('btn-next-turn'),
      
      editModal: document.getElementById('edit-modal'), editWordDisplay: document.getElementById('edit-word-display'),
      editBtns: document.querySelectorAll('#edit-modal .edit-actions .btn'), btnCloseEdit: document.getElementById('btn-close-edit'),
      
      gameOverWinner: document.getElementById('gameover-winner-text'), finalScores: document.getElementById('gameover-scores'),
      btnRestart: document.getElementById('btn-restart'),
      pauseOverlay: document.getElementById('pause-overlay'), btnPause: document.getElementById('btn-pause'), 
      btnResume: document.getElementById('btn-resume'),
      btnMainMenu: document.getElementById('btn-main-menu') // 🔴 Hata 1: Ana Menü butonu eklendi
    };
  }

  bindEvents() {
    // 🟡 Hata 6: Objeye dönen inputlar senkronize edildi
    Object.values(this.dom.setupInputs).forEach(item => {
      item.input.addEventListener('input', e => item.val.textContent = e.target.value + (item.input.id.includes('time') ? ' sn' : ''));
    });
    
    this.dom.btnStart.addEventListener('click', () => this.startGame());
    this.dom.btnStartTurn.addEventListener('click', () => this.startCountdown());
    
    this.dom.btnCorrect.addEventListener('click', () => this.processAction('correct'));
    this.dom.btnTabu.addEventListener('click', () => this.processAction('tabu'));
    this.dom.btnPass.addEventListener('click', () => this.processAction('pass'));
    this.dom.btnUndo.addEventListener('click', () => this.undoAction());
    
    this.dom.btnPause.addEventListener('click', () => this.togglePause());
    this.dom.btnResume.addEventListener('click', () => this.togglePause());
    this.dom.btnMainMenu.addEventListener('click', () => this.confirmExitToMenu()); // 🔴 Hata 1: Çıkış olayı bağlandı
    
    this.dom.btnNextTurn.addEventListener('click', () => this.advanceTurn());
    this.dom.btnRestart.addEventListener('click', () => this.showScreen('screen-setup'));
    
    this.dom.btnCloseEdit.addEventListener('click', () => this.dom.editModal.classList.add('hidden'));
    this.dom.editBtns.forEach(btn => btn.addEventListener('click', (e) => this.applyEdit(e.currentTarget.dataset.status)));
  }

  shuffleDeck(array) {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m]; array[m] = array[i]; array[i] = t;
    }
    return array;
  }

  hideSplash() {
    setTimeout(() => {
      this.dom.splash.style.opacity = '0';
      setTimeout(() => this.dom.splash.classList.add('hidden'), 300);
    }, 1200);
  }

  showScreen(id) {
    this.dom.screens.forEach(s => s.classList.toggle('hidden', s.id !== id));
  }

  startGame() {
    this.audio.init();
    this.state.teams[0].name = this.dom.team1Name.value || "Kırmızı Takım";
    this.state.teams[1].name = this.dom.team2Name.value || "Mavi Takım";
    this.state.teams.forEach(t => t.score = 0);
    
    // 🟡 Hata 6: İsimle güvenli erişim sağlandı
    this.state.settings = {
      time: parseInt(this.dom.setupInputs.time.input.value),
      rounds: parseInt(this.dom.setupInputs.rounds.input.value),
      penalty: parseInt(this.dom.setupInputs.penalty.input.value),
      passLimit: parseInt(this.dom.setupInputs.passLimit.input.value)
    };
    
    this.state.currentRound = 1; this.state.currentTeamIdx = 0;
    this.state.deck = this.shuffleDeck([...ALL_CARDS]);
    this.prepareReadyScreen();
  }

  prepareReadyScreen() {
    this.dom.readyBadge.textContent = `Tur ${this.state.currentRound} / ${this.state.settings.rounds}`;
    this.dom.readyTitle.textContent = this.state.teams[this.state.currentTeamIdx].name;
    this.dom.score1.textContent = this.state.teams[0].score;
    this.dom.score2.textContent = this.state.teams[1].score;
    this.dom.label1.textContent = this.state.teams[0].name;
    this.dom.label2.textContent = this.state.teams[1].name;
    this.showScreen('screen-ready');
  }

  startCountdown() {
    this.dom.countOverlay.classList.remove('hidden');
    let c = 3; this.dom.countOverlay.querySelector('#countdown-number').textContent = c;
    const intv = setInterval(() => {
      c--;
      if (c > 0) { this.dom.countOverlay.querySelector('#countdown-number').textContent = c; } 
      else { clearInterval(intv); this.dom.countOverlay.classList.add('hidden'); this.startTurn(); }
    }, 900);
  }

  startTurn() {
    this.state.turnHistory = [];
    this.state.timerState.timeLeft = this.state.settings.time;
    this.state.timerState.active = true;
    
    this.dom.playTeam.textContent = this.state.teams[this.state.currentTeamIdx].name;
    this.dom.lblTabu.textContent = `TABU (-${this.state.settings.penalty})`;
    
    this.updateStatsUI();
    this.drawCard();
    this.showScreen('screen-play');
    
    this.state.timerState.endTime = performance.now() + (this.state.timerState.timeLeft * 1000);
    this.runTimer();
  }

  runTimer() {
    if (!this.state.timerState.active) return;
    const now = performance.now();
    const remaining = Math.max(0, Math.ceil((this.state.timerState.endTime - now) / 1000));
    
    this.state.timerState.timeLeft = remaining;
    this.dom.playTimer.textContent = remaining;
    
    const offset = 236 * (1 - (remaining / this.state.settings.time));
    this.dom.timerBorder.style.strokeDashoffset = offset;
    this.dom.timerBorder.style.stroke = remaining <= 10 ? '#ef4444' : '#facc15';
    
    if (remaining > 0) {
      this.state.timerState.reqId = requestAnimationFrame(() => this.runTimer());
    } else {
      this.endTurn();
    }
  }

  togglePause() {
    this.state.timerState.active = !this.state.timerState.active;
    if (!this.state.timerState.active) {
      cancelAnimationFrame(this.state.timerState.reqId);
      this.state.timerState.pauseTime = performance.now();
      this.dom.pauseOverlay.classList.remove('hidden');
    } else {
      this.state.timerState.endTime += (performance.now() - this.state.timerState.pauseTime);
      this.dom.pauseOverlay.classList.add('hidden');
      this.runTimer();
    }
  }

  // 🔴 Hata 1: Oyun ortası güvenli çıkış mantığı eklendi
  confirmExitToMenu() {
    if (confirm("Oyun iptal edilecek ve ana menüye dönülecek. İlerleyiş silinecektir. Emin misiniz?")) {
        this.state.timerState.active = false;
        cancelAnimationFrame(this.state.timerState.reqId);
        this.dom.pauseOverlay.classList.add('hidden');
        this.showScreen('screen-setup');
    }
  }

  drawCard() {
    if (!this.state.deck.length) {
      this.state.deck = this.shuffleDeck([...ALL_CARDS]);
      // 🟠 Hata 3: Yeni destenin ilk kartı, mevcut kart ile aynıysa destenin en sonuna at.
      if (this.state.currentCard && this.state.deck[this.state.deck.length - 1].id === this.state.currentCard.id) {
        this.state.deck.unshift(this.state.deck.pop());
      }
    }
    
    this.state.currentCard = this.state.deck.pop();
    this.dom.cardWord.textContent = this.state.currentCard.kelime;
    this.dom.cardForbidden.innerHTML = ''; 
    
    const frag = document.createDocumentFragment();
    this.state.currentCard.yasakli_kelimeler.forEach(w => {
      const d = document.createElement('div');
      d.className = 'forbidden-word'; d.textContent = w; frag.appendChild(d);
    });
    this.dom.cardForbidden.appendChild(frag);
  }

  processAction(type) {
    if (this.isAnimating) return; // 🔴 Hata 2: Çifte tıklama (spam) engellendi
    
    const passCount = this.state.turnHistory.filter(h => h.type === 'pass').length;
    if (type === 'pass' && passCount >= this.state.settings.passLimit) return;
    
    this.isAnimating = true; // 🔒 Animasyon kilidi aktifleştirildi

    if (type === 'correct') this.audio.playCorrect();
    else if (type === 'tabu') this.audio.playTabu();
    
    this.state.turnHistory.push({ card: this.state.currentCard, type: type });
    this.updateStatsUI();
    
    this.dom.cardContainer.classList.add(`anim-${type}`);
    setTimeout(() => this.drawCard(), 180);
    setTimeout(() => {
      this.dom.cardContainer.classList.remove(`anim-${type}`);
      this.isAnimating = false; // 🔓 Animasyon bittiğinde kilit açıldı
    }, 400);
  }

  undoAction() {
    if (this.state.turnHistory.length === 0 || this.isAnimating) return;
    this.audio.playUndo();
    const last = this.state.turnHistory.pop();
    this.state.deck.push(this.state.currentCard);
    this.state.currentCard = last.card;
    
    this.dom.cardWord.textContent = this.state.currentCard.kelime;
    this.dom.cardForbidden.innerHTML = '';
    const frag = document.createDocumentFragment();
    this.state.currentCard.yasakli_kelimeler.forEach(w => {
      const d = document.createElement('div'); d.className = 'forbidden-word'; d.textContent = w; frag.appendChild(d);
    });
    this.dom.cardForbidden.appendChild(frag);
    
    this.updateStatsUI();
  }

  updateStatsUI() {
    const c = this.state.turnHistory.filter(h => h.type === 'correct').length;
    const t = this.state.turnHistory.filter(h => h.type === 'tabu').length;
    const p = this.state.turnHistory.filter(h => h.type === 'pass').length;
    const pLeft = this.state.settings.passLimit - p;
    
    this.dom.statCorrect.textContent = c;
    this.dom.statTabu.textContent = t;
    this.dom.statPass.textContent = pLeft;
    
    this.dom.btnPass.disabled = pLeft <= 0;
    this.dom.lblPass.textContent = `PAS (${pLeft})`;
    
    this.dom.btnUndo.classList.toggle('disabled', this.state.turnHistory.length === 0);
  }

  calculateNetScore() {
    const c = this.state.turnHistory.filter(h => h.type === 'correct').length;
    const t = this.state.turnHistory.filter(h => h.type === 'tabu').length;
    return c - (t * this.state.settings.penalty);
  }

  renderSummaryList() {
    this.state.turnNetScore = this.calculateNetScore();
    this.dom.summaryNet.textContent = this.state.turnNetScore > 0 ? `+${this.state.turnNetScore}` : this.state.turnNetScore;
    this.dom.summaryNet.className = `score-large ${this.state.turnNetScore >= 0 ? 'score-positive' : 'score-negative'}`;
    
    this.dom.historyList.innerHTML = '';
    const frag = document.createDocumentFragment();
    
    this.state.turnHistory.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'history-row';
      row.onclick = () => this.openEditModal(index);
      
      const word = document.createElement('span'); word.className = 'history-word'; word.textContent = item.card.kelime;
      const badge = document.createElement('span');
      
      if (item.type === 'correct') { badge.className = 'badge badge-correct'; badge.textContent = '+1 Doğru'; }
      else if (item.type === 'tabu') { badge.className = 'badge badge-tabu'; badge.textContent = `-${this.state.settings.penalty} Tabu`; }
      else { badge.className = 'badge badge-pass'; badge.textContent = '0 Pas'; }
      
      row.appendChild(word); row.appendChild(badge); frag.appendChild(row);
    });
    this.dom.historyList.appendChild(frag);
  }

  openEditModal(index) {
    this.editingIndex = index;
    const item = this.state.turnHistory[index];
    this.dom.editWordDisplay.textContent = item.card.kelime;
    this.dom.editModal.classList.remove('hidden');
  }

  applyEdit(newStatus) {
    if (this.editingIndex === -1) return;
    this.state.turnHistory[this.editingIndex].type = newStatus;
    this.dom.editModal.classList.add('hidden');
    this.renderSummaryList(); 
  }

  endTurn() {
    this.state.timerState.active = false;
    cancelAnimationFrame(this.state.timerState.reqId);
    this.dom.summaryTeam.textContent = this.state.teams[this.state.currentTeamIdx].name + " Sonuçları";
    this.renderSummaryList();
    this.showScreen('screen-summary');
  }

  advanceTurn() {
    this.state.teams[this.state.currentTeamIdx].score += this.state.turnNetScore;
    
    this.state.currentTeamIdx = this.state.currentTeamIdx === 0 ? 1 : 0;
    if (this.state.currentTeamIdx === 0) this.state.currentRound++;
    
    if (this.state.currentRound > this.state.settings.rounds) {
      this.showGameOver();
    } else {
      this.prepareReadyScreen();
    }
  }

  showGameOver() {
    const t1 = this.state.teams[0], t2 = this.state.teams[1];
    let winnerText = "🤝 Berabere!";
    if (t1.score > t2.score) winnerText = `🏆 ${t1.name} Kazandı!`;
    else if (t2.score > t1.score) winnerText = `🏆 ${t2.name} Kazandı!`;
    
    this.dom.gameOverWinner.textContent = winnerText;
    
    this.dom.finalScores.innerHTML = '';
    const frag = document.createDocumentFragment();
    this.state.teams.forEach(t => {
      const row = document.createElement('div'); row.className = 'flex-between mb-1';
      const n = document.createElement('span'); n.textContent = t.name;
      const s = document.createElement('span'); s.className = 'score-val'; s.style.fontSize = '22px'; s.textContent = `${t.score} Puan`;
      row.appendChild(n); row.appendChild(s); frag.appendChild(row);
    });
    this.dom.finalScores.appendChild(frag);
    this.showScreen('screen-gameover');
  }
}

document.addEventListener('DOMContentLoaded', () => new TabooGame());