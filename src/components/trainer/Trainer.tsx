"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./style.module.css";
import { words } from "@/data/words";
import { englishToMorse } from "@/data/morseDictionary";
import clsx from "clsx";
import VisuallyHidden from "../visuallyHidden/VisuallyHidden";
import Dot from "@/icons/Dot";
import Desh from "@/icons/Desh";
import { Input } from "../input/Input";

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
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
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
  const hendelCkickDot = () => {
    setValue((prevValue) => {
      const newValue = prevValue + ".";
      handleChange({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>);
      return newValue;
    });
  };

  const hendelCkickDesh = () => {
    setValue((prevValue) => {
      const newValue = prevValue + "-";
      handleChange({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>);
      return newValue;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.word__box}>
        <div className={styles.letter__box}>
          {currentWord.split("").map((letter, index) => (
            <span
              key={index}
              className={clsx(styles.letrer, {
                [styles.curent__letter]: index === currentLetterIndex,
              })}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.control__group}>
        <Input
          label="Morse code:"
          value={value}
          onChange={handleChange}
          type="string"
        />
        <div className={styles.button__group}>
          <button onClick={hendelCkickDot} className={styles.control__button}>
            <VisuallyHidden>Dot</VisuallyHidden>
            <Dot />
          </button>
          <button onClick={hendelCkickDesh} className={styles.control__button}>
            <VisuallyHidden>Desh</VisuallyHidden>
            <Desh />
          </button>
        </div>
      </div>
    </div>
  );
}
