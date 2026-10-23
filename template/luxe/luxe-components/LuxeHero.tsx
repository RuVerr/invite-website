"use client";
import Section from "@/components/ui/section/Section";
import LuxeWavesSections from "./LuxeWavesSections";
import Container from "@/components/ui/container/Container";
import Paragraph from "@/components/ui/typography/Paragraph";
import Heading from "@/components/ui/typography/Heading";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function LuxuryHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingElementRefs = useRef<HTMLSpanElement[]>([]);
  const headingTextRefs = useRef<HTMLParagraphElement[]>([]);
  const scrollAndLineRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !headingElementRefs.current.length ||
      !headingTextRefs.current.length ||
      !scrollAndLineRefs.current.length
    )
      return;
    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        defaults: { ease: "expo.inOut", opacity: 0 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "restart reverse restart reverse"
        }
      });
      masterTL
        .from(headingElementRefs.current, {
          autoAlpha: 0,
          x: -45,
          y: 55,
          scale: 0.85,
          rotationX: -25,
          duration: 2,
          stagger: 0.1,
          filter: "blur(12px)",
          transformPerspective: 800,
          transformOrigin: "50% 100%"
        })
        .to(
          headingElementRefs.current,
          {
            motionPath: {
              path: [
                { x: 0, y: -5 },
                { x: 5, y: 0 },
                { x: 0, y: 5 },
                { x: -5, y: 0 },
                { x: 0, y: -5 }
              ],
              curviness: 2
            },
            opacity: 1,
            duration: 5,
            repeat: -1,
            yoyo: true
          },
          ">"
        )
        .from(headingTextRefs.current, { x: -10, duration: 1, stagger: 0.3, filter: "blur(20px)" }, "<")
        .to(headingTextRefs.current, {
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
          ease: "sine.inOut"
        })
        .to(scrollAndLineRefs.current, { y: -10, repeat: -1, yoyo: true, duration: 2, stagger: 0.3 }, "<");
    });

    return () => ctx.revert();
  }, []);

  const addElementInArray = <T extends HTMLElement>(el: T | null, refArray: T[]) => {
    if (el && !refArray.includes(el)) {
      refArray.push(el);
    }
  };
  return (
    <Section
      sectionId="hero"
      sectionRef={sectionRef}
      className="relative isolate flex min-h-[650px] h-[100svh] max-h-[1000px] w-full items-center overflow-hidden bg-[#211a14] text-[#f5efe6] pb-[100px] md:min-h-[700px]"
    >
      <div className="image-box overflow-hidden">
        <Image src={"/images/luxe-images/heroes/arman-sophie/hero1.png"} alt="dsd" fill className=" object-cover " />
      </div>
      {/* Имена молодожёнов */}
      <div className="relative flex h-full min-h-[650px] w-full max-w-[1600px] flex-col justify-start px-6 pb-24 pt-32 md:min-h-[700px] md:pb-28 md:pt-36 lg:px-16 xl:px-20">
        <div className="max-w-[720px]">
          <Paragraph
            paragraphRef={(el) => addElementInArray(el, headingTextRefs.current)}
            className="ibm-text-medium mb-5 text-[10px] uppercase tracking-[0.25em] [text-shadow:1px_2px_10px_black] text-white/70 sm:mb-6 sm:text-xs"
          >
            Свадьба
          </Paragraph>

          <Heading
            level="h1"
            className="ibm-heading text-[80px] leading-[0.91] tracking-[-0.045em] [text-shadow:1px_2px_10px_black]"
          >
            <span className="block" ref={(el) => addElementInArray(el, headingElementRefs.current)}>
              Арман
            </span>
            <span className="mt-2 flex items-center gap-3 pl-[clamp(35px,8vw,100px)] sm:gap-5">
              <span
                ref={(el) => addElementInArray(el, headingElementRefs.current)}
                className="ibm-heading-italic block text-[0.65em] leading-none text-[#d9c4a5] [text-shadow:1px_2px_10px_black]"
              >
                и
              </span>
              <span className="block" ref={(el) => addElementInArray(el, headingElementRefs.current)}>
                София
              </span>
            </span>
          </Heading>

          <div className="mt-8 flex flex-col gap-3 pl-1 sm:mt-10 sm:gap-4">
            <Paragraph
              paragraphRef={(el) => addElementInArray(el, headingTextRefs.current)}
              className="ibm-text-medium text-xs tracking-[0.16em] [text-shadow:1px_2px_10px_black] sm:text-sm"
            >
              14 сентября 2026
            </Paragraph>

            <Paragraph
              paragraphRef={(el) => addElementInArray(el, headingTextRefs.current)}
              className="ibm-text text-[9px] uppercase tracking-[0.2em] text-white/60 [text-shadow:1px_2px_10px_black] sm:text-[10px]"
            >
              Ереван, Армения
            </Paragraph>
          </div>
        </div>

        {/* Индикатор прокрутки */}
        <a
          href="#story"
          className="absolute bottom-8 left-6 flex flex-col items-start gap-3 [text-shadow:1px_2px_10px_black] sm:bottom-10 sm:left-10 lg:left-16 xl:left-20"
        >
          <span
            ref={(el) => addElementInArray(el, scrollAndLineRefs.current)}
            className="ibm-text-medium text-[9px] [text-shadow:1px_2px_10px_black] uppercase tracking-[0.12em] text-white/70 [text-shadow:1px_2px_10px_black]"
          >
            Прокрутите
          </span>

          <span
            ref={(el) => addElementInArray(el, scrollAndLineRefs.current)}
            className="block h-9 w-px bg-white/70 sm:h-12"
          />
        </a>

        <span className="ibm-text-medium absolute bottom-10 right-6 hidden text-[9px] tracking-[0.2em] text-white/60 sm:block sm:right-10 lg:right-16 xl:right-20">
          01 — 08
        </span>
      </div>
      <LuxeWavesSections value="light" />
    </Section>
  );
}
