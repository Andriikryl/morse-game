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
      </div>
    </section>
  );
}
