import React from "react";
import style from "./style.module.css";

export type readDataProps = { question: string; answerText: string };

export const generateAnswerJSX = (text: string): JSX.Element => (
  <div className={style.accordion__box}>
    <p className={style.accordion__body}>{text}</p>
  </div>
);

export const readData: readDataProps[] = [
  {
    question: "Take this kiss upon the brow!",
    answerText:
      "-.- -.-. / -......... / -.-........ /..-.--. --- -. / -..... / -....-. ---.-- -.-.--",
  },
  {
    question: "And, in parting from you now,",
    answerText:
      ".- -. -.. --..-- /.. -. /.--..-.-. -.. -. --. /..-..-. --- -- / -.-- ---..- / -. ---.-- --..--",
  },
  {
    question: "Thus much let me avow —",
    answerText: "-......-... / --..- -.-..... /.-... - / --. /.-...- ---.--",
  },
  {
    question: "You are not wrong, who deem",
    answerText:
      "-.-- --- ..- / .- .-. . / -. --- - / .-- .-. --- -. --. --..-- / .-- .... --- / -.. . . --",
  },
  {
    question: "That my days have been a dream",
    answerText:
      "- .... .- - / -- -.-- / -.. .- -.-- ... / .... .- ...- . / -... . . -. / .- / -.. .-. . .- --",
  },
  {
    question: "Yet if hope has flown away",
    answerText:
      "-.-- . - / .. ..-. / .... --- .--. . / .... .- ... / ..-. .-.. --- .-- -. / .- .-- .- -.--",
  },
  {
    question: "In a night, or in a day,",
    answerText:
      ".. -. / .- / -. .. --. .... - --..-- / --- .-. / .. -. / .- / -.. .- -.-- --..--",
  },
  {
    question: "In a vision, or in none,",
    answerText:
      ".. -. / .- / ...- .. ... .. --- -. --..-- / --- .-. / .. -. / -. --- -. . --..--",
  },
  {
    question: "Is it therefore the less gone? ",
    answerText:
      ".. ... / .. - / - .... . .-. . ..-. --- .-. . / - .... . / .-.. . ... ... / --. --- -. . ..--..",
  },
  {
    question: "All that we see or seem",
    answerText:
      ".- .-.. .-.. / - .... .- - / .-- . / ... . . / --- .-. / ... . . --",
  },
  {
    question: "Is but a dream within a dream.",
    answerText:
      ".. ... / -... ..- - / .- / -.. .-. . .- -- / .-- .. - .... .. -. / .- / -.. .-. . .- -- .-.-.-",
  },
];
