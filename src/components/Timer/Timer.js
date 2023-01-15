import React, { useEffect, useState } from "react";
import { getPadTime } from "../helpers/getPadTime";
import "./Timer.css";
function Timer() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isCounting, setIsCounting] = useState(false);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handelStart = () => {
    if (timeLeft === 0) setTimeLeft(5);
    setIsCounting(true);
  };
  const handelStop = () => {
    setIsCounting(false);
  };
  const handelReset = () => {
    setIsCounting(false);
    setTimeLeft(5);
  };

  return (
    <div className="content">
      <div className="container">
          <span className="time">{minutes}:{seconds}</span>
        </div>
        <div className="buttons">
          {isCounting ? (
            <button onClick={handelStop}>STOP</button>
          ) : (
            <button onClick={handelStart}>START</button>
          )}
          <button onClick={handelReset}>RESET</button>
        </div>
      </div>
  );
}

export default Timer;
