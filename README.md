# Lucky Three — React Lottery Game

A small, fully playable lottery game built with React and Vite. Generate three random digits and try to reach the target sum of **15**.

## What is included

- Three random number cards, each from 0 to 9
- Automatic sum and win/loss message
- Attempts, wins, and win-percentage statistics
- Reset button that restores the complete game to its starting state
- Recent-ticket history (up to five draws)
- Responsive layout, animated number cards, and a lightweight win celebration
- A short explanation of the rules inside the app

## Run it in VS Code

1. Install [Node.js](https://nodejs.org/) (the LTS version includes npm).
2. Extract the project ZIP and open the extracted `React-Lottery-Game-Complete` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite (usually `http://localhost:5173`) in Chrome.

To create and preview an optimized production build:

```bash
npm run build
npm run preview
```

## How the game logic works

`src/components/Lottery.jsx` keeps the ticket, attempts, wins, result, and recent history in React `useState` values. When **Generate Ticket** is clicked, the game creates an array with three values. Each value is created with `Math.floor(Math.random() * 10)`, which produces an integer from 0 through 9.

The total is calculated with `reduce()`:

```js
const total = numbers.reduce((sum, number) => sum + number, 0);
```

The game compares that total with 15. It adds one to attempts for every ticket and adds one to wins only when the total is exactly 15. The win percentage is `wins / attempts * 100`; while there have been no attempts it displays 0%.

The ticket numbers are rendered with `map()` in `Lottery.jsx`, using the reusable `NumberCard` component. **Reset Game** returns the ticket to `0, 0, 0`, clears the result and history, and sets both counters back to zero.

## Project structure

```text
React-Lottery-Game-Complete/
├── public/
│   └── lottery-icon.svg
├── src/
│   ├── components/
│   │   ├── GameStats.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Lottery.jsx
│   │   └── NumberCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── Ticket.css
│   └── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

`npm install` creates a lockfile (`package-lock.json`) for repeatable dependency installation.
