import React, { useState } from "react";
import VATSON from "./VATS Sts/VATSON";
import VATSOFF from "./VATS Sts/VATSOFF";
import Practice from "./Practice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Metagross = (props) => {
  const [isNotVats, setIsNotVats] = useState(true);
  const [toastCounter, setToastCounter] = useState(0);

  const handleDirectoVATSClick = () => {
    setIsNotVats(!isNotVats);
    // toast.info(`V.A.T.S Switched. ${toastCounter}`);
    // setToastCounter(toastCounter + 1);
  };

  return (
    <div>
      <Practice />
      {isNotVats ? (
        <VATSOFF handleDirectoVATSClick={handleDirectoVATSClick} />
      ) : (
        <VATSON handleDirectoVATSClick={handleDirectoVATSClick} />
      )}
    </div>
  );
};
export default Metagross;
