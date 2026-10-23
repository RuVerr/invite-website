"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { StandardTheDayTypes } from "../StandardTypes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
gsap.registerPlugin(ScrollTrigger);

interface TheDayProp {
  data: StandardTheDayTypes;
}

export default function TheDay({ data }: TheDayProp) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionNumber = useRef<HTMLSpanElement | null>(null);
  const sectionNumberLine = useRef<HTMLDivElement | null>(null);
  const theDayLine = useRef<HTMLDivElement | null>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);
  const paragraph = useRef<HTMLParagraphElement | null>(null);
  const theDayTimeRef = useRef<HTMLHeadingElement[]>([]);
  const theDayHeadingsRefs = useRef<HTMLParagraphElement[]>([]);

  const theDayImageRefs = useRef<HTMLImageElement[]>([]);
  const theDayLinePoints = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !sectionNumber.current ||
      !sectionNumberLine.current ||
      !heading.current ||
      !theDayLine.current ||
      !theDayLinePoints.current.length ||
      !theDayTimeRef.current.length ||
      !theDayHeadingsRefs.current.length ||
      // !paragraph.current ||
      !theDayImageRefs.current.length
    )
      return;

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });
      masterTL
        .from(sectionNumber.current, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: "power3.in"
        })
        .from(
          sectionNumberLine.current,
          {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            ease: "power3.in"
          },
          "<"
        )
        .from(
          heading.current,
          {
            opacity: 0,
            scale: 1.5,
            duration: 1,
            ease: "power3.in"
          },
          "<"
        )
        .from(theDayLine.current, { width: 0, duration: 2, ease: "power3.out" }, ">")
        .from(theDayLinePoints.current, { scale: 0.1, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.2 }, "<")
        .from(
          theDayImageRefs.current,
          { scale: 0.1, opacity: 0, y: 0, duration: 1, ease: "power4.out", stagger: 0.2 },
          "<"
        )
        .from(
          theDayImageRefs.current,
          {
            y: 2,
            duration: 2,
            opacity: 1,
            ease: "power4.inOut",
            yoyo: true,
            repeat: -1,
            stagger: { each: 0.1, from: "random" }
          },
          "<"
        )
        .from(
          theDayTimeRef.current,
          {
            y: -10,
            scale: 1.5,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2
          },
          ">"
        )
        .from(
          theDayHeadingsRefs.current,
          {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <Section sectionRef={sectionRef} className="relative overflow-hidden bg-[#111] py-24 text-white">
      <Image fill alt="kk" src={"/images/standard-images/bg/the-day-bg.jpg"} />

      <div className="absolute inset-0 bg-black/50" />
      <Container>
        <div className="relative px-6">
          <div className="mb-20">
            <div className="mb-4 flex items-center gap-4">
              <span ref={sectionNumber} className="text-xs tracking-[0.4em] text-white/60">
                02
              </span>

              <div ref={sectionNumberLine} className="h-px w-14 bg-white/40" />
            </div>

            <h2 ref={heading} className="text-5xl font-light uppercase tracking-[0.12em]">
              The Day
            </h2>
          </div>

          <div className="relative">
            <div ref={theDayLine} className="absolute left-0 right-0 top-5 hidden h-px bg-white/40 md:block" />

            <div className="grid gap-12 md:grid-cols-3 md:gap-10">
              {data.theDayData.map((item, itemIndex) => (
                <div key={itemIndex} className="relative flex flex-col items-center text-center">
                  <div
                    ref={(el) => {
                      if (el && !theDayLinePoints.current.includes(el)) {
                        theDayLinePoints.current.push(el);
                      }
                    }}
                    className=" relative top-3.5 h-3 w-3 rounded-full bg-amber-50 max-md:hidden"
                  />
                  <div className="relative top-[25px] mb-8 flex items-center justify-center">
                    <Image
                      src={item.theDayIcons}
                      alt={item.theDayHeadings}
                      width={40}
                      height={40}
                      className="object-contain"
                      ref={(el) => {
                        if (el && !theDayImageRefs.current.includes(el)) {
                          theDayImageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                  <h3
                    ref={(el) => {
                      if (el && !theDayTimeRef.current.includes(el)) {
                        theDayTimeRef.current.push(el);
                      }
                    }}
                    className="text-2xl font-light md:text-3xl"
                  >
                    {item.theDayTime}
                  </h3>

                  <p
                    ref={(el) => {
                      if (el && !theDayHeadingsRefs.current.includes(el)) {
                        theDayHeadingsRefs.current.push(el);
                      }
                    }}
                    className="mt-3 text-xs uppercase tracking-[0.25em] md:text-sm"
                  >
                    {item.theDayHeadings}
                  </p>

                  <p
                    ref={(el) => {
                      if (el && !theDayHeadingsRefs.current.includes(el)) {
                        theDayHeadingsRefs.current.push(el);
                      }
                    }}
                    className="mt-5 text-base text-white/80 md:text-lg"
                  >
                    {item.theDayLocationsOrInfo}
                  </p>

                  <p
                    ref={(el) => {
                      if (el && !theDayHeadingsRefs.current.includes(el)) {
                        theDayHeadingsRefs.current.push(el);
                      }
                    }}
                    className="text-base text-white/80 md:text-lg"
                  >
                    {item.theDayCityOrInfo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
