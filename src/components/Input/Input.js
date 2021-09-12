import { useState } from "react";
import useJapaneseNumber from "../../hooks/useJapaneseNumber";

export default function Input() {
  const [number, setNumber] = useState();
  const { pronunciation, hiragana } = useJapaneseNumber(number);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <label htmlFor="number">Enter number</label>
      <input type="text" value={number} onChange={(e) => handleChange(e)} />
      <h1>Pronunciation {pronunciation}</h1>
      <h1>Hiragana {hiragana}</h1>
    </>
  );
}
