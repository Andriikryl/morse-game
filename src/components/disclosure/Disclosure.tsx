"use client";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import style from "./style.module.css";
import VisuallyHidden from "../visuallyHidden/VisuallyHidden";

type Props = {
  title: string;
  body: ReactNode;
};

const Disclosure = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.accordion} onClick={() => setIsOpen((prev) => !prev)}>
      <button
        className={style.accordion__button}
        aria-controls={props.title}
        aria-expanded={isOpen}
      >
        <div className={style.accordion__title}>
          <p className={style.title}>
          {props.title}
          </p>
          </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div>
            <VisuallyHidden>open</VisuallyHidden>
          </motion.div>
        </AnimatePresence>
      </button>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
        className="font-light"
      >
        {props.body}
      </motion.div>
    </div>
  );
};

export default Disclosure;
