"use client";
import Section from "@/components/ui/section/Section";
import LuxeWavesSections from "./LuxeWavesSections";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Container from "@/components/ui/container/Container";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function LuxeStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const storyParagraphWord = `Каждая история любви уникальна. Наша началась с простой встречи, которая постепенно превратилась в самое важное путешествие в нашей жизни. Сегодня мы хотим разделить с вами момент, который навсегда останется в наших сердцах.`;
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  if (imageRefs.current) {
    console.log(imageRefs.current);
  }

  useLayoutEffect(() => {
    if (!headingRef.current || !sectionRef.current || !paragraphRef.current || !imageRefs.current) return;

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        defaults: { ease: "power2.inOut", opacity: 0 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "restart reverse restart reverse "
        }
      });

      masterTL
        .from(headingRef.current, {
          x: -100,
          scale: 0.8,
          duration: 1.5,
          transformPerspective: 800,
          transformOrigin: "20% 90%"
        })
        .from(paragraphRef.current!.children, { x: -20, scale: 0.8, duration: 1, stagger: 0.2 })
        .from(
          imageRefs.current,
          {
            x: -100,
            rotate: 30,
            duration: 1,
            stagger: 0.3,
            onComplete: () => {
              gsap.to(imageRefs.current, { y: -10, duration: 5, repeat: -1, yoyo: true, stagger: 0.5 });
            }
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);
  return (
    <Section
      sectionRef={sectionRef}
      sectionId="story"
      className="
        relative
        overflow-hidden
        pb-[50px]
        bg-[#eee9e1]
        text-[#292621]
      "
    >
      <LuxeWavesSections value="dark" />
      <div className="w-full overflow-hidden">
        <Image src={"/images/luxe-images/bg/story3.png"} alt="" fill className="object-cover"></Image>
      </div>
      <Container>
        <div
          className=" 
          relative 
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-12
          px-6
          py-16
          sm:px-10
          sm:py-20
          lg:min-h-[620px]
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-12
          lg:px-16
          lg:py-24
          xl:px-20
        "
        >
          <div className="relative z-10 max-w-[460px]">
            <span
              className="
              ibm-text-medium
              text-sm
              tracking-[0.12em]
              text-[#988571]
            "
            >
              01
            </span>

            <Heading
              level="h2"
              headingRef={headingRef}
              className="
              ibm-title
              mt-5
              text-[clamp(32px,4vw,54px)]
              leading-[1.08]
              tracking-[-0.035em]
            "
            >
              Наша история
            </Heading>

            <Paragraph
              paragraphRef={paragraphRef}
              className="
              ibm-text
              mt-6
              max-w-[360px]
              text-sm
              leading-[1.9]
              text-[#655d53]
              whitespace-pre-wrap
              sm:text-[15px]
            "
            >
              {storyParagraphWord.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">{`${word} `}</span>
              ))}
            </Paragraph>
          </div>

          <div
            className="
            relative
            mx-auto
            h-[390px]
            w-full
            max-w-[650px]
            sm:h-[480px]
            lg:h-[500px]
          "
          >
            <div
              ref={(el) => {
                if (el && !imageRefs.current.includes(el)) {
                  imageRefs.current.push(el);
                }
              }}
              className="
              absolute
              left-[2%]
              top-[12%]
              z-10
              h-[62%]
              w-[65%]
              -rotate-2
              overflow-hidden
              border-[5px]
              border-[#f8f4ed]
              bg-[#b5a48e]
              shadow-[0_12px_35px_rgba(41,38,33,0.12)]
              sm:border-[7px]
            "
            >
              <Image src={"/images/luxe-images/heroes/arman-sophie/story.png"} alt="dd" fill className="object-cover" />
              <div
                className="
                absolute
                bottom-5
                left-4
                right-4
                sm:bottom-8
                sm:left-6
              "
              >
                <Paragraph
                  className="
                  ibm-title
                  mt-2
                  text-xl
                  text-white
                  sm:text-3xl
                "
                >
                  Вместе
                </Paragraph>
              </div>
            </div>

            {/* Верхняя фотография */}

            <div
              ref={(el) => {
                if (el && !imageRefs.current.includes(el)) {
                  imageRefs.current.push(el);
                }
              }}
              className="
              absolute
              right-[3%]
              top-[2%]
              z-20
              h-[34%]
              w-[38%]
              rotate-3
              overflow-hidden
              border-[5px]
              border-[#f8f4ed]
              bg-[#d2c7b8]
              shadow-[0_10px_30px_rgba(41,38,33,0.1)]
              sm:border-[7px]
            "
            >
              <Image
                src={"/images/luxe-images/heroes/arman-sophie/story2.png"}
                alt="dd"
                fill
                className="object-cover"
              />
            </div>

            {/* Нижняя фотография */}

            <div
              ref={(el) => {
                if (el && !imageRefs.current.includes(el)) {
                  imageRefs.current.push(el);
                }
              }}
              className="
              absolute
              bottom-[3%]
              right-[5%]
              z-20
              h-[42%]
              w-[43%]
              -rotate-3
              overflow-hidden
              border-[5px]
              border-[#f8f4ed]
              bg-[#a79b89]
              shadow-[0_12px_35px_rgba(41,38,33,0.12)]
              sm:border-[7px]
            "
            >
              <Image
                src={"/images/luxe-images/heroes/arman-sophie/story3.png"}
                alt="dd"
                fill
                className="object-cover"
              />
            </div>

            <span
              className="
              ibm-heading-italic
              absolute
              right-[2%]
              top-[43%]
              z-30
              hidden
              -rotate-6
              text-2xl
              text-[#8e7b65]
              md:block
              lg:text-3xl
            "
            >
              together
            </span>

            {/* Декоративная линия */}

            <div
              aria-hidden="true"
              className="
              absolute
              bottom-[15%]
              left-[4%]
              h-px
              w-[22%]
              rotate-[-8deg]
              bg-[#a08b72]/60
            "
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
