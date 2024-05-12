import React from "react";
import styles from "./style.module.css";
import { Heading } from "../heading/Heading";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__box}>
        <div className={styles.title__box}>
          <Heading headingLevel="h1">Morse Typing Trainer</Heading>
        </div>
        <p className={styles.hero__description}>
          I created this trainer to make the process of learning Morse code more
          fun and to encourage people to keep at it.
        </p>
      </div>
    </section>
  );
}
