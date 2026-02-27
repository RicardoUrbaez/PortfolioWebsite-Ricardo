import React, { useMemo } from "react";
import Hyperspeed from "./Hyperspeed";

export default function HyperspeedBackground({ children, className = "" }) {
  const effectOptions = useMemo(
    () => ({
      distortion: "LongRaceDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 5,
      lanesPerRoad: 2,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 50,
      lightPairsPerRoadWay: 70,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.05, 400 * 0.15],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.2, 0.2],
      carFloorSeparation: [0.05, 1],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0x131318,
        brokenLines: 0x131318,
        leftCars: [0xff5f73, 0xe74d60, 0xff102a],
        rightCars: [0xa4e3e6, 0x80d1d4, 0x53c2c6],
        sticks: 0xa4e3e6
      }
    }),
    []
  );

  return (
    <section className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none scale-110 -translate-y-12 md:-translate-y-16">
        <Hyperspeed effectOptions={effectOptions} />
      </div>

      <div className="relative z-10 min-h-full">
        {children}
      </div>
    </section>
  );
}