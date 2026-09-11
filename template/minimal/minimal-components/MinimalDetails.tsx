import React from "react";

import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import { MinimalDetailsType } from "../MinimalTypes";

interface MinimalDetailsProp {
  data: MinimalDetailsType;
}

export default function MinimalDetails({ data }: MinimalDetailsProp) {
  return (
    <Section>
      <div className="details py-14 sm:py-20 lg:py-24" aria-label="Մանրամասներ">
        <div className="mb-10 text-center sm:mb-14">
          <Heading level="h2" className="ibm-title text-[clamp(2rem,6vw,2.5rem)] tracking-[0.04em]">
            Մանրամասներ
          </Heading>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-9 bg-black/70" />
        </div>

        <div className="grid grid-cols-1 divide-y divide-black/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
            <div className=" relative w-[40px] h-[40px] mb-6 text-black">
              <Image src="/images/minimal-images/icon/ring.svg" alt="ring" fill></Image>
            </div>
            <Heading level="h3" className="ibm-title mb-6 text-[22px] tracking-[0.08em] sm:text-[25px]">
              Պսակադրություն
            </Heading>
            <Paragraph className="ibm-text-medium mb-5 text-[25px] tracking-[0.16em] sm:text-[28px]">
              {data.wedding.weddingTime}
            </Paragraph>
            <Paragraph className="ibm-text max-w-[260px] text-[16px] leading-relaxed sm:text-[18px]">
              {data.wedding.weddingLocation}
            </Paragraph>
          </article>

          <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
            <div className=" relative w-[40px] h-[40px] mb-6 text-black">
              <Image src="/images/minimal-images/icon/glasess.svg" alt="glass" fill></Image>
            </div>
            <Heading level="h3" className="ibm-title mb-6 text-[22px] tracking-[0.08em] sm:text-[25px]">
              Տոնական ընթրիք
            </Heading>
            <Paragraph className="ibm-text-medium mb-5 text-[25px] tracking-[0.16em] sm:text-[28px]">
              {data.festiveDinner.festiveDinnerTime}
            </Paragraph>
            <Paragraph className="ibm-text max-w-[260px] text-[16px] leading-relaxed sm:text-[18px]">
              {data.festiveDinner.festiveDinnerLocation}
            </Paragraph>
          </article>

          <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
            <div className=" relative w-[40px] h-[40px] mb-6 text-black">
              <Image src="/images/minimal-images/icon/dress.svg" alt="dress" fill></Image>
            </div>
            <Heading level="h3" className="gdot-font mb-5 text-[22px] tracking-[0.08em] sm:text-[25px]">
              Դրես կոդ
            </Heading>
            <div aria-label="Գույների առաջարկվող ներկապնակ" className="mb-5 flex items-center gap-2.5">
              {data.dress.dressColor.map((color, colorIndex) => (
                <span
                  key={colorIndex}
                  className={`h-7 w-7 rounded-full sm:h-8 sm:w-8`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <Paragraph className="ibm-text max-w-[310px] text-[16px] leading-relaxed sm:text-[18px]">
              {data.dress.dressText}
            </Paragraph>
          </article>
        </div>
      </div>
    </Section>
  );
}
