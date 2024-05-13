import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useKeyPressEvent, useDrop } from "react-use";
import styles from "./style.module.css";

// const MAX_DIGITS = 6;

export function SeparatedInput({
  value,
  onChange,
  readOnly,
  MAX_DIGITS,
}: {
  value: string;
  onChange?: (value: string) => void;
  readOnly: boolean;
  MAX_DIGITS: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [focusIndex, setFocusIndex] = useState(0);

  const handlePaste = useCallback(
    (text: string) => {
      if (readOnly) {
        return;
      }
      // limit text to max length
      const newText = text.substring(0, MAX_DIGITS);
      onChange?.(newText);

      // set the focus on next the last input if max length
      setFocusIndex(newText.length === MAX_DIGITS ? 5 : newText.length);
    },
    [onChange, readOnly, MAX_DIGITS]
  );

  useDrop({
    onText: handlePaste,
  });

  const handleBackspace = useCallback(() => {
    if (readOnly) {
      return;
    }
    // remove the last character
    const newValue = value.slice(0, -1);
    // move the cursor back one
    setFocusIndex((prev) => (prev > 0 ? prev - 1 : 0));
    onChange?.(newValue);
  }, [onChange, readOnly, value]);

  // fires handleBackspace event when Backspace is pressed
  useKeyPressEvent("Backspace", handleBackspace);

  useEffect(() => {
    // focus the current input by index
    if (ref.current?.children[focusIndex] && !readOnly) {
      (ref.current.children[focusIndex] as HTMLInputElement).focus();
    }
  }, [focusIndex, readOnly]);

  const separatedValue = useMemo(() => {
    // fill the unused inputs with empty strings
    const filler = Array(
      value.length <= MAX_DIGITS ? MAX_DIGITS - value.length : 0
    ).fill("");
    const resolvedValue = [...value, ...filler];

    // make sure it's only 6 characters long
    resolvedValue.length = MAX_DIGITS;
    return resolvedValue;
  }, [value, MAX_DIGITS]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (readOnly) {
        return;
      }
      // move the cursor forward after input
      setFocusIndex((prev) =>
        prev < MAX_DIGITS - 1 ? prev + 1 : MAX_DIGITS - 1
      );
      onChange?.(value + event.target.value);
    },
    [onChange, readOnly, value, MAX_DIGITS]
  );

  return (
    <div className={styles.input__vontainer} ref={ref}>
      {separatedValue.map((character, index) => {
        const disabled =
          readOnly ||
          (index < value.length && index + 1 < MAX_DIGITS) ||
          index > focusIndex;
        return (
          <input
            className={styles.input}
            key={index}
            id={`${index}`}
            value={character}
            maxLength={1}
            onChange={handleChange}
            readOnly={readOnly}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}
