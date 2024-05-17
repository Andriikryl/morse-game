"use client";
import React from "react";
import styles from "./style.module.css";
import { Heading } from "../heading/Heading";
import useBool from "@/hooks/useBool";
import { DragModal } from "../dragModal/DragModal";
import { Button } from "../button/Button";
import VisuallyHidden from "../visuallyHidden/VisuallyHidden";
import HeroInfo from "./heroInfo/HeroInfo";
import Question from "@/icons/Question";
import Link from "next/link";

export default function Hero() {
  const [isOpen, handlers] = useBool(false);
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
        <nav className={styles.nav}>
          <ul role="list" className={styles.nav__list}>
            <li className={styles.list__item}>
              <Link className={styles.link} href={"/alphabet"}>
                alfabet
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link className={styles.link} href={"/play"}>
                Typing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Button onClick={handlers.toggle} className={styles.info}>
        <>
          <VisuallyHidden>Info</VisuallyHidden>
          <Question />
        </>
      </Button>
      <DragModal open={isOpen} setOpen={handlers.toggle}>
        <HeroInfo />
      </DragModal>
    </section>
  );
}
