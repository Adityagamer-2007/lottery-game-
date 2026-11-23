import { useState } from "react";
import NumberCard from "./NumberCard.jsx";
import GameStats from "./GameStats.jsx";
import HowItWorks from "./HowItWorks.jsx";

const INITIAL_TICKET = [0, 0, 0];

export default function Lottery() {
  const [ticket, setTicket] = useState(INITIAL_TICKET);
  const [attempts, setAttempts] = useState(0);
  const [wins, setWins] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const sum = ticket.reduce((total, number) => total + number, 0);
  const winPercentage = attempts === 0 ? 0 : (wins / attempts) * 100;

  function generateTicket() {
    if (isGenerating) return;

    setIsGenerating(true);
    const newTicket = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 10),
    );
    const newSum = newTicket.reduce((total, number) => total + number, 0);
    const didWin = newSum === 15;

    setTicket(newTicket);
    setResult(didWin);
    setAttempts((currentAttempts) => currentAttempts + 1);
    if (didWin) setWins((currentWins) => currentWins + 1);
    setHistory((previousTickets) =>
      [{ numbers: newTicket, sum: newSum, didWin }, ...previousTickets].slice(0, 5),
    );
    window.setTimeout(() => setIsGenerating(false), 350);
  }

  function resetGame() {
    setTicket(INITIAL_TICKET);
    setAttempts(0);
    setWins(0);
    setResult(null);
    setHistory([]);
    setIsGenerating(false);
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="eyebrow"><span className="eyebrow-line" /> YOUR MOMENT, YOUR NUMBERS</div>
        <h1>LOTTERY <span>GAME</span></h1>
        <p className="hero-subtitle">Three numbers. One lucky combination.</p>
        <p className="hero-note">Try your luck and see if you can hit the magic sum.</p>
      </section>

      <div className="game-layout">
        <section className={`ticket-panel glass-panel${result === true ? " ticket-panel-won" : ""}`}>
          <div className="panel-topline">
            <div>
              <p className="section-kicker">YOUR TICKET</p>
              <h2>Pick your numbers</h2>
            </div>
            <div className="ticket-code"><span className="ticket-code-dot" /> LIVE DRAW</div>
          </div>

          <div className="number-row" aria-label={`Ticket numbers: ${ticket.join(", ")}`}>
            {ticket.map((number, index) => (
              <NumberCard key={`${index}-${attempts}`} number={number} position={index + 1} />
            ))}
          </div>
          <div className="sum-row">
            <span>YOUR TOTAL</span>
            <span className="sum-value" aria-live="polite">
              <strong>{sum}</strong><span className="sum-target">/ 15</span>
            </span>
          </div>

          <div className={`result-message ${result === null ? "result-idle" : result ? "result-win" : "result-loss"}`} aria-live="polite">
            <span className="result-icon" aria-hidden="true">
              {result === null ? "✦" : result ? "✧" : "↗"}
            </span>
            <div>
              <strong>
                {result === null
                  ? "Ready when you are"
                  : result
                    ? "Congratulations! You Win!"
                    : "Better Luck Next Time!"}
              </strong>
              <span>
                {result === null
                  ? "Will your numbers add up to 15?"
                  : result
                    ? "Your numbers added up to exactly 15."
                    : "Give it another try — the next ticket could be the one."}
              </span>
            </div>
          </div>

          {result === true && <div className="confetti" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => <i key={index} style={{ "--i": index }} />)}
          </div>}

          <div className="action-row">
            <button className="button button-primary" type="button" onClick={generateTicket} disabled={isGenerating}>
              <span aria-hidden="true">✦</span>
              {isGenerating ? "Drawing..." : "Generate Ticket"}
              <span className="button-arrow" aria-hidden="true">↗</span>
            </button>
            <button className="button button-secondary" type="button" onClick={resetGame}>
              <span aria-hidden="true">⟲</span>
              Reset Game
            </button>
          </div>
          <p className="ticket-footnote"><span aria-hidden="true">⌁</span> Each ticket is completely random</p>
        </section>

        <aside className="side-column">
          <GameStats attempts={attempts} wins={wins} winPercentage={winPercentage} />
          {history.length > 0 && (
            <section className="history-panel glass-panel">
              <div className="panel-topline history-heading">
                <div><p className="section-kicker">RECENT DRAWS</p><h2>Ticket history</h2></div>
                <span className="history-count">{history.length}</span>
              </div>
              <ol className="history-list">
                {history.map((entry, index) => (
                  <li className="history-item" key={`${attempts}-${index}`}>
                    <span className="history-index">#{String(attempts - index).padStart(2, "0")}</span>
                    <span className="history-numbers">{entry.numbers.join(" · ")}</span>
                    <span className={`history-total${entry.didWin ? " history-win" : ""}`}>
                      {entry.sum}{entry.didWin && <span aria-label="winning ticket"> ✦</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </aside>
      </div>
      <HowItWorks />
    </>
  );
}
