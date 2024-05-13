"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./style.module.css";
import { SeparatedInput } from "../separatedInput/SeparatedInput";
import { words } from "@/data/words";
import { englishToMorse } from "@/data/morseDictionary";

export default function Trainer() {
  const [value, setValue] = useState("");
  const [matched, setMatched] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentIndex]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(
    currentWord[currentLetterIndex]
  );

  useEffect(() => {
    setCurrentWord(words[currentIndex]);
    setCurrentLetter(currentWord[currentLetterIndex]);
  }, [currentIndex, currentWord, currentLetterIndex]);

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      // Use type assertion to tell TypeScript that currentLetter is a key of englishToMorse
      if (
        newValue ===
        englishToMorse[currentLetter as keyof typeof englishToMorse]
      ) {
        setMatched(true);
        if (currentLetterIndex < currentWord.length - 1) {
          // Move to the next letter
          setCurrentLetterIndex(currentLetterIndex + 1);
          setCurrentLetter(currentWord[currentLetterIndex + 1]);
          setValue("");
        } else {
          // Move to the next word
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setCurrentLetterIndex(0);
          setCurrentWord(words[currentIndex + 1]);
          setCurrentLetter(currentWord[0]);
          setValue("");
        }
      }
    },
    [currentLetter, currentLetterIndex, currentWord, currentIndex]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.word__box}>
        <div className={styles.letter__box}>
          {currentWord.split("").map((letter, index) => (
            <span
              key={index}
              className={styles.letrer}
              style={{
                fontSize: index === currentLetterIndex ? "24px" : "16px",
                color: index === currentLetterIndex ? "blue" : "black",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.control__group}>
        <SeparatedInput
          MAX_DIGITS={6}
          value={value}
          onChange={handleChange}
          readOnly={false}
        />
        <div className={styles.sub__text}>
          {matched ? (
            <p className={styles.text}>Match!</p>
          ) : (
            <p className={styles.text}>
              Enter the Morse code for the letter and remove via backspace
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
