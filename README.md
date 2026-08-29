# Taboo Word Game 🎲

A modern, fully customizable, web-based Taboo party game designed for game nights. This digital adaptation of the classic word-guessing board game offers highly flexible game configurations, multi-language support (Turkish & English), PWA offline capabilities, and essential quality-of-life features that set it apart from traditional alternatives.

🚀 **<a href="https://tabutr.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>**

---

## 📸 UI Flow & Gameplay

- **Game Setup:** Configure team names, round times, custom rules, and switch language (🇹🇷 / 🇬🇧).
- **Active Gameplay:** Clean interface displaying the current card, active points, remaining passes, and countdown timer.
- **Pause Menu & Safety:** Ability to hide cards and pause the timer instantly; hardware back-button protection against accidental navigation.
- **Round Review:** Post-round interactive breakdown with 5-forbidden-word accordion and one-click score correction (Correct / Taboo / Pass).

---

## 🚀 Key Features

* **Multi-Language Support (i18n):** Full support for Turkish (480+ high-quality curated words) and English (50+ words) with instant lazy-loading and language-isolated deck persistence.
* **100% Offline & PWA Ready:** Standalone Progressive Web App with cache-first service worker precaching all assets and card decks. Installable on desktop & mobile home screens.
* **Hybrid Audio-Haptic Feedback:**
  * Procedural Web Audio API sound synthesizer with zero external MP3 dependencies.
  * Distinct haptic vibration feedback for Correct, Taboo, Pass, and Undo.
  * **Last 10 Seconds Alert:** Rhythmic warning tick from 10s down to 4s.
  * **Last 3 Seconds Sprint:** Accelerated high-pitch tick synchronized with intense haptic pulse vibrations at 3s, 2s, and 1s.
* **Smart Screen Wake Lock:** Keeps device screen awake strictly during active turns, auto-pausing when the app loses focus or tab changes.
* **The "Undo" Button:** Accidentally clicked "Correct" instead of "Taboo"? Rewind button fixes accidental clicks instantly and pauses the timer without obscuring the card.
* **Interactive Round Review UI:** Modify card results retroactively on the post-round summary screen with live net score recalculation.
* **Capacitor & Google Play Ready:** Zero-bundler architecture compatible with Capacitor for standalone Android builds.

---

## 🛠️ Project Structure

```text
├── icons/
│   └── icon.svg         # High-resolution vector PWA and mobile icon
├── scripts/
│   └── delete_cards.py  # Automation tool to manage and re-index cards dataset
├── app.js               # Core game engine, audio synthesizer, haptics & wake lock
├── cards_tr.js          # 480+ Turkish taboo cards dataset
├── cards_en.js          # 50+ English taboo cards dataset
├── capacitor.config.json # Capacitor hybrid Android configuration
├── i18n.js              # Localization dictionary (TR & EN)
├── index.html           # Main layout, settings UI & PWA tags
├── manifest.json        # Web App Manifest for PWA & mobile
├── style.css            # UI design, glassmorphism, animations & safe area insets
├── sw.js                # Service worker for offline caching & dynamic precache
├── README.md            # Documentation
├── ROADMAP.md           # Development milestones and feature roadmap
└── LICENSE
```

---

## 🛠️ Developer & Maintenance Tools

A Python automation script is included in the `scripts/` directory to help manage and maintain the dataset.

### ✂️ Card Manager Script (`delete_cards.py`)
Allows removing specific cards by ID and automatically re-indexing the remaining card IDs sequentially from 1 to keep the dataset structure consistent.

**Usage:**
```bash
python scripts/delete_cards.py
```

---

## 🎮 How to Play

1. **Configure:** Enter your desired team names, turn time, round limits, penalty points, and pass limits on the settings screen.
2. **Describe:** One player tries to describe the main word to their teammates without using the 5 forbidden taboo words.
3. **Action Buttons:**
   * Press **DOĞRU (+1)** if the team guesses the word right.
   * Press **TABU (-1)** if the explainer accidentally says a forbidden word.
   * Press **PAS** to skip the current word.
   * Press **Geri Al (Undo)** if you misclicked any button to restore the previous card and score.
4. **Win:** The team with the highest score at the end of all rounds wins the trophy!

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
