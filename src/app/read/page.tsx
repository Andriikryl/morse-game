"use client";
import React from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";
import Link from "next/link";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";
import Back from "@/icons/Back";
import { generateAnswerJSX, readData } from "./readData";
import Disclosure from "@/components/disclosure/Disclosure";

export default function Read() {
  return (
    <section className={styles.read__section}>
      <div>
        <div className={styles.flex__group}>
          <Heading headingLevel="h1">Read</Heading>
          <Link href={"/"} className={styles.link__back}>
            <VisuallyHidden>Back</VisuallyHidden>
            <Back />
          </Link>
        </div>
        <div className={styles.faq__box}>
          {readData.map(({ question, answerText }, index) => (
            <Disclosure
              key={index}
              title={question}
              body={generateAnswerJSX(answerText)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
