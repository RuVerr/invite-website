"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LuxeWavesSectionsProps {
  value: "light" | "dark";
}

export default function LuxeWavesSections({ value }: LuxeWavesSectionsProps) {
  const waveRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    if (!waveRef.current || !pathRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const curve = {
      y0: 45,
      c1y: 85,
      c2y: 5,
      y1: 35,
      c3y: 65,
      c4y: 100,
      y2: 45,
      c5y: 0,
      c6y: 45,
      y3: 25
    };

    const updateWave = () => {
      if (!pathRef.current) return;

      pathRef.current.setAttribute(
        "d",
        `
          M0,${curve.y0}
          C180,${curve.c1y} 300,${curve.c2y} 500,${curve.y1}
          C700,${curve.c3y} 820,${curve.c4y} 1020,${curve.y2}
          C1200,${curve.c5y} 1320,${curve.c6y} 1440,${curve.y3}
          L1440,120
          L0,120
          Z
        `
      );
    };

    const ctx = gsap.context(() => {
      gsap.to(curve, {
        y0: 75,
        c1y: 35,
        c2y: 115,
        y1: 85,

        c3y: 55,
        c4y: 20,
        y2: 75,

        c5y: 120,
        c6y: 75,
        y3: 95,

        ease: "none",
        duration: 0.5,

        onUpdate: updateWave,

        scrollTrigger: {
          trigger: waveRef.current,
          start: "top bottom",
          end: "top 40%",
          scrub: 1.5
        }
      });
    }, waveRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={waveRef}
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`
        pointer-events-none
        absolute bottom-0 left-0
        ${value === "light" ? "z-0" : "z-20"}
        h-40 w-full
        sm:h-48
        lg:h-64
      `}
    >
      <path
        ref={pathRef}
        d="
          M0,45
          C180,85 300,5 500,35
          C700,65 820,100 1020,45
          C1200,0 1320,45 1440,25
          L1440,120
          L0,120
          Z
        "
        fill={value === "light" ? "#e9e2d9" : "#171511"}
      />
    </svg>
  );
}
