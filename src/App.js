import React, { useState } from "react";
import style from "./style.module.css";
import "./index.css";

const allLetters = new Array(26)
  .fill(97)
  .map((item, index) => String.fromCharCode(item + index));

export function App() {
  const [letter, setLetter] = useState("");
  const [shift, setShift] = useState(false);
  const [caps, setCaps] = useState(false);

  const addLetter = (letter) => {
    if (shift || (shift && caps)) {
      setShift(false);
      return setLetter((prevState) => prevState + letter.toUpperCase());
    } else if (caps) {
      return setLetter((prevState) => prevState + letter.toUpperCase());
    }
    return setLetter((prevState) => prevState + letter);
  };

  return (
    <div className={style.wrapper}>
      <input value={letter} className={style.input} />
      <div className={style.container}>
        <div>
          <button className={style.button}>Shift</button>
          <input
            className={style.inputChecked}
            type="checkbox"
            checked={shift}
            onClick={() => setShift((prevState) => !prevState)}
          />
        </div>
        <div>
          <button className={style.buttonActive}>Caps</button>
          <input
            className={style.inputChecked}
            type="checkbox"
            checked={caps}
            onClick={() => setCaps((prevState) => !prevState)}
          />
        </div>
        <button
          className={style.buttonActive}
          onClick={() =>
            setLetter((prevState) =>
              prevState.substring(0, prevState.length - 1)
            )
          }
        >
          Backspace
        </button>
        <button className={style.buttonActive} onClick={() => setLetter("")}>
          Delete
        </button>
      </div>

      <div>
        {allLetters.map((letter) => {
          return (
            <button onClick={() => addLetter(letter)} className={style.letter}>
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
