"use client";
import React from "react";
import Trainer from "@/components/trainer/Trainer";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";
import Back from "@/icons/Back";
import Link from "next/link";
import styles from "./style.module.css";

export default function Play() {
  return (
    <section>
      <div className={styles.wrapper}>
        <Trainer />
        <Link href={"/"} className={styles.link__back}>
          <VisuallyHidden>Back</VisuallyHidden>
          <Back />
        </Link>
      </div>
    </section>
  );
}
