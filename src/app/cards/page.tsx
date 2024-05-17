"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { englishToMorse } from "@/data/morseDictionary";
import { Heading } from "@/components/heading/Heading";
import Link from "next/link";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";
import Back from "@/icons/Back";

export default function Cards() {
  const [flippedStates, setFlippedStates] = useState(
    Array(Object.keys(englishToMorse).length).fill(false)
  );
  // Function to handle click on the back face of the card
  const handleClickBackface = (index: number) => {
    // Create a copy of the current flippedStates array
    const newFlippedStates = [...flippedStates];
    // Toggle the flipped state for the clicked card
    newFlippedStates[index] = !newFlippedStates[index];
    // Update the state with the new array
    setFlippedStates(newFlippedStates);
  };

  return (
    <section>
      <div>
        <div className={styles.flex__group}>
          <Heading headingLevel="h1">Cards</Heading>
          <Link href={"/"} className={styles.link__back}>
            <VisuallyHidden>Back</VisuallyHidden>
            <Back />
          </Link>
        </div>
        <div className={styles.wrapper}>
          {Object.entries(englishToMorse).map(([letter, morse], index) => (
            <div
              key={index}
              className={clsx(styles.card, {
                [styles.flipped]: flippedStates[index],
              })}
              onClick={() => handleClickBackface(index)}
            >
              <div className={clsx(styles.front, styles.face)}>
                <span className={styles.letter}>{letter}</span>
              </div>
              <div className={clsx(styles.back, styles.face)}>
                <span className={styles.morse}>{morse}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
