import React from 'react'
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import { MinimalHeroType } from '../MinimalTypes';


interface MinimalHeroProp {
  data: MinimalHeroType
}
export default function MinimalHero({ data }: MinimalHeroProp) {
  return (
    <Section>
      <div className="header relative isolate flex min-h-[540px] flex-col items-center justify-center overflow-hidden px-5 py-10 before:absolute before:inset-0 before:z-[1] before:bg-[#f9f4f1]/40 before:content-[''] sm:min-h-[620px] sm:px-8 sm:py-12 lg:min-h-0 lg:flex-row lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0 lg:before:hidden">
        <div className="header_text relative z-10 flex w-full max-w-[430px] flex-col justify-center text-center lg:max-w-none lg:flex-1 lg:px-10 lg:text-left xl:px-20">
          <Heading
            level="h1"
            className="ibm-heading-italic pb-2 text-[clamp(3.75rem,17vw,5.625rem)] leading-[0.95] sm:pb-[10px] lg:text-[90px]"
          >
            {data.name.man} <span className="block">և {data.name.woman}</span>
          </Heading>
          <Paragraph className="ibm-text pb-[6px] text-[clamp(0.875rem,4vw,1rem)] sm:text-[18px] lg:pb-[7px] lg:text-[30px]">
            Սկսվում է մեր նոր գլուխը
          </Paragraph>
          <Paragraph className="ibm-text-medium pb-[14px] text-[clamp(1.875rem,9vw,2.25rem)] leading-none tracking-widest sm:text-[36px] lg:pb-[18px] lg:text-[42px]">
            {`${data.weddingTime.day}.${data.weddingTime.month}.${data.weddingTime.year}`}
          </Paragraph>
          <Paragraph className="ibm-text pb-5 text-[clamp(0.875rem,4vw,1rem)] uppercase sm:text-[18px] lg:pb-[14px] lg:text-[25px]">
            {`${data.location.city}, ${data.location.country}`}
          </Paragraph>
          <Paragraph className="ibm-text pb-0 text-xs sm:text-[14px] lg:pb-[25px] lg:text-[18px]">
            Սերը միշտ հավերժ է
          </Paragraph>
        </div>
        <div className="header_image absolute inset-0 -z-10 lg:static lg:z-auto lg:w-[42%] lg:shrink-0 xl:w-[500px]">
          <Image
            src={data.heroImageSrc}
            width={500}
            height={400}
            alt="Армен и Лусин в день свадьбы"
            className="absolute inset-0 h-full w-full max-w-none object-cover object-center lg:static lg:h-auto lg:w-full"
          />
        </div>
      </div>
    </Section>
  );
}
