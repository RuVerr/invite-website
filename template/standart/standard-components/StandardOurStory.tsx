import Image from "next/image";
import React from "react";
import { StandardOurStoryTypes } from "../StandardTypes";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";

interface StandardOurStoryProp {
  data: StandardOurStoryTypes;
}

export default function StandardOurStory({ data }: StandardOurStoryProp) {
  return (
    <Section className="bg-[#f8f4f0] py-16 lg:py-24">
      <Container>
        <div className="our_story_content">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
              <div className="flex flex-col justify-center">
                <span className="ibm-text text-[12px] uppercase tracking-[0.3em] text-neutral-400">01</span>

                <Heading
                  level="h2"
                  className="ibm-heading whitespace-nowrap mt-4 text-[23px] uppercase tracking-[0.08em] sm:text-[28px] lg:text-[32px]"
                >
                  {data.ourStoryHeading}
                </Heading>

                <Paragraph className="ibm-text mt-8 max-w-[340px] text-[15px] leading-8 text-neutral-600 max-lg:text-center items-center max-w-[540px]">
                  {data.ourStoryParagraph}
                </Paragraph>

                <div className="mt-10 h-px w-16 bg-neutral-300" />
              </div>

              <div className="grid grid-cols-[2fr_1fr] items-center gap-4 sm:gap-6">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-300">
                  <Image src={data.ourStoryImageSrc} className="object-cover" fill alt="Image" />
                </div>

                <div className="relative aspect-[3/7] overflow-hidden bg-neutral-300">
                  <Image src={data.ourStoryImageSrc2} className="object-cover" fill alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
