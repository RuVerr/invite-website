"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { StandardOurStoryTypes } from "../StandardTypes";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface StandardOurStoryProp {
  data: StandardOurStoryTypes;
}

export default function StandardOurStory({ data }: StandardOurStoryProp) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const ourStoryRef = useRef<HTMLHeadingElement | null>(null);
  const sectionNumberRef = useRef<HTMLSpanElement | null>(null);
  const ourStoryImageRefs = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    if (!headingRef.current || !ourStoryRef.current || !sectionNumberRef.current || !ourStoryImageRefs.current.length)
      return;
    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline();

      gsap.from(sectionNumberRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionNumberRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });

      gsap.from(headingRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });
      gsap.from(ourStoryRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ourStoryRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });

      gsap.from(ourStoryImageRefs.current[0], {
        scale: 0.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ourStoryImageRefs.current[0],
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });
      gsap.from(ourStoryImageRefs.current[1], {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ourStoryImageRefs.current[0],
          start: "top 80%",
          toggleActions: "restart reverse restart reverse"
        }
      });
      masterTL.to(ourStoryImageRefs.current, {
        y: -11,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[#f8f4f0] py-16 lg:py-24">
      <Container>
        <div className="our_story_content">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
              <div className="flex flex-col justify-center">
                <span
                  ref={sectionNumberRef}
                  className="ibm-text text-[14px] uppercase tracking-[0.3em] text-neutral-400"
                >
                  01
                </span>

                <Heading
                  level="h2"
                  className="ibm-heading whitespace-nowrap mt-4 text-[23px] uppercase tracking-[0.08em] sm:text-[28px] lg:text-[32px]"
                  headingRef={headingRef}
                >
                  {data.ourStoryHeading}
                </Heading>

                <Paragraph
                  paragraphRef={ourStoryRef}
                  className="ibm-text mt-8 max-w-[340px] text-[15px] leading-8 text-neutral-600 max-lg:text-center items-center max-w-[540px]"
                >
                  {data.ourStoryParagraph}
                </Paragraph>

                <div className="mt-10 h-px w-16 bg-neutral-300" />
              </div>

              <div className="grid grid-cols-[2fr_1fr] items-center gap-4 sm:gap-6">
                <div className="relative aspect-[3/4]">
                  <Image
                    ref={(el) => {
                      if (el && !ourStoryImageRefs.current.includes(el)) {
                        ourStoryImageRefs.current.push(el);
                      }
                    }}
                    src={data.ourStoryImageSrc}
                    className="object-cover rounded-4xl"
                    fill
                    alt="Image"
                  />
                </div>

                <div className="relative aspect-[3/7]">
                  <Image
                    ref={(el) => {
                      if (el && !ourStoryImageRefs.current.includes(el)) {
                        ourStoryImageRefs.current.push(el);
                      }
                    }}
                    src={data.ourStoryImageSrc2}
                    className="object-cover rounded-4xl"
                    fill
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
