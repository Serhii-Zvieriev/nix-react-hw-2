export default function LapTime({ lapTime }) {
  return (
    <div className="lapTime">
      {lapTime.map((round, idx) => (
        <div key={idx}>{round}</div>
      ))}
    </div>
  );
}
