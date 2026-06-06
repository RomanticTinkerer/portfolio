"use client";

import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("@/components/magicui/light-rays"), {
  ssr: false,
});

export function LightRaysBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="rgba(255, 255, 255, 1)"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
    </div>
  );
}
