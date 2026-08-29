/**
 * TABOO WORD GAME - LOCALIZATION DICTIONARIES (i18n)
 */

const TRANSLATIONS = {
  tr: {
    appTitle: "TABU",
    gameSettings: "OYUN AYARLARI",
    team1Label: "1. Takım Adı",
    team2Label: "2. Takım Adı",
    team1Default: "Kırmızı Takım",
    team2Default: "Mavi Takım",
    turnDurationLabel: "Tur Süresi",
    secondsUnit: "saniye",
    totalRoundsLabel: "Toplam Tur Sayısı",
    roundsUnit: "Tur",
    tabuPenaltyLabel: "Tabu Ceza Puanı",
    penaltyUnit: "Puan",
    passLimitLabel: "Her Turdaki Pas Hakkı",
    passUnit: "Pas",
    remainingCards: "Kalan Kart",
    resetDeckBtn: "Desteyi Yenile",
    deckResetSuccess: "Sıfırlandı!",
    startGameBtn: "Oyunu Başlat",
    infinite: "Sonsuz (∞)",
    infiniteShort: "∞",
    penaltyValueText: (p) => p === 0 ? "0 Puan (Cezasız)" : `-${p} Puan`,
    
    // Ses ve Titreşim Ayarları
    soundEffectsLabel: "Ses Efektleri",
    hapticsLabel: "Titreşim",
    soundLabelShort: "Ses",
    hapticsLabelShort: "Titreşim",
    
    // PWA & Mobil
    pwaInstallTitle: "Uygulamayı Cihazına Yükle",
    pwaInstallDesc: "İnternet bağlantısı olmadan tam ekran oynamak için ana ekranına ekle.",
    pwaInstallBtn: "Ana Ekrana Ekle",
    pwaInstalledSuccess: "Uygulama Yüklendi!",
    exitConfirm: "Aktif oyundan çıkmak ve ana menüye dönmek istediğinize emin misiniz?",

    // Hazırlık Ekranı
    roundBadge: (r, t) => t === Infinity ? `Tur ${r} / ∞` : `Tur ${r} / ${t}`,
    readySubtitle: "Sıra sizde! Anlatıcı cihazı eline alsın.",
    startTurnBtn: "Süreyi Başlat",
    getReadyTitle: (team) => `${team} Hazırlan!`,
    countdownStart: "BAŞLA!",
    
    // Aktif Oyun Ekranı
    pauseTitle: "Oyun Durduruldu",
    pauseSubtitle: "Kartlar gizlendi. Hazır olduğunuzda devam edin.",
    resumeBtn: "Devam Et",
    mainMenuBtn: "Ana Menü",
    endTurnBtn: "Turu Bitir",
    undoBtn: "Geri Al",
    undoTitle: "Son yapılan hareketi geri al ve süreyi durdur",
    tabuBtn: (p) => p === 0 ? "TABU (0)" : `TABU (-${p})`,
    passBtn: (p) => p === Infinity ? "PAS (∞)" : `PAS (${p})`,
    correctBtn: "DOĞRU (+1)",
    statCorrect: "Doğru",
    statTabu: "Tabu",
    statPass: "Kalan Pas",
    
    // Tur Özeti Ekranı
    summaryTitle: "Tur Tamamlandı!",
    summaryTeamSubtitle: (team) => `${team} Sonuçları`,
    summaryNetLabel: "Bu Turda Kazanılan Net Puan",
    playedWordsTitle: "Oynanan Kelimeler:",
    reviewHint: "Sonuçları düzeltmek için tıklayın",
    noWordsPlayed: "Bu turda kelime oynanmadı.",
    forbiddenWordsLabel: "YASAKLI KELİMELER",
    reviewCorrect: "+1 Doğru",
    reviewTabu: (p) => p === 0 ? "0 Tabu" : `-${p} Tabu`,
    reviewPass: "0 Pas",
    nextTurnBtn: "Sonraki Tura Geç",
    
    // Oyun Bitti Ekranı
    gameOverTitle: "Oyun Bitti!",
    winnerBanner: (team) => `🏆 ${team} Kazandı!`,
    drawBanner: "🤝 Berabere Bitti!",
    finalScoresTitle: "FİNAL SKORLARI",
    pointsSuffix: "Puan",
    newGameBtn: "Yeni Oyun Başlat",

    // Dil Seçimi
    langSelectLabel: "DİL SEÇİMİ"
  },
  
  en: {
    appTitle: "TABOO",
    gameSettings: "GAME SETTINGS",
    team1Label: "Team 1 Name",
    team2Label: "Team 2 Name",
    team1Default: "Red Team",
    team2Default: "Blue Team",
    turnDurationLabel: "Turn Duration",
    secondsUnit: "seconds",
    totalRoundsLabel: "Total Rounds",
    roundsUnit: "Rounds",
    tabuPenaltyLabel: "Taboo Penalty",
    penaltyUnit: "Points",
    passLimitLabel: "Pass Limit Per Turn",
    passUnit: "Passes",
    remainingCards: "Remaining Cards",
    resetDeckBtn: "Reset Deck",
    deckResetSuccess: "Reset!",
    startGameBtn: "Start Game",
    infinite: "Infinite (∞)",
    infiniteShort: "∞",
    penaltyValueText: (p) => p === 0 ? "0 Points (No penalty)" : `-${p} Points`,
    
    // Audio & Haptics Settings
    soundEffectsLabel: "Sound Effects",
    hapticsLabel: "Haptic Feedback",
    soundLabelShort: "Sound",
    hapticsLabelShort: "Haptics",
    
    // PWA & Mobile
    pwaInstallTitle: "Install App on Device",
    pwaInstallDesc: "Add to home screen for full-screen offline gameplay.",
    pwaInstallBtn: "Add to Home Screen",
    pwaInstalledSuccess: "App Installed!",
    exitConfirm: "Are you sure you want to exit the game and return to the main menu?",

    // Ready Screen
    roundBadge: (r, t) => t === Infinity ? `Round ${r} / ∞` : `Round ${r} / ${t}`,
    readySubtitle: "Your turn! The describer should take the device.",
    startTurnBtn: "Start Timer",
    getReadyTitle: (team) => `${team} Get Ready!`,
    countdownStart: "GO!",
    
    // Play Screen
    pauseTitle: "Game Paused",
    pauseSubtitle: "Cards hidden. Resume when you are ready.",
    resumeBtn: "Resume",
    mainMenuBtn: "Main Menu",
    endTurnBtn: "End Turn",
    undoBtn: "Undo",
    undoTitle: "Undo the last action and pause the timer",
    tabuBtn: (p) => p === 0 ? "TABOO (0)" : `TABOO (-${p})`,
    passBtn: (p) => p === Infinity ? "PASS (∞)" : `PASS (${p})`,
    correctBtn: "CORRECT (+1)",
    statCorrect: "Correct",
    statTabu: "Taboo",
    statPass: "Passes Left",
    
    // Summary Screen
    summaryTitle: "Turn Complete!",
    summaryTeamSubtitle: (team) => `${team} Results`,
    summaryNetLabel: "Net Points Earned This Turn",
    playedWordsTitle: "Played Words:",
    reviewHint: "Click buttons to adjust results",
    noWordsPlayed: "No words were played this turn.",
    forbiddenWordsLabel: "FORBIDDEN WORDS",
    reviewCorrect: "+1 Correct",
    reviewTabu: (p) => p === 0 ? "0 Taboo" : `-${p} Taboo`,
    reviewPass: "0 Pass",
    nextTurnBtn: "Next Turn",
    
    // Game Over Screen
    gameOverTitle: "Game Over!",
    winnerBanner: (team) => `🏆 ${team} Won!`,
    drawBanner: "🤝 It's a Tie!",
    finalScoresTitle: "FINAL SCORES",
    pointsSuffix: "Pts",
    newGameBtn: "Start New Game",

    // Language Selection
    langSelectLabel: "LANGUAGE"
  }
};
