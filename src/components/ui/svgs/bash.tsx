import type { SVGProps } from "react";

const Bash = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="8" fill="#2E3436" />
    <text
      x="32"
      y="28"
      textAnchor="middle"
      fill="#4EAA25"
      fontSize="10"
      fontFamily="monospace"
      fontWeight="bold"
    >
      &gt;_
    </text>
    <path
      d="M16 36h32M16 42h20"
      stroke="#4EAA25"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 18l6 6-6 6"
      stroke="#4EAA25"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="22" y="30" width="20" height="2.5" rx="1" fill="#4EAA25" />
  </svg>
);

export { Bash };
