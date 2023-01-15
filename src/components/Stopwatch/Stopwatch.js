import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };
  return (
    <div className="content">
      <div className="container">
        <span className="time">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        </div>
        <div className="stopwatch">
          <button className="restart" onClick={restart}>
            RESTART
          </button>
          <button className="stop" onClick={stop}>
            STOP
          </button>
        </div>
      </div>
    
  );
}

export default Stopwatch;
