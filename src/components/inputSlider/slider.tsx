import clsx from "clsx";
import { motion } from "framer-motion";
import clamp from "lodash.clamp";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import styles from "./style.module.css";

type Props = {
  stops: ReactNode[];
  value: number;
  onChange: (value: number) => void;
  className?: string;
  letter: string;
};

export function Slider({ className, stops, value, onChange, letter }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!container.current) return;
    const { width: containerWidth } = container.current.getBoundingClientRect();
    const segmentWidth = containerWidth / (stops.length - 1);
    setPosition(value * segmentWidth);
  }, [stops.length, value]);

  useEffect(() => {
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);

    function listener() {
      if (!container.current) return;

      const { width: containerWidth } =
        container.current.getBoundingClientRect();
      const segmentWidth = containerWidth / (stops.length - 1);
      setPosition(value * segmentWidth);
    }
  }, [stops.length, value]);

  useHotkeys(
    "left,down",
    () => {
      if (!container.current) return;
      const { width: containerWidth } =
        container.current.getBoundingClientRect();
      const segmentWidth = containerWidth / (stops.length - 1);
      const nextIndex = clamp(value - 1, 0, stops.length - 1);
      setPosition(nextIndex * segmentWidth);
      onChange(nextIndex);
    },
    {},
    [value]
  );

  useHotkeys(
    "right,up",
    () => {
      if (!container.current) return;
      const { width: containerWidth } =
        container.current.getBoundingClientRect();
      const segmentWidth = containerWidth / (stops.length - 1);
      const nextIndex = clamp(value + 1, 0, stops.length - 1);
      setPosition(nextIndex * segmentWidth);
      onChange(nextIndex);
    },
    {},
    [value]
  );

  return (
    <div
      className={clsx(
        styles.wrapper,
        isDragging ? "cursor-ew-resize" : "cursor-pointer",
        className
      )}
      ref={container}
    >
      <div
        className={clsx(styles.box)}
        onClick={(e) => {
          if (!container.current) return;

          const { left: containerLeft, width: containerWidth } =
            container.current.getBoundingClientRect();

          const segmentWidth = containerWidth / (stops.length - 1);
          const offsetLeft = e.clientX - containerLeft;
          const nextIndex = Math.round(offsetLeft / segmentWidth);
          setPosition(nextIndex * segmentWidth);
          onChange(nextIndex);
        }}
      >
        {Array.from({ length: stops.length - 1 }).map((stop, i) => (
          <div
            key={i}
            className={clsx(styles.inner__control, {
              [styles.roundet__left]: i === 0,
              [styles.roundet__rigth]: i === stops.length - 2,
            })}
          />
        ))}
      </div>
      {position != null && (
        <motion.div
          tabIndex={0}
          className={clsx(styles.motion__box, {
            ["border-purple hover:border-purple"]: isDragging,
          })}
          initial={false}
          animate={{
            x: position - 14,
            y: "-50%",
          }}
          transition={{
            type: "tween",
            ease: [0.165, 0.84, 0.44, 1],
            duration: 0.4,
          }}
          onFocus={() => setIsDragging(true)}
          onBlur={() => setIsDragging(false)}
          onPointerDown={(e) => {
            const { ownerDocument } = e.currentTarget;

            setIsDragging(true);

            function onPointerMove(e: PointerEvent) {
              if (!container.current) return;

              const { width: containerWidth, left: containerLeft } =
                container.current.getBoundingClientRect();

              const segmentWidth = containerWidth / (stops.length - 1);
              const index = Math.round(
                (e.clientX - containerLeft) / segmentWidth
              );
              const clampedIndex = clamp(index, 0, stops.length - 1);
              setPosition(clampedIndex * segmentWidth);
              onChange(clampedIndex);
            }

            function onPointerUp(e: PointerEvent) {
              setIsDragging(false);
              ownerDocument.removeEventListener("pointermove", onPointerMove);
            }

            ownerDocument.addEventListener("pointermove", onPointerMove);
            ownerDocument.addEventListener("pointerup", onPointerUp);
          }}
        >
          <div className={styles.stops__box}>{stops[value]}</div>
          <span className={styles.letter}>{letter}</span>
        </motion.div>
      )}
    </div>
  );
}
