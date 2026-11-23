import Lottery from "./components/Lottery.jsx";

export default function App() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-content">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Lottery Game home">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>LUCKY<span className="brand-accent">THREE</span></span>
          </a>
          <div className="ready-indicator">
            <span className="ready-dot" />
            <span>GAME READY</span>
          </div>
        </header>
        <Lottery />
      </div>
      <footer className="site-footer">
        Made for a little fun <span aria-hidden="true">·</span> No purchase necessary
      </footer>
    </main>
  );
}
