import Image from "next/image";
import styles from "./style.module.css";
import { letterImages } from "@/data/letterImages";

export type LetterImagesKeys = keyof typeof letterImages;

type LetterProps = {
  letter: LetterImagesKeys;
  word: string;
};

const LetterComponent: React.FC<LetterProps> = ({ letter, word }) => {
  const imagePath = letterImages[letter];
  return (
    <div className={styles.letter__box}>
      <Image src={imagePath} width={200} height={300} alt={letter} />
      <span className={styles.word}>{word}</span>
    </div>
  );
};

export default LetterComponent;
