"use client";

import dynamic from "next/dynamic";

const Balatro = dynamic(() => import("@/components/magicui/balatro"), {
  ssr: false,
});

export function BalatroBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Balatro
        isRotate={false}
        mouseInteraction={true}
        pixelFilter={700}
        color1="#ff0000ff"
        color2="#38bdf8"
        color3="#0a0a0a"
        contrast={3.5}
        lighting={0.3}
        spinSpeed={5.0}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
