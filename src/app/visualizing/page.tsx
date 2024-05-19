"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";
import Link from "next/link";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";
import Back from "@/icons/Back";
import { Slider } from "@/components/inputSlider/slider";
import LetterComponent from "@/components/inputSlider/LetterComponent";
import { wordsImages } from "@/data/wordsImages";
import { letters } from "@/data/letters";

export default function Visualizing() {
  const [state, setState] = useState<number>(0);
  return (
    <section>
      <div>
        <div className={styles.flex__group}>
          <Heading headingLevel="h1">Visualizing</Heading>
          <Link href={"/"} className={styles.link__back}>
            <VisuallyHidden>Back</VisuallyHidden>
            <Back />
          </Link>
        </div>
        <div className={styles.wrapper}>
          <Slider
            className={styles.slider__box}
            letter={letters[state]}
            stops={letters.map((letter) => (
              <LetterComponent
                key={letter}
                letter={letter}
                word={wordsImages[state]}
              />
            ))}
            value={state}
            onChange={(value: number) => setState(value)}
          />
        </div>
      </div>
    </section>
  );
}
