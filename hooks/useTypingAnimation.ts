"use client";

import { useEffect, useState } from "react";

export function useTypingAnimation(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (text === currentWord) {
        setPhase("pausing");
        return;
      }

      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => {
        setPhase("deleting");
      }, pauseTime);

      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (text === "") {
        setPhase("typing");
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
