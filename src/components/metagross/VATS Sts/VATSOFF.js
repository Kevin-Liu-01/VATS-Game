import React from "react";
import styles from "../styles";
import VATSNone from "../VATS Pictures/MetagrossNoVATS.png";

const VATSOFF = (props) => {
  return (
    <div className='NoVATS'>
      <img src={VATSNone} style={styles.StartingStyle} alt='VATSNO' />
      <div className='VATSACTIVE' style={styles.DivStyle}>
        <button
          style={styles.ButtonStyle}
          onClick={props.handleDirectoVATSClick}
          className='InitialVATS'
        >
          ACTIVATE V.A.T.S.
        </button>
      </div>
    </div>
  );
};

export default VATSOFF;
