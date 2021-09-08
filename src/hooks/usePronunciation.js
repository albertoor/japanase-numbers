import { useState, useEffect } from "react";
import japaneseNumbers from "../constants/japaneseNumbers";

export default function usePronunciation(number) {
  const [pronunciation, setPronunciation] = useState("");

  useEffect(() => {
    setPronunciation(japaneseNumbers[parseInt(number)]);
  }, [number]);

  return pronunciation;
}
