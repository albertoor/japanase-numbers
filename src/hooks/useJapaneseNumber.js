import { useState, useEffect } from "react";
import {
  pronunciationsOfNumbers,
  hiraganasOfNumbers,
  kanjiOfNumbers,
  ten,
  tenHiragana,
  tenKanji,
} from "../constants/japaneseNumbers";

export default function useJapaneseNumber(number) {
  const [pronunciation, setPronunciation] = useState("");
  const [hiragana, setHiragana] = useState("");
  const [kanji, setKanji] = useState("");

  useEffect(() => {
    if (number === "10") {
      setPronunciation(ten);
      setHiragana(tenHiragana);
      setKanji(tenKanji);
    } else {
      setPronunciation(pronunciationsOfNumbers[number]);
      setHiragana(hiraganasOfNumbers[number]);
      setKanji(kanjiOfNumbers[number]);
    }
  }, [number]);

  return { pronunciation, hiragana, kanji };
}
