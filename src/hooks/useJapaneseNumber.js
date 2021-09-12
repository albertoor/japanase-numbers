import { useState, useEffect } from "react";
import { pronunciations, hiraganas } from "../constants/japaneseNumbers";

export default function useJapaneseNumber(number) {
  const [pronunciation, setPronunciation] = useState("");
  const [hiragana, setHiragana] = useState("");

  useEffect(() => {
    setPronunciation(pronunciations[number]);
    setHiragana(hiraganas[number]);

    // setPronu nciation(number.length);
  }, [number, hiragana]);

  return { pronunciation, hiragana };
}
