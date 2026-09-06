import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";

import React from "react";

type DetailIconName = "rings" | "glasses" | "dress";

function DetailIcon({ name }: { name: DetailIconName }) {
  const iconClassName = "h-12 w-12";

  if (name === "rings") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className={iconClassName}
      >
        <circle cx="18" cy="29" r="9" />
        <circle cx="30" cy="29" r="9" />
        <path d="m18 9 4 7h-8l4-7Z" />
      </svg>
    );
  }

  if (name === "glasses") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className={iconClassName}
      >
        <path d="M9 8h12l-3 16h-6L9 8Z" />
        <path d="M15 24v10m-5 0h10" />
        <path d="M27 8h12l-3 16h-6L27 8Z" />
        <path d="M33 24v10m-5 0h10" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName}
    >
      <path d="M19 8h10l3 9 8 19H8l8-19 3-9Z" />
      <path d="M19 8c0 5 10 5 10 0M16 17l8 7 8-7" />
    </svg>
  );
}

export default function MinimalTemplate() {
  return (
    <main className="min-w-0 overflow-x-clip bg-[#f9f4f1]">
      <div className="minimal_content">
        <Section>
          <div className="header relative isolate flex min-h-[540px] flex-col items-center justify-center overflow-hidden px-5 py-10 before:absolute before:inset-0 before:z-[1] before:bg-[#f9f4f1]/40 before:content-[''] sm:min-h-[620px] sm:px-8 sm:py-12 lg:min-h-0 lg:flex-row lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0 lg:before:hidden">
            <div className="header_text relative z-10 flex w-full max-w-[430px] flex-col justify-center text-center lg:max-w-none lg:flex-1 lg:px-10 lg:text-left xl:px-20">
              <Heading
                level="h1"
                className="gdot-font pb-2 text-[clamp(3.75rem,17vw,5.625rem)] leading-[0.95] sm:pb-[10px] lg:text-[90px]"
              >
                Արմեն <span className="block">և Լուսին</span>
              </Heading>
              <Paragraph className="dzeragir-font pb-[6px] text-[clamp(0.875rem,4vw,1rem)] sm:text-[18px] lg:pb-[7px] lg:text-[30px]">
                Սկսվում է մեր նոր գլուխը
              </Paragraph>
              <Paragraph className="dzeragir-font pb-[14px] text-[clamp(1.875rem,9vw,2.25rem)] leading-none tracking-widest sm:text-[36px] lg:pb-[18px] lg:text-[42px]">
                12.06.2027
              </Paragraph>
              <Paragraph className="dzeragir-font pb-5 text-[clamp(0.875rem,4vw,1rem)] uppercase sm:text-[18px] lg:pb-[14px] lg:text-[25px]">
                Երևան, Հայաստան
              </Paragraph>
              <Paragraph className="dzeragir-font pb-0 text-xs sm:text-[14px] lg:pb-[25px] lg:text-[18px]">
                Սերը միշտ հավերժ է
              </Paragraph>
            </div>
            <div className="header_image absolute inset-0 -z-10 lg:static lg:z-auto lg:w-[42%] lg:shrink-0 xl:w-[500px]">
              <Image
                src="/Images/minimal-images/armen-lusine/armen-lusine.png"
                width={500}
                height={500}
                alt="Армен и Лусин в день свадьбы"
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, 100vw"
                preload
                className="absolute inset-0 h-full w-full max-w-none object-cover object-center lg:static lg:h-auto lg:w-full"
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className="our_story flex flex-col-reverse lg:flex-row">
            <div className="image_box relative min-h-[300px] w-full overflow-hidden sm:min-h-[380px] lg:min-h-0 lg:w-1/2">
              <Image
                src="/Images/minimal-images/armen-lusine/armen-liusine2.png"
                fill
                alt="Армен и Лусин"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="text_and_bg_box relative w-full overflow-hidden py-10 sm:py-[50px] lg:w-1/2">
              <Image
                src="/Images/minimal-images/bg/minimal-bg-image.png"
                fill
                alt=""
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="text_box relative z-10 h-full w-full text-black">
                <Heading level="h2" className="gdot-font px-5 py-5 text-[28px] sm:text-[32px]">
                  Մեր պատմությունը
                </Heading>
                <div className="paragraph-box flex w-full flex-col items-center px-5">
                  <Paragraph className="gdot-font w-full max-w-[400px] pb-5 text-[17px] sm:text-[20px]">
                    Մեր պատմությունը սկսվեց մի պարզ հանդիպումից, դարձավ ամենաթանկ հիշողությունը և այսօր մեզ տանում է
                    դեպի մեր «միշտ»-ը։
                  </Paragraph>
                  <Paragraph className="gdot-font w-full max-w-[400px] text-[17px] sm:text-[20px]">
                    Շնորհակալ ենք, որ կաք և մեր պատմության մի մասն եք։
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="details py-14 sm:py-20 lg:py-24" aria-label="Մանրամասներ">
            <div className="mb-10 text-center sm:mb-14">
              <Heading level="h2" className="gdot-font text-[clamp(2rem,6vw,2.5rem)] tracking-[0.04em]">
                Մանրամասներ
              </Heading>
              <span aria-hidden="true" className="mx-auto mt-3 block h-px w-9 bg-black/70" />
            </div>

            <div className="grid grid-cols-1 divide-y divide-black/15 md:grid-cols-3 md:divide-x md:divide-y-0">
              <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
                <div className="mb-6 text-black">
                  <DetailIcon name="rings" />
                </div>
                <Heading level="h3" className="gdot-font mb-6 text-[22px] tracking-[0.08em] sm:text-[25px]">
                  Պսակադրություն
                </Heading>
                <Paragraph className="gdot-font mb-5 text-[25px] tracking-[0.16em] sm:text-[28px]">16:00</Paragraph>
                <Paragraph className="gdot-font max-w-[260px] text-[16px] leading-relaxed sm:text-[18px]">
                  Սուրբ Զորավոր եկեղեցի, Երևան, Հայաստան
                </Paragraph>
              </article>

              <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
                <div className="mb-6 text-black">
                  <DetailIcon name="glasses" />
                </div>
                <Heading level="h3" className="gdot-font mb-6 text-[22px] tracking-[0.08em] sm:text-[25px]">
                  Տոնական ընթրիք
                </Heading>
                <Paragraph className="gdot-font mb-5 text-[25px] tracking-[0.16em] sm:text-[28px]">19:00</Paragraph>
                <Paragraph className="gdot-font max-w-[260px] text-[16px] leading-relaxed sm:text-[18px]">
                  Grand Hotel Yerevan, Երևան, Հայաստան
                </Paragraph>
              </article>

              <article className="flex min-h-[300px] flex-col items-center px-5 py-10 text-center sm:px-8">
                <div className="mb-6 text-black">
                  <DetailIcon name="dress" />
                </div>
                <Heading level="h3" className="gdot-font mb-5 text-[22px] tracking-[0.08em] sm:text-[25px]">
                  Դրես կոդ
                </Heading>
                <div aria-label="Գույների առաջարկվող ներկապնակ" className="mb-5 flex items-center gap-2.5">
                  <span className="h-7 w-7 rounded-full bg-[#1b1a18] sm:h-8 sm:w-8" />
                  <span className="h-7 w-7 rounded-full bg-[#786957] sm:h-8 sm:w-8" />
                  <span className="h-7 w-7 rounded-full bg-[#b8aa9a] sm:h-8 sm:w-8" />
                  <span className="h-7 w-7 rounded-full bg-[#e5ddd4] sm:h-8 sm:w-8" />
                </div>
                <Paragraph className="gdot-font max-w-[310px] text-[16px] leading-relaxed sm:text-[18px]">
                  Սիրով կսպասենք ձեզ նրբագեղ, տոնական հանդերձանքով՝ մեր գունային ներկապնակին համահունչ։
                </Paragraph>
              </article>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
