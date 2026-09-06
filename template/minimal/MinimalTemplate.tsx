import Section from "@/components/ui/section/Section";
// @ts-ignore
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";

import React from "react";

export default function MinimalTemplate() {
  return (
    <main className="bg-[#f9f4f1]">
      <div className="minimal_content">
        <Section>
          <div className="header relative isolate flex min-h-[620px] flex-col items-center justify-center overflow-hidden px-6 py-12 before:absolute before:inset-0 before:z-[1] before:bg-[#f9f4f1]/30 before:content-[''] md:min-h-0 md:flex-row md:gap-0 md:overflow-visible md:px-0 md:py-0 md:before:hidden">
            <div className="header_text relative z-10 flex flex-col justify-center text-center md:text-left">
              <Paragraph className="pb-[7px] text-[11px] md:pb-[10px]">Вместе до конца</Paragraph>
              <Heading
                level="h1"
                className="pb-[8px] text-[44px] leading-[0.95] sm:text-[56px] md:pb-[10px] md:text-[66px]"
              >
                Армен &<span className="block">Лусинэ</span>
              </Heading>
              <Paragraph className="pb-[6px] text-[13px] sm:text-[14px] md:pb-[7px] md:text-[15px]">
                Начинается наша новая глава
              </Paragraph>
              <Paragraph className="pb-[14px] text-[30px] leading-none sm:text-[36px] md:pb-[18px] md:text-[42px]">
                12.06.2027
              </Paragraph>
              <Paragraph className="pb-[20px] text-[12px] uppercase sm:text-[13px] md:pb-[14px] md:text-[14px]">
                Ереван, Армения
              </Paragraph>
              <Paragraph className="pb-0 text-[11px] md:pb-[25px] md:text-[11px]">Любовь всегда вечна</Paragraph>
            </div>
            <div className="header_image">
              <Image
                src={"/images/minimal-images/armen-lusine/armen-lusine.png"}
                width={500}
                height={500}
                alt="s"
                className="absolute inset-0 -z-10 h-full w-full max-w-none object-cover object-center md:static md:z-auto md:h-auto md:w-[500px]"
              ></Image>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
