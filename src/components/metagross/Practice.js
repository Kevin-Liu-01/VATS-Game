import React, { useState } from "react";

const Practice = () => {
  const [randNum, setRandNum] = useState(-270);
  const [randProb, setRandProb] = useState(0);

  const prob = ["sin", "cos", "tan", "cot", "sec", "csc"];

  const getRandNum = () => {
    setRandNum((Math.random() * 20).toFixed(0) * 15 - 360);
    setRandProb((Math.random() * 5).toFixed(0));
  };

  return (
    <div>
      Number: {`${randNum}`} Find {`${prob[randProb]}`}{" "}
      <button
        onClick={() => {
          getRandNum();
        }}
      >
        Get new Num
      </button>
    </div>
  );
};
export default Practice;
