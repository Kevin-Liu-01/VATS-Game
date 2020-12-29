import React, { useState, useEffect } from "react";
import styles from "../styles";
import VATSONImage from "../VATS Pictures/METAGROSS_VATS_ON.gif";
import LEFTARM from "../VATS Pictures/METAGROSSLEFTVATS.gif";
import HEAD from "../VATS Pictures/METAGROSSHEADVATS.gif";
import RIGHTARM from "../VATS Pictures/METAGROSSRIGHTARM.gif";
import BOTTOM from "../VATS Pictures/METAGROSSBOTTOMHEAD.gif";
import VATSNoned from "../VATS Pictures/MetagrossAttack3.gif";
import WIN from "../VATS Pictures/WinMetagross2.gif";

const VATSON = (props) => {
  const [Health, setHealth] = useState(6942);
  const [BodyPart, setBodyPart] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(8);
  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 750);
      return () => clearTimeout(timerId);
    }
  });
  return (
    <div>
      {BodyPart === 5 ? (
        <>
          <img src={BOTTOM} style={styles.VATSGREYStyle} alt='VATSONE' />
          <button
            style={styles.DamageStyle}
            onClick={() => {
              setHealth(Health - (Math.floor(60 * Math.random()) + 40));
            }}
          >
            FIRE
          </button>
          <button style={styles.TimerStyle}>
            Time before attack: {secondsLeft}
          </button>
        </>
      ) : BodyPart === 1 ? (
        <>
          <img src={HEAD} style={styles.VATSGREYStyle} alt='VATSONE' />
          <button
            style={styles.DamageStyle}
            onClick={() => {
              setHealth(Health - (Math.floor(48 * Math.random()) + 40));
            }}
          >
            FIRE
          </button>
          <button style={styles.TimerStyle}>
            Time before attack: {secondsLeft}
          </button>
        </>
      ) : BodyPart === 2 ? (
        <>
          <img src={LEFTARM} style={styles.VATSGREYStyle} alt='VATSONE' />
          <button
            style={styles.DamageStyle}
            onClick={() => {
              setHealth(Health - (Math.floor(32 * Math.random()) + 40));
            }}
          >
            FIRE
          </button>
          <button style={styles.TimerStyle}>
            Time before attack: {secondsLeft}
          </button>
        </>
      ) : BodyPart === 4 ? (
        <>
          <img src={RIGHTARM} style={styles.VATSGREYStyle} alt='VATSONE' />
          <button
            style={styles.DamageStyle}
            onClick={() => {
              setHealth(Health - (Math.floor(29 * Math.random()) + 40));
            }}
          >
            FIRE
          </button>
          <button style={styles.TimerStyle}>
            Time before attack: {secondsLeft}
          </button>
        </>
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
      <button style={styles.TimerStyle}>
        Time before attack: {secondsLeft}
      </button>
      <div>
        <div>
          <button
            onClick={() => {
              if (BodyPart === 1) {
                setBodyPart(0);
              } else if (BodyPart !== 1) {
                setBodyPart(1);
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
        <div>
          <button
            onClick={() => {
              if (BodyPart === 2) {
                setBodyPart(0);
              } else if (BodyPart !== 2) {
                setBodyPart(2);
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
        </div>
        <div>
          <button
            onClick={() => {
              if (BodyPart === 4) {
                setBodyPart(0);
              } else if (BodyPart !== 4) {
                setBodyPart(4);
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
        </div>
        <div>
          <button
            onClick={() => {
              if (BodyPart === 5) {
                setBodyPart(0);
              } else if (BodyPart !== 5) {
                setBodyPart(5);
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
          {secondsLeft === 0 && Health > 0 ? (
            <>
              <img src={VATSNoned} style={styles.VATSGREYStyle} alt='VATSONE' />
              <button
                style={styles.LoseStyle}
                onClick={props.handleDirectoVATSClick}
                className='UndoVATS'
              >
                REPLAY
              </button>
            </>
          ) : null}
          {secondsLeft === 0 && Health <= 0 ? (
            <>
              <img src={WIN} style={styles.VATSGREYStyle} alt='VATSONE' />
              <button
                style={styles.LoseStyle}
                onClick={props.handleDirectoVATSClick}
                className='UndoVATS'
              >
                REPLAY
              </button>
            </>
          ) : null}
          {Health < 0 ? (
            <>
              <img src={WIN} style={styles.VATSGREYStyle} alt='VATSONE' />
              <button
                style={styles.LoseStyle}
                onClick={props.handleDirectoVATSClick}
                className='UndoVATS'
              >
                REPLAY
              </button>
            </>
          ) : null}
        </div>
      </div>
      {Health < 0 ? <>setHealth(0)</> : null}
    </div>
  );
};

export default VATSON;
