import React from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";

export default function HeroInfo() {
  return (
    <div className={styles.wrapper}>
      <Heading headingLevel="h1">Morse history</Heading>
      <p className={styles.text}>
        Morse code is a method used in telecommunication to encode text
        characters as standardized sequences of two different signal durations,
        called dots and dashes, or dits and dahs.Morse code is named after
        Samuel Morse, one of the early developers of the system adopted for
        electrical telegraphy.
      </p>
      <p className={styles.text}>
        International Morse code encodes the 26 basic Latin letters a to z, one
        accented Latin letter (é), the Arabic numerals, and a small set of
        punctuation and procedural signals (prosigns). There is no distinction
        between upper and lower case letters. Each Morse code symbol is formed
        by a sequence of dits and dahs. The dit duration can vary for signal
        clarity and operator skill, but for any one message, once established it
        is the basic unit of time measurement in Morse code. The duration of a
        dah is three times the duration of a dit (although some telegraphers
        deliberately exaggerate the length of a dah for clearer signalling).
        Each dit or dah within an encoded character is followed by a period of
        signal absence, called a space, equal to the dit duration. The letters
        of a word are separated by a space of duration equal to three dits, and
        words are separated by a space equal to seven dits.
      </p>
      <p className={styles.text}>
        Morse code can be memorized and sent in a form perceptible to the human
        senses, e.g. via sound waves or visible light, such that it can be
        directly interpreted by persons trained in the skill. Morse code is
        usually transmitted by on-off keying of an information-carrying medium
        such as electric current, radio waves, visible light, or sound waves.
        The current or wave is present during the time period of the dit or dah
        and absent during the time between dits and dahs.
      </p>
      <p className={styles.text}>
        Since many natural languages use more than the 26 letters of the Latin
        alphabet, Morse alphabets have been developed for those languages,
        largely by transliteration of existing codes.
      </p>
      <p className={styles.text}>
        To increase the efficiency of transmission, Morse code was originally
        designed so that the duration of each symbol is approximately inverse to
        the frequency of occurrence of the character that it represents in text
        of the English language. Thus the most common letter in English, the
        letter e, has the shortest code – a single dit. Because the Morse code
        elements are specified by proportion rather than specific time
        durations, the code is usually transmitted at the highest rate that the
        receiver is capable of decoding. Morse code transmission rate (speed) is
        specified in groups per minute, commonly referred to as words per
        minute.
      </p>
    </div>
  );
}
