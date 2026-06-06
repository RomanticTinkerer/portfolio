import type { SVGProps } from "react";

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="8" fill="#1A1A2E" />
    {/* Tux body */}
    <ellipse cx="32" cy="38" rx="12" ry="14" fill="#2C2C3E" />
    {/* Tux belly */}
    <ellipse cx="32" cy="40" rx="8" ry="10" fill="#E8DCC8" />
    {/* Head */}
    <circle cx="32" cy="20" r="8" fill="#2C2C3E" />
    {/* Eyes */}
    <circle cx="29" cy="18" r="2" fill="white" />
    <circle cx="35" cy="18" r="2" fill="white" />
    <circle cx="29.5" cy="18" r="1" fill="#1A1A2E" />
    <circle cx="35.5" cy="18" r="1" fill="#1A1A2E" />
    {/* Beak */}
    <ellipse cx="32" cy="22" rx="3" ry="1.5" fill="#F5A623" />
    {/* Feet */}
    <ellipse cx="26" cy="52" rx="5" ry="2" fill="#F5A623" />
    <ellipse cx="38" cy="52" rx="5" ry="2" fill="#F5A623" />
  </svg>
);

export { Linux };
