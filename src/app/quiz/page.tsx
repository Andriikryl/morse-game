"use client";
import React from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";
import Link from "next/link";
import Back from "@/icons/Back";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";

export default function Quiz() {
  return (
    <section>
      <div>
        <div className={styles.flex__group}>
          <Heading headingLevel="h1">Quiz</Heading>
          <Link href={"/"} className={styles.link__back}>
            <VisuallyHidden>Back</VisuallyHidden>
            <Back />
          </Link>
        </div>
        <Heading headingLevel="h2">Coming soon</Heading>
      </div>
    </section>
  );
}
