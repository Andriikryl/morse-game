"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./style.module.css";
import { words } from "@/data/words";
import { englishToMorse } from "@/data/morseDictionary";
import clsx from "clsx";
import { Input } from "../input/Input";
import { motion } from "framer-motion";

export default function Trainer() {
  const [value, setValue] = useState("");
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

      // Wait for 500 milliseconds before checking the input
      setTimeout(() => {
        if (
          newValue ===
          englishToMorse[currentLetter as keyof typeof englishToMorse]
        ) {
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
      }, 1000); // Adjust the delay time as needed
    },
    [currentLetter, currentLetterIndex, currentWord, currentIndex]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.word__box}>
        <div className={styles.letter__box}>
          {currentWord.split("").map((letter, index) => (
            <motion.span
              layout
              transition={{ type: "spring", duration: 1.8 }}
              key={index}
              className={clsx(styles.letrer, {
                [styles.curent__letter]: index === currentLetterIndex,
              })}
            >
              {letter}
            </motion.span>
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
      </div>
    </div>
  );
}
