"use client";
import React from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";
import Link from "next/link";
import Tree from "@/components/tree/Tree";
import VisuallyHidden from "@/components/visuallyHidden/VisuallyHidden";
import Back from "@/icons/Back";
import { treeData } from "@/data/treeData";

export default function Alphabet() {
  return (
    <section className={styles.alphabet}>
      <Link href={"/"} className={styles.link__back}>
        <VisuallyHidden>Back</VisuallyHidden>
        <Back />
      </Link>
      <Heading headingLevel="h1">Alphabet</Heading>
      <Tree treeData={treeData} />
    </section>
  );
}
