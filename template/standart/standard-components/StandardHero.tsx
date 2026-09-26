"use client";
import React, { useLayoutEffect, useRef } from "react";
import Section from "@/components/ui/section/Section";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import { StandardHeroTypes } from "../StandardTypes";
import Heading from "@/components/ui/typography/Heading";
import Container from "@/components/ui/container/Container";

import gsap from "gsap";

interface StandardHeroProp {
  data: StandardHeroTypes;
}

export default function StandardHero({ data }: StandardHeroProp) {
  const logoHeroesRef = useRef(null);
  const headingRefs = useRef<HTMLElement[]>([]);
  const leftParagraphRefs = useRef<HTMLElement[]>([]);
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const heroesImageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (
      !logoHeroesRef.current ||
      !headingRefs.current.length ||
      !leftParagraphRefs.current ||
      !scrollElementRef.current ||
      !heroesImageRef.current
    )
      return;
    console.log(headingRefs.current);

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline();
      masterTL
        .from(heroesImageRef.current, {
          scale: 1.9,
          duration: 6,
          ease: "power4.out"
        })
        .from(
          logoHeroesRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 1,
            ease: "power3.out"
          },
          "<"
        )
        .from(
          headingRefs.current,
          {
            opacity: 0,
            y: -20,
            scale: 0.1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
          },
          ">"
        )
        .from(
          leftParagraphRefs.current,
          {
            opacity: 0,
            x: -20,
            scale: 0.1,
            duration: 1,
            stagger: 0.4,
            ease: "power3.out"
          },
          "<"
        )
        .from(
          scrollElementRef.current,
          {
            y: -20,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "power3.out"
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  function HeadingLeftParagraph({ words }: { words: string[] }) {
    return (
      <div className="ibm-text max-w-[130px] text-[8px] uppercase leading-[1.8] tracking-[0.2em] lg:text-[11px] lg:tracking-[0.22em]">
        {words.map((word, wordIndex) => (
          <Paragraph
            paragraphRef={(el) => {
              if (el && !leftParagraphRefs.current.includes(el)) {
                leftParagraphRefs.current.push(el);
              }
            }}
            key={wordIndex}
          >
            {word}
          </Paragraph>
        ))}
      </div>
    );
  }
  return (
    <>
      <Section>
        <Image
          src={data.standardHeroImageSrc}
          alt={`${data.heroHeading.heroHeroesNames.heroHeadingManName} & ${data.heroHeading.heroHeroesNames.heroHeadingWomanName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110 blur-[5px] max-lg:object-[20%_0]"
          ref={heroesImageRef}
        />
        <Container>
          <div className="standard_content relative min-h-[100svh] overflow-hidden text-white">
            <div className="relative z-10 flex min-h-[100svh] flex-col px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
              <header className="flex items-center justify-between">
                <div
                  ref={logoHeroesRef}
                  className="ibm-text text-[12px] tracking-[0.22em] sm:text-[14px] md:text-[15px] md:tracking-[0.25em]"
                >
                  {data.logoHeroes.man} / {data.logoHeroes.woman}
                </div>

                <div className="w-[35px] md:hidden" />
              </header>

              <div className="flex flex-1 items-center">
                <div className="grid w-full grid-cols-1 md:grid-cols-2">
                  <div className="hidden self-end pb-10 md:block lg:pb-12">
                    <HeadingLeftParagraph words={data.heroesParagraph} />
                    <div className="mt-6 h-9 w-px bg-white/60 lg:mt-7 lg:h-10" />
                  </div>

                  <div className="flex flex-col items-start md:items-end md:pr-4 lg:pr-8">
                    <div className="text-left md:text-right">
                      <Paragraph
                        paragraphRef={(el) => {
                          if (el && !headingRefs.current.includes(el)) {
                            headingRefs.current.push(el);
                          }
                        }}
                        className="ibm-text mb-3 text-[7px] uppercase tracking-[0.28em] text-white/70 sm:mb-4 sm:text-[8px] sm:tracking-[0.32em] md:text-[11px] md:tracking-[0.35em]"
                      >
                        {data.heroHeading.heroHeadingParagraph}
                      </Paragraph>
                      <Heading
                        level="h1"
                        className="ibm-heading text-[38px] uppercase leading-[0.95] tracking-[0.08em] sm:text-[48px] sm:tracking-[0.1em] md:text-[62px] md:tracking-[0.11em] lg:text-[72px] lg:tracking-[0.12em]"
                      >
                        <span
                          ref={(el) => {
                            if (el && !headingRefs.current.includes(el)) {
                              headingRefs.current.push(el);
                            }
                          }}
                          className="block"
                        >
                          {data.heroHeading.heroHeroesNames.heroHeadingManName}
                        </span>
                        <span
                          ref={(el) => {
                            if (el && !headingRefs.current.includes(el)) {
                              headingRefs.current.push(el);
                            }
                          }}
                          className="ibm-heading-italic my-2 text-[24px] leading-none sm:text-[28px] md:text-[32px]"
                        ></span>
                        <span
                          className="block"
                          ref={(el) => {
                            if (el && !headingRefs.current.includes(el)) {
                              headingRefs.current.push(el);
                            }
                          }}
                        >
                          &
                        </span>
                        <span
                          ref={(el) => {
                            if (el && !headingRefs.current.includes(el)) {
                              headingRefs.current.push(el);
                            }
                          }}
                          className="block"
                        >
                          {data.heroHeading.heroHeroesNames.heroHeadingWomanName}
                        </span>
                      </Heading>
                      <div className="ibm-text-medium mt-6 space-y-1.5 text-[7px] uppercase tracking-[0.22em] text-white/80 sm:mt-7 sm:text-[8px] sm:tracking-[0.26em] md:mt-8 md:text-[13px] md:tracking-[0.3em]">
                        <p>
                          <span
                            ref={(el) => {
                              if (el && !headingRefs.current.includes(el)) {
                                headingRefs.current.push(el);
                              }
                            }}
                          >
                            {data.heroHeading.heroHeadingDateTime.day}
                          </span>{" "}
                          <span
                            ref={(el) => {
                              if (el && !headingRefs.current.includes(el)) {
                                headingRefs.current.push(el);
                              }
                            }}
                          >
                            {data.heroHeading.heroHeadingDateTime.month}
                          </span>{" "}
                          <span
                            ref={(el) => {
                              if (el && !headingRefs.current.includes(el)) {
                                headingRefs.current.push(el);
                              }
                            }}
                          >
                            {data.heroHeading.heroHeadingDateTime.year}
                          </span>
                        </p>
                        <p>
                          <span
                            ref={(el) => {
                              if (el && !headingRefs.current.includes(el)) {
                                headingRefs.current.push(el);
                              }
                            }}
                          >{`${data.heroHeading.heroHeadingLocation.city}, `}</span>
                          <span
                            ref={(el) => {
                              if (el && !headingRefs.current.includes(el)) {
                                headingRefs.current.push(el);
                              }
                            }}
                          >
                            {data.heroHeading.heroHeadingLocation.country}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="ibm-text max-w-[100px] text-[7px] uppercase leading-[1.7] tracking-[0.18em] sm:max-w-[115px] sm:text-[8px] sm:tracking-[0.2em] md:hidden">
                  <HeadingLeftParagraph words={data.heroesParagraph} />
                </div>
                <div ref={scrollElementRef} className="ml-auto flex flex-col items-center gap-2 sm:gap-3">
                  <span className="ibm-text text-[7px] uppercase tracking-[0.25em] sm:text-[8px] sm:tracking-[0.3em]">
                    SCROLL
                  </span>

                  <div className="h-7 w-px bg-white/60 sm:h-9 md:h-10" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
