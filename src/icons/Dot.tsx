import { IconProps } from "./IconProps.types";

export default function Dot({ className, size = 34 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
      />
    </svg>
  );
}
