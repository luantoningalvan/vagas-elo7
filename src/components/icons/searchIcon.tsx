import * as React from "react";

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z" />
      <circle
        cx={112}
        cy={112}
        r={80}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M168.57 168.57L224 224"
      />
    </svg>
  );
}
