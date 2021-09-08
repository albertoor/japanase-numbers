import { useState } from "react";
import usePronunciation from "../../hooks/usePronunciation";

export default function Input() {
  const [number, setNumber] = useState();
  const pronunciation = usePronunciation(number);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <label htmlFor="number">Enter number</label>
      <input type="text" value={number} onChange={(e) => handleChange(e)} />
      <h1>Pronunciation {pronunciation}</h1>
    </>
  );
}
