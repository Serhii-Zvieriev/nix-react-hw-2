import "./App.css";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  return (
    <div className="container">
      <Stopwatch time="00:00:00" />

      <Stopwatch time="00:00:00:000" />
    </div>
  );
}

export default App;
