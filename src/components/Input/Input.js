import { useEffect, useState } from "react";
import japaneseNumbers from "../../constants/japaneseNumbers";

export default function Input() {
  const [number, setNumber] = useState();
  const [pronunciation, setPronunciation] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const getPronuntiation = () => {
    setPronunciation(japaneseNumbers[parseInt(number)]);
  };

  useEffect(() => {
    getPronuntiation();
  });

  return (
    <>
      <label htmlFor="number">Enter number</label>
      <input type="text" value={number} onChange={(e) => handleChange(e)} />
      <h1>Pronunciation {pronunciation}</h1>
    </>
  );
}
