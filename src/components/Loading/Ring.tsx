import { HTMLAttributes } from "react";

export default function Ring(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;"
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#e15b64"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="23"
        strokeWidth="8"
        stroke="#f8b26a"
        strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.12831551628262"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        />
      </circle>
    </svg>
  );
}
