import React, { useState, useEffect } from "react";
import styles from "../styles";
import VATSONImage from "../VATS Pictures/METAGROSS_VATS_ON.gif";
import LEFTARM from "../VATS Pictures/METAGROSSLEFTVATS.gif";
import HEAD from "../VATS Pictures/METAGROSSHEADVATS.gif";
import RIGHTARM from "../VATS Pictures/METAGROSSRIGHTARM.gif";
import BOTTOM from "../VATS Pictures/METAGROSSBOTTOMHEAD.gif";
import Gun from "../VATS Pictures/Gunshooting.gif";

const VATSON = (props) => {
  const [Health, setHealth] = useState(469);
  const [BodyPart, setBodyPart] = useState(0);

  useEffect(() => {
    console.log("bodypart is", BodyPart);
  }, [BodyPart]);

  return (
    <div>
      {BodyPart === 5 ? (
        ((<img src={Gun} style={styles.Gun} alt='VATSONE' />),
        (<img src={BOTTOM} style={styles.VATSGREYStyle} alt='VATSONE' />))
      ) : BodyPart === 1 ? (
        <img src={HEAD} style={styles.VATSGREYStyle} alt='VATSONE' />
      ) : BodyPart === 2 ? (
        <img src={LEFTARM} style={styles.VATSGREYStyle} alt='VATSONE' />
      ) : BodyPart === 4 ? (
        <img src={RIGHTARM} style={styles.VATSGREYStyle} alt='VATSONE' />
      ) : (
        <img src={VATSONImage} style={styles.StartingStyle} alt='VATSONE' />
      )}
      <button style={styles.HealthStyle}>Health: {Health}</button>
      <button
        style={styles.ButtonStyle}
        onClick={props.handleDirectoVATSClick}
        className='UndoVATS'
      >
        TERMINATE V.A.T.S
      </button>
      <div>
        <div>
          <button
            onClick={() => {
              if (BodyPart === 1) {
                setBodyPart(0);
              } else if (BodyPart !== 1) {
                setBodyPart(1);
                setHealth(Health - 53);
              }
            }}
            style={styles.VATSButtonStyle}
          >
            95%
          </button>

          <button style={styles.HealthStyle}>Health: {Health}</button>
          <button
            style={styles.ButtonStyle}
            onClick={props.handleDirectoVATSClick}
            className='UndoVATS'
          >
            TERMINATE V.A.T.S
          </button>
        </div>
        <button
          onClick={() => {
            if (BodyPart === 2) {
              setBodyPart(0);
            } else if (BodyPart !== 2) {
              setBodyPart(2);
              setHealth(Health - 28);
            }
          }}
          style={styles.ButtonStyle3}
        >
          72%
        </button>

        <button style={styles.HealthStyle}>Health: {Health}</button>
        <button
          style={styles.ButtonStyle}
          onClick={props.handleDirectoVATSClick}
          className='UndoVATS'
        >
          TERMINATE V.A.T.S
        </button>
        <button
          onClick={() => {
            if (BodyPart === 4) {
              setBodyPart(0);
            } else if (BodyPart !== 4) {
              setBodyPart(4);
              setHealth(Health - 23);
            }
          }}
          style={styles.ButtonStyle4}
        >
          65%
        </button>

        <button style={styles.HealthStyle}>Health: {Health}</button>
        <button
          style={styles.ButtonStyle}
          onClick={props.handleDirectoVATSClick}
          className='UndoVATS'
        >
          TERMINATE V.A.T.S
        </button>
        <button
          onClick={() => {
            if (BodyPart === 5) {
              setBodyPart(0);
            } else if (BodyPart !== 5) {
              setBodyPart(5);
              setHealth(Health - 41);
            }
          }}
          style={styles.ButtonStyle5}
        >
          23%
        </button>

        <button style={styles.HealthStyle}>Health: {Health}</button>
        <button
          style={styles.ButtonStyle}
          onClick={props.handleDirectoVATSClick}
          className='UndoVATS'
        >
          TERMINATE V.A.T.S
        </button>
      </div>
    </div>
  );
};

export default VATSON;
