export default function NumberCard({ number, position }) {
  return (
    <div className="number-card" aria-label={`Number ${position}: ${number}`}>
      <span className="number-label">0{position}</span>
      <span className="number-value" key={number}>{number}</span>
      <span className="number-shine" aria-hidden="true" />
    </div>
  );
}
