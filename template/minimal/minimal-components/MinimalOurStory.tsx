import React from "react";

import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import { MinimalUsStoryType } from "../MinimalTypes";
import Container from "@/components/ui/container/Container";


interface OurStoryProp{
    data: MinimalUsStoryType
}

export default function MinimalOurStory({ data }: OurStoryProp) {
  return (
    <Section>
      <Container>
        <div className="our_story flex flex-col-reverse lg:flex-row">
          <div className="image_box relative min-h-[300px] w-full overflow-hidden sm:min-h-[380px] lg:min-h-0 lg:w-1/2">
            <Image src={data.ourStoryImageSrc} fill alt="Армен и Лусин" className="object-cover" />
          </div>
          <div className="text_and_bg_box relative w-full overflow-hidden py-10 sm:py-[50px] lg:w-1/2">
            <Image
              src="/Images/minimal-images/bg/minimal-bg-image.png"
              fill
              alt="bg image"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="text_box relative z-10 h-full w-full text-black">
              <Heading level="h2" className="ibm-title px-5 py-5 text-[28px] sm:text-[32px]">
                Մեր պատմությունը
              </Heading>
              <div className="paragraph-box flex w-full flex-col items-center px-5">
                <Paragraph className="ibm-text w-full max-w-[400px] pb-5 text-[17px] sm:text-[20px]">
                  {data.ourStoryTextStory}
                </Paragraph>
                <Paragraph className="gdot-font w-full max-w-[400px] text-[17px] sm:text-[20px]">
                  {data.ourStoryTextStory2}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
