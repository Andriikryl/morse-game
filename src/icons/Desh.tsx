import { IconProps } from "./IconProps.types";

export default function Desh({ className, size = 34 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"
      />
    </svg>
  );
}