import { useState, useEffect } from "react";

import { tick } from "../../helpers/tick";
import { tickMSMS } from "../../helpers/ticksMSMS";

import Buttons from "../Buttons/Buttons";
import LapTime from "../LapTime/LapTime";
import ClockFace from "../ClockFace/ClockFace";

export default function Stopwatch({ time }) {
  const [amountOfTime, setAmountOfTime] = useState(time);
  const [lapTime, setLapTime] = useState([]);
  const [isCounting, setIsCounting] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isStoping, setIsStoping] = useState(true);
  const [isReseting, setIsReseting] = useState(true);

  const arrTime = amountOfTime.split(":").map((el) => +el);

  useEffect(() => {
    let interval = null;
    if (time === "00:00:00") {
      interval = setInterval(
        () => isCounting && setAmountOfTime(tick(arrTime)),
        1000
      );
    } else {
      interval = setInterval(
        () => isCounting && setAmountOfTime(tickMSMS(arrTime)),
        1
      );
    }

    const cleanup = () => {
      clearInterval(interval);
    };
    return cleanup;
  }, [amountOfTime, arrTime, isCounting, time]);

  const handleClickStart = () => {
    setIsStarting(true);
    setIsCounting(true);
    setIsStoping(false);
    setIsReseting(false);
  };
  const handleClickContinue = () => {
    setIsCounting(true);
    setIsStoping(false);
  };
  const handleClickStop = () => {
    setIsCounting(false);
    const newArr = [...lapTime];
    newArr.push(amountOfTime);
    setLapTime(newArr);
    setIsStoping(true);
    setIsReseting(false);
  };
  const handleClickReset = () => {
    setAmountOfTime(time);
    setIsCounting(false);
    setIsStarting(false);
    setLapTime([]);
    setIsStoping(true);
    setIsReseting(true);
  };

  return (
    <div className="timer">
      <ClockFace amountOfTime={amountOfTime} />
      <Buttons
        handleClickStart={handleClickStart}
        handleClickContinue={handleClickContinue}
        handleClickStop={handleClickStop}
        handleClickReset={handleClickReset}
        isStarting={isStarting}
        isCounting={isCounting}
        isStoping={isStoping}
        isReseting={isReseting}
      />
      <LapTime lapTime={lapTime} />
    </div>
  );
}
