import React from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";
import Clock from "../Clock";

const Countdown = () => {
  const deadline = "November 23, 2018";
  return (
    <div className="Countdown">
      <h1>Countdown to Black Friday</h1>
      <h2>
        Black Friday {deadline}
      </h2>
      <Clock
        deadline={deadline}
      />
      <div>
      </div>
    </div>
  );
};


export default Countdown;