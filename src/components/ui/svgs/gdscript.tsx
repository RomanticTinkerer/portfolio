import type { SVGProps } from "react";

const GDScript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 64 64">
    <path
      d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z"
      fill="#478CBF"
    />
    <path
      d="M32 8c13.255 0 24 10.745 24 24S45.255 56 32 56 8 45.255 8 32 18.745 8 32 8z"
      fill="#45AFDA"
    />
    <circle cx="24" cy="28" r="4" fill="#fff" />
    <circle cx="24" cy="28" r="2" fill="#2E2E2E" />
    <circle cx="40" cy="28" r="4" fill="#fff" />
    <circle cx="40" cy="28" r="2" fill="#2E2E2E" />
    <path
      d="M24 38c0 0 4 6 8 6s8-6 8-6"
      stroke="#2E2E2E"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 20c0-4 6-8 14-8s14 4 14 8"
      stroke="#478CBF"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export { GDScript };
