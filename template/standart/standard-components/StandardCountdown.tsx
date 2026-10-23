"use client";
import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/section/Section";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StandardCountdownTypes } from "../StandardTypes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface StandardCountdownProp {
  data: StandardCountdownTypes;
}

export default function StandardCountdown({ data }: StandardCountdownProp) {
  const targetDate = new Date(`${data.CountDownYear}-${data.CountDownMonth}-${data.CountDownDay}T18:12:00`).getTime();
  const [countDown, setCountdown] = useState(targetDate - Date.now());
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionNumberRef = useRef<HTMLSpanElement | null>(null);
  const sectionNumberLineRef = useRef<HTMLDivElement | null>(null);
  const headingAndParagraphRef = useRef<HTMLElement[]>([]);
  const timeRefs = useRef<HTMLSpanElement[]>([]);
  const timeHeadingRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !sectionNumberRef.current ||
      !sectionNumberLineRef.current ||
      !headingAndParagraphRef.current.length ||
      !timeRefs.current.length ||
      !timeHeadingRefs.current.length
    )
      return;

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });

      masterTL
        .from(sectionNumberRef.current, { x: -100, duration: 1, opacity: 0 })
        .from(sectionNumberLineRef.current, { scale: 0.1, opacity: 0 })
        .from(headingAndParagraphRef.current, { y: -10, opacity: 0, duration: 1, stagger: 0.1 }, "<")
        .from(timeRefs.current, { scale: 5, opacity: 0, duration: 1, stagger: 0.1 }, ">")
        .from(timeHeadingRefs.current, { scale: 0.1, opacity: 0, duration: 1, stagger: 0.1 }, "<");
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const difference = targetDate - Date.now();
      setCountdown(Math.max(difference, 0));
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const second = Math.floor(countDown / 1000) % 60;
  const minutes = Math.floor(countDown / (1000 * 60)) % 60;
  const hours = Math.floor(countDown / (1000 * 60 * 60)) % 24;
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  return (
    <Section sectionRef={sectionRef}>
      <Container>
        <div className="py-16 md:py-24">
          <div className="mb-4 flex items-center gap-4">
            <span
              ref={sectionNumberRef}
              className="
              ibm-text
              text-xs
              uppercase
              tracking-[0.3em]
              text-black/40
            "
            >
              03
            </span>
            <div ref={sectionNumberLineRef} className="h-px w-14 bg-black/20" />
          </div>

          <div className="mb-12 md:mb-16">
            <h2
              ref={(el) => {
                if (el && !headingAndParagraphRef.current.includes(el)) {
                  headingAndParagraphRef.current.push(el);
                }
              }}
              className="text-[32px] font-light tracking-[0.12em] md:text-[44px]"
            >
              Հետհաշվարկ
            </h2>

            <p
              ref={(el) => {
                if (el && !headingAndParagraphRef.current.includes(el)) {
                  headingAndParagraphRef.current.push(el);
                }
              }}
              className="mt-4 text-[12px] tracking-[0.35em] md:text-[14px]"
            >
              Շուտով
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el && !timeRefs.current.includes(el)) {
                    timeRefs.current.push(el);
                  }
                }}
                className="text-[42px] font-light leading-none md:text-[56px]"
              >
                {mounted ? String(days).padStart(2, "0") : "00"}
              </span>

              <span
                ref={(el) => {
                  if (el && !timeHeadingRefs.current.includes(el)) {
                    timeHeadingRefs.current.push(el);
                  }
                }}
                className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]"
              >
                Օրերը
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el && !timeRefs.current.includes(el)) {
                    timeRefs.current.push(el);
                  }
                }}
                className="text-[42px] font-light leading-none md:text-[56px]"
              >
                {mounted ? String(hours).padStart(2, "0") : "00"}
              </span>

              <span
                ref={(el) => {
                  if (el && !timeHeadingRefs.current.includes(el)) {
                    timeHeadingRefs.current.push(el);
                  }
                }}
                className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]"
              >
                Ժամ
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el && !timeRefs.current.includes(el)) {
                    timeRefs.current.push(el);
                  }
                }}
                className="text-[42px] font-light leading-none md:text-[56px]"
              >
                {mounted ? String(minutes).padStart(2, "0") : "00"}
              </span>

              <span
                ref={(el) => {
                  if (el && !timeHeadingRefs.current.includes(el)) {
                    timeHeadingRefs.current.push(el);
                  }
                }}
                className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]"
              >
                Րոպե
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el && !timeRefs.current.includes(el)) {
                    timeRefs.current.push(el);
                  }
                }}
                className="text-[42px] font-light leading-none md:text-[56px]"
              >
                {mounted ? String(second).padStart(2, "0") : "00"}
              </span>

              <span
                ref={(el) => {
                  if (el && !timeHeadingRefs.current.includes(el)) {
                    timeHeadingRefs.current.push(el);
                  }
                }}
                className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]"
              >
                Վայրկյան
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
