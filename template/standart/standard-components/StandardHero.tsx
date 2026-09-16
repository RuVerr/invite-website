import React from "react";
import Section from "@/components/ui/section/Section";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import { StandardHeroTypes } from "../StandardTypes";
import Heading from "@/components/ui/typography/Heading";
import Container from "@/components/ui/container/Container";

interface StandardHeroProp {
  data: StandardHeroTypes;
}

export default function StandardHero({ data }: StandardHeroProp) {
  function HeadingLeftParagraph({ words }: { words: string[] }) {
    return (
      <div className="ibm-text max-w-[130px] text-[8px] uppercase leading-[1.8] tracking-[0.2em] lg:text-[11px] lg:tracking-[0.22em]">
        {words.map((word, wordIndex) => (
          <Paragraph key={wordIndex}>{word}</Paragraph>
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
          className="object-cover object-center scale-110 blur-[5px]"
        />
        <Container>
          <div className="standard_content relative min-h-[100svh] overflow-hidden text-white">
            <div className="relative z-10 flex min-h-[100svh] flex-col px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
              <header className="flex items-center justify-between">
                <div className="ibm-text text-[12px] tracking-[0.22em] sm:text-[14px] md:text-[15px] md:tracking-[0.25em]">
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
                      <Paragraph className="ibm-text mb-3 text-[7px] uppercase tracking-[0.28em] text-white/70 sm:mb-4 sm:text-[8px] sm:tracking-[0.32em] md:text-[11px] md:tracking-[0.35em]">
                        {data.heroHeading.heroHeadingParagraph}
                      </Paragraph>

                      <Heading
                        level="h1"
                        className="ibm-heading text-[38px] uppercase leading-[0.95] tracking-[0.08em] sm:text-[48px] sm:tracking-[0.1em] md:text-[62px] md:tracking-[0.11em] lg:text-[72px] lg:tracking-[0.12em]"
                      >
                        <span className="block">{data.heroHeading.heroHeroesNames.heroHeadingManName}</span>
                        <span className="ibm-heading-italic my-2 text-[24px] leading-none sm:text-[28px] md:text-[32px]">
                          &
                        </span>
                        <span className="block">{data.heroHeading.heroHeroesNames.heroHeadingWomanName}</span>
                      </Heading>
                      <div className="ibm-text-medium mt-6 space-y-1.5 text-[7px] uppercase tracking-[0.22em] text-white/80 sm:mt-7 sm:text-[8px] sm:tracking-[0.26em] md:mt-8 md:text-[13px] md:tracking-[0.3em]">
                        <p>
                          {`${data.heroHeading.heroHeadingDateTime.day} ${data.heroHeading.heroHeadingDateTime.month}
                        ${data.heroHeading.heroHeadingDateTime.year}`}
                        </p>
                        <p>{`${data.heroHeading.heroHeadingLocation.city}, ${data.heroHeading.heroHeadingLocation.country}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="ibm-text max-w-[100px] text-[7px] uppercase leading-[1.7] tracking-[0.18em] sm:max-w-[115px] sm:text-[8px] sm:tracking-[0.2em] md:hidden">
                  <HeadingLeftParagraph words={data.heroesParagraph} />
                </div>
                <div className="ml-auto flex flex-col items-center gap-2 sm:gap-3">
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
