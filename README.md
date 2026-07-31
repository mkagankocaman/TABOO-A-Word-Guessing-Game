# Taboo Word Game 🎲

A modern, fully customizable, web-based Taboo party game designed for game nights. This digital adaptation of the classic word-guessing board game offers highly flexible game configurations and an essential quality-of-life features that set it apart from traditional alternatives.

🚀 **<a href="https://vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>**

---

## 📸 UI Flow & Gameplay

- **Game Setup:** Configure team names, round times, and custom rules.
- **Active Gameplay:** Clean interface displaying the current card, active points, and remaining passes.
- **Pause Menu:** Ability to hide cards and pause the timer instantly to prevent cheating.
- **Round Review:** Post-round breakdown displaying net points earned and played words.

---

## 🚀 Key Features

* **Extensive Word Database:** Contains 585 unique Turkish words, each featuring 5 strictly forbidden taboo words.
* **The "Undo" Button (Unique Feature):** Accidentally clicked "Correct" instead of "Taboo"? Unlike most market alternatives, this game includes a rewind button to fix accidental clicks instantly without ruining the score or state.
* **Highly Customizable Gameplay:** Fully adjust the game rules before you start:
  * **Custom Team Names:** Personalize your team identity (e.g., Red Team vs Blue Team).
  * **Turn Duration:** Set how many seconds each round lasts.
  * **Total Rounds:** Decide the length of the entire game.
  * **Taboo Penalty:** Adjust how many points are deducted for hitting a taboo word.
  * **Skip (Pass) Limit:** Define how many times a team can pass per round.
* **Game Management:** Pause and resume options that automatically hide current cards.

---

## 🗺️ Roadmap & Future Goals

> ⚠️ **Current Status:** The application is currently optimized and available **exclusively in Turkish**.

* [x] **Dynamic Undo System:** Ability to rewind misclicks during live gameplay.
* [ ] **English Language Support:** Multi-language system localization and a comprehensive English word database.
* [ ] **Interactive Round Review UI:** Allow players to modify card results (toggle between Correct, Taboo, and Pass) retroactively on the post-round summary screen to fix referee errors.

---

## 🛠️ Tech Stack & Project Structure

```text
├── index.html   # Main layout and settings UI
├── style.css    # UI design and animations
├── app.js       # Core game state, timer and score logic
├── cards.js     # 500+ Turkish taboo cards dataset (with 5 forbidden words each)
├── LICENSE
└── README.md    # Documentation
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
