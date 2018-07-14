import React from "react";
// eslint-disable-next-line
import "./styles/Headings.css";


const Headings = ({deadline}) => {
  return(
    <div className="Headings">
      <h1>Countdown to Black Friday</h1>
      <h2>
        Black Friday {deadline}
      </h2>
    </div>
  )
};

export default Headings;