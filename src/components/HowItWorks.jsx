const STEPS = [
  "Click Generate Ticket to start a new draw.",
  "The game picks three random numbers from 0 to 9.",
  "It adds all three numbers together using reduce().",
  "A total of exactly 15 means you win.",
  "Any other total means you can try again.",
  "Your attempts and wins update automatically.",
];

export default function HowItWorks() {
  return (
    <section className="how-panel glass-panel">
      <div className="how-intro">
        <p className="section-kicker">THE RULES ARE SIMPLE</p>
        <h2>How it works<span>.</span></h2>
        <p>One target number. Three chances to get there.</p>
      </div>
      <ol className="steps-grid">
        {STEPS.map((step, index) => (
          <li className="step-item" key={step}>
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
