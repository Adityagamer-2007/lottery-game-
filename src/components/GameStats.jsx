const STAT_ITEMS = [
  { key: "attempts", label: "Total attempts", icon: "↻", suffix: "" },
  { key: "wins", label: "Total wins", icon: "✦", suffix: "" },
  { key: "percentage", label: "Win percentage", icon: "◎", suffix: "%" },
];

export default function GameStats({ attempts, wins, winPercentage }) {
  const values = { attempts, wins, percentage: winPercentage.toFixed(1) };

  return (
    <section className="stats-panel glass-panel" aria-label="Game statistics">
      <div className="panel-topline stats-heading">
        <div><p className="section-kicker">YOUR SCOREBOARD</p><h2>Game stats</h2></div>
        <span className="stats-icon" aria-hidden="true">⌁</span>
      </div>
      <div className="stats-grid">
        {STAT_ITEMS.map((item) => (
          <div className={`stat-card stat-${item.key}`} key={item.key}>
            <span className="stat-icon" aria-hidden="true">{item.icon}</span>
            <span className="stat-value">{values[item.key]}{item.suffix}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="stats-caption"><span className="caption-dot" /> Stats update after every draw</p>
    </section>
  );
}
