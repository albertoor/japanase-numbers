import { useState } from "react";
import "./Input.css";
import Card from "../Card/Card";
import useJapaneseNumber from "../../hooks/useJapaneseNumber";

export default function Input() {
  const [number, setNumber] = useState();
  const { pronunciation, hiragana, kanji } = useJapaneseNumber(number);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="number">Enter number</label>
        <input type="text" value={number} onChange={(e) => handleChange(e)} />
        <Card
          pronunciation={pronunciation}
          hiragana={hiragana}
          kanji={kanji}
          number={number}
        />
      </div>
    </>
  );
}
