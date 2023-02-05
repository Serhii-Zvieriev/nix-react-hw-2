import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

import "./App.css";

import { theme } from "./helpers/createTheme";
import { tick } from "./helpers/tick";

function App() {
  const [amountOfTime, setAmountOfTime] = useState("00:00:00");
  const [isCounting, setIsCounting] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const arrTime = amountOfTime.split(":").map((el) => +el);

  useEffect(() => {
    const interval = setInterval(
      () => isCounting && setAmountOfTime(tick(arrTime)),
      1000
    );

    const cleanup = () => {
      clearInterval(interval);
    };
    return cleanup;
  }, [amountOfTime, arrTime, isCounting]);

  const handleClickStart = () => {
    setIsStarting(true);
    setIsCounting(true);
  };
  const handleClickContinue = () => {
    setIsCounting(true);
  };
  const handleClickStop = () => {
    setIsCounting(false);
  };
  const handleClickReset = () => {
    setAmountOfTime("00:00:00");
    setIsCounting(false);
    setIsStarting(false);
  };

  return (
    <div className="timer">
      <div className="clockFace">{amountOfTime}</div>

      <div className="buttons">
        <ThemeProvider theme={theme}>
          {!isStarting ? (
            <Button
              variant="contained"
              color="green"
              className="btn"
              onClick={handleClickStart}
              disabled={isCounting}
            >
              Start
            </Button>
          ) : (
            <Button
              variant="contained"
              color="violet"
              className="btn"
              onClick={handleClickContinue}
              disabled={isCounting}
            >
              Continue
            </Button>
          )}
          <Button
            variant="contained"
            color="red"
            className="btn"
            onClick={handleClickStop}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="orange"
            className="btn"
            onClick={handleClickReset}
          >
            Reset
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
