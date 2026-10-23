"use client";
import React, { useLayoutEffect, useRef } from "react";
import { StandardDressCodeTypes } from "../StandardTypes";
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/container/Container";

interface StandardDressCodeProp {
  data: StandardDressCodeTypes;
}

export default function StandardDressCode({ data }: StandardDressCodeProp) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionNumberRef = useRef<HTMLSpanElement | null>(null);
  const sectionNumberLineRef = useRef<HTMLDivElement | null>(null);
  const headingAndParagraphRefs = useRef<HTMLElement[]>([]);
  const colorRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !sectionNumberRef.current ||
      !sectionNumberLineRef.current ||
      !headingAndParagraphRefs.current.length ||
      !colorRefs.current.length
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
        .from(sectionNumberRef.current, { x: -20, opacity: 0, duration: 1 })
        .from(sectionNumberLineRef.current, { scale: 0.1, opacity: 0, duration: 1 })
        .from(headingAndParagraphRefs.current, { y: -10, opacity: 0, duration: 1, stagger: 0.1 }, "<")
        .from(colorRefs.current, { y: 20, scale: 0.1, opacity: 0, duration: 1, stagger: 0.2 })
        .to(colorRefs.current, {
          scale: 1.2,
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.3, from: "random" }
        });
    });

    return () => ctx.revert();
  }, []);
  return (
    <Section sectionRef={sectionRef} className="relative overflow-hidden bg-[#eee9e1] text-[#292621]">
      <Container>
        <div
          className="
          relative
          flex
          min-h-[clamp(420px,70vw,560px)]
          w-full
          max-w-6xl
          flex-col
          justify-between
          px-[clamp(20px,5vw,48px)]
          py-[clamp(48px,8vw,96px)]
        "
        >
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
              04
            </span>
            <div ref={sectionNumberLineRef} className="h-px w-14 bg-black/20" />
          </div>
          <div className="headingAndParagraph">
            <Heading
              level="h2"
              headingRef={(el) => {
                if (el && !headingAndParagraphRefs.current.includes(el)) {
                  headingAndParagraphRefs.current.push(el);
                }
              }}
              className="
              ibm-title
              mt-[clamp(12px,1.5vw,16px)]
              max-w-full
              text-[clamp(25px,4vw,44px)]
              uppercase
              leading-[1.05]
              tracking-[0.06em]
            "
            >
              Հագուստի գույներ
            </Heading>

            <Paragraph
              paragraphRef={(el) => {
                if (el && !headingAndParagraphRefs.current.includes(el)) {
                  headingAndParagraphRefs.current.push(el);
                }
              }}
              className="
              ibm-text
              mt-[clamp(12px,1.5vw,16px)]
              max-w-[clamp(220px,32vw,320px)]
              text-[clamp(7px,0.7vw,9px)]
              uppercase
              leading-[1.8]
              tracking-[0.16em]
              text-black/50
            "
            >
              ՓԱՓՈՒԿ ՆԵՐԿԱՊՆԱԿ ՄԵՐ ՕՐՎԱ ՀԱՄԱՐ
            </Paragraph>
          </div>

          <div
            className="
            mt-[clamp(42px,7vw,80px)]
            flex
            w-full
            justify-center
          "
          >
            <div
              className="
              flex
              w-full
              max-w-[420px]
              items-center
              justify-between
              gap-[clamp(8px,2vw,32px)]
            "
            >
              {data.dressColors.map((color, colorIndex) => (
                <div
                  ref={(el) => {
                    if (el && !colorRefs.current.includes(el)) {
                      colorRefs.current.push(el);
                    }
                  }}
                  key={colorIndex}
                  className="
                        h-[clamp(32px,4vw,48px)]
                        w-[clamp(32px,4vw,48px)]
                        rounded-full
                        border
                        border-black/10
                        bg-[#f4f0e8]
                      "
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div
            className="
            mt-[clamp(42px,7vw,80px)]
            flex
            w-full
            flex-col
            items-center
            text-center
          "
          >
            <Paragraph
              paragraphRef={(el) => {
                if (el && !headingAndParagraphRefs.current.includes(el)) {
                  headingAndParagraphRefs.current.push(el);
                }
              }}
              className="
              ibm-text
              w-full
              max-w-[clamp(250px,40vw,360px)]
              text-[clamp(8px,0.8vw,10px)]
              leading-[1.9]
              tracking-[0.06em]
              text-black/55
            "
            >
              Մենք ուրախ կլինենք տեսնել Ձեզ այս փափուկ և տաք երանգներով
            </Paragraph>
            <Paragraph
              paragraphRef={(el) => {
                if (el && !headingAndParagraphRefs.current.includes(el)) {
                  headingAndParagraphRefs.current.push(el);
                }
              }}
              className="
              ibm-text
              mt-[clamp(14px,2vw,20px)]
              max-w-[90%]
              text-center
              text-[clamp(6px,0.6vw,7px)]
              uppercase
              leading-[1.7]
              tracking-[0.18em]
              text-black/35
            "
            >
              ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆՆ ԱՄԵՆԱԿԱՐևՈՐՆ Է
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
}
