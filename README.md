# Qw3rty

Qw3rty is a typing-race game with an educational twist. Players race the clock to type math word problems exactly as shown, then solve each one to move on to the next. It tests typing speed, accuracy and quick thinking all at once.

## Play the Game

**[Play Qw3rty here](https://swe-1-type-racer-game.github.io/qw3rty-game/)**

The game runs entirely in your browser, so there's nothing to download or install. You just need a modern browser such as Chrome, Firefox or Edge.

## Project Website

**[Visit our project website](https://qw3rty-swe1.github.io/)**

## How to Play

1. From the main menu, click **Begin Racing!**, then **Start Race**. The timer starts right away.
2. Type the word problem shown on screen exactly as written. Mistakes are highlighted, and you need to fix a typo before you can keep typing. Copy and paste are disabled.
3. Once the prompt is typed correctly, an answer box appears. Enter the correct answer to the math problem to move on to the next prompt.
4. Complete all 10 prompts to finish the race and see your results: score and number of typos.
5. From the results screen you can **Play Again**, **View Leaderboard** or **Quit** to the main menu.

You can **Pause** at any time during a race to resume, restart or quit.

## Features

- Main menu with in-game instructions
- Timed races with a live elapsed-time counter
- Character-by-character typing feedback with typo tracking
- Progress bar for the current prompt
- Answer checking for each math word problem
- Pause menu (resume, restart, quit)
- Results screen with score and typo count
- Leaderboard screen showing the top 5 best times

## Known Limitations

This is a prototype, so a few things are still in progress:

- **Leaderboard:** the leaderboard currently shows sample data. Race results are not yet saved to it, and it does not persist between page reloads.
- **Prompts:** there is currently one fixed set of 10 math word problems, always shown in the same order.

## Future Work

- Save race results to the leaderboard and persist them between sessions
- Larger prompt pool with randomized order and difficulty levels

## Tech Stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) for development and builds
- [react-toastify](https://fkhadra.github.io/react-toastify/) for in-game notifications
- GitHub Actions + GitHub Pages for automatic deployment on every push to `main`

## Development Setup

> **Note:** You only need this section if you want to run the game locally or make changes to it. To just play, use the [link above](#play-the-game).

### Requirements

- [Node.js](https://nodejs.org) 18.0 or higher
- npm (included with Node.js)

### Install and run

```bash
git clone https://github.com/SWE-1-Type-Racer-Game/qw3rty-game.git
cd qw3rty-game
npm install
npm run dev
```

Then open the local URL Vite prints, usually `http://localhost:5173/qw3rty-game/`.

### Other commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run build`   | Build the production version into `dist/` |
| `npm run preview` | Preview the production build locally      |
| `npm run lint`    | Run ESLint                                |

## Project Structure

```
src/
├── App.jsx          # Top-level screen switching (menu, game, leaderboard)
├── classes/         # Game data classes (Prompt)
├── components/      # React UI components (MainMenu, GameScreen, PauseModal, etc.)
├── hooks/           # Game logic hooks (useRace, useTimer, useTyping, useLeaderboard, etc.)
├── styling/         # CSS for each component
└── assets/          # Images and icons
```

## Team

SWE-1 group project (Software Engineering I, F26).

Rowan Sharwood, Charlie Sparrow, Marvens Barthelemy, Mayne Murray, Escander Habda
