"use client";
import Image from "next/image";
import Section from "@/components/ui/section/Section";
import LuxeWavesSections from "./LuxeWavesSections";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Container from "@/components/ui/container/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LuxeSchedule() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionNumberRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const timeLineRef = useRef<HTMLDivElement | null>(null);
  const eventIconRefs = useRef<HTMLDivElement[]>([]);
  const circleTimeRefs = useRef<HTMLSpanElement[]>([]);
  const timeRefs = useRef<HTMLSpanElement[]>([]);
  const timeInfoRefs = useRef<HTMLSpanElement[]>([]);
  const timeInfoTwoRefs = useRef<HTMLSpanElement[]>([]);
  const ourDayRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !sectionNumberRef.current ||
      !headingRef.current ||
      !timeLineRef.current ||
      !eventIconRefs.current.length ||
      !circleTimeRefs.current.length ||
      !timeRefs.current.length ||
      !timeInfoRefs.current.length ||
      !timeInfoTwoRefs.current.length ||
      !ourDayRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        defaults: { opacity: 0, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "restart reverse restart reverse"
        }
      });

      masterTL
        .from(sectionNumberRef.current, { x: -20, duration: 0.5 })
        .from(headingRef.current, { scale: 9, duration: 1.5 })
        .from(timeLineRef.current, { width: "0%", duration: 0.7 })
        .from(eventIconRefs.current, { y: -10, duration: 0.5, stagger: 0.2 }, "<")
        .from(circleTimeRefs.current, { y: 10, scale: 1.6, duration: 0.5, stagger: 0.2 }, "<")
        .from(timeRefs.current, { y: -20, duration: 1, stagger: 0.2 }, "<")
        .from(timeInfoRefs.current, { y: -20, scale: 0.9, rotate: 5, duration: 1, stagger: 0.2 }, "<")
        .from(timeInfoTwoRefs.current, { scale: 0.1, duration: 1.3, stagger: 0.3 }, "<")
        .from(ourDayRef.current, { y: 20, duration: 1 }, "<");

      const value = timeRefs.current.map((el) => {
        const [hour, minute] = el.textContent.trim().split(":").map(Number);
        return {
          hour,
          minute
        };
      });

      timeRefs.current.forEach((el, index) => {
        const { hour, minute } = value[index];
        const counter = { totalMinute: 0 };

        const targetMinute = hour * 60 + minute;

        masterTL.to(
          counter,
          {
            totalMinute: targetMinute,
            duration: 4,
            stagger: 0.3,
            onUpdate: () => {
              const total = Math.floor(counter.totalMinute);
              const currentHour = Math.floor(total / 60);
              const currentMinute = total % 60;

              el.textContent = `${String(currentHour).padStart(2, "0")}:` + `${String(currentMinute).padStart(2, "0")}`;
            }
          },
          "<"
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <Section
      sectionRef={sectionRef}
      sectionId="schedule"
      className="relative pb-[30px] overflow-hidden bg-[#171511] text-[#eee7dc]"
    >
      <Image
        src={"/images/luxe-images/bg/schedule4.png"}
        alt=""
        fill
        className="object-cover object-right object-scale-down"
      />
      <Container>
        <div className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          {/* Заголовок секции */}

          <div className="relative z-10">
            <span ref={sectionNumberRef} className="ibm-text-medium text-xs block tracking-[0.2em] text-[#a99579]">
              02
            </span>

            <Heading
              headingRef={headingRef}
              level="h2"
              className="ibm-title mt-3 text-[clamp(32px,4vw,52px)] leading-tight"
            >
              Программа дня
            </Heading>
          </div>

          {/* Основная композиция */}

          <div className="relative mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            {/* Временная линия */}

            <div className="relative z-10">
              {/* Линия времени */}

              <div
                ref={timeLineRef}
                className="absolute left-[12.5%] right-[12.5%] top-[34px] hidden h-px bg-[#a99579]/50 sm:block"
              />

              <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-3">
                {/* Событие 1 */}

                <div className="relative flex flex-col items-center text-center">
                  <div
                    ref={(el) => {
                      if (el && !eventIconRefs.current.includes(el)) {
                        eventIconRefs.current.push(el);
                      }
                    }}
                    className="flex h-[68px] w-full items-start justify-center"
                  >
                    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 text-[#c6b397]" aria-hidden="true">
                      <circle cx="19" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="29" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="19" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
                      <circle cx="29" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
                      <path d="M19 11V15M29 11V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>

                  <span
                    ref={(el) => {
                      if (el && !circleTimeRefs.current.includes(el)) {
                        circleTimeRefs.current.push(el);
                      }
                    }}
                    className="mb-3 h-2 w-2 rounded-full border border-[#c6b397] bg-[#171511]"
                  />

                  <span
                    ref={(el) => {
                      if (el && !timeRefs.current.includes(el)) {
                        timeRefs.current.push(el);
                      }
                    }}
                    className="ibm-heading text-2xl sm:text-[28px]"
                  >
                    16:00
                  </span>

                  <span
                    ref={(el) => {
                      if (el && !timeInfoRefs.current.includes(el)) {
                        timeInfoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text-medium mt-2 text-[10px] uppercase tracking-[0.1em] text-[#c6b397] sm:text-xs"
                  >
                    Сбор гостей
                  </span>

                  <Paragraph
                    paragraphRef={(el) => {
                      if (el && !timeInfoTwoRefs.current.includes(el)) {
                        timeInfoTwoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text mt-3 max-w-[150px] text-xs leading-relaxed text-white/45"
                  >
                    Встречаемся и готовимся к празднику
                  </Paragraph>
                </div>

                {/* Событие 2 */}

                <div className="relative flex flex-col items-center text-center">
                  <div
                    ref={(el) => {
                      if (el && !eventIconRefs.current.includes(el)) {
                        eventIconRefs.current.push(el);
                      }
                    }}
                    className="flex h-[68px] w-full items-start justify-center"
                  >
                    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 text-[#c6b397]" aria-hidden="true">
                      <path
                        d="M17 10C12 16 13 21 20 25C21 32 18 37 18 39M31 10C36 16 35 21 28 25C27 32 30 37 30 39M20 25H28M18 39H30"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 11L20 14M33 11L28 14"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <circle cx="17" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="31" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </div>

                  <span
                    ref={(el) => {
                      if (el && !circleTimeRefs.current.includes(el)) {
                        circleTimeRefs.current.push(el);
                      }
                    }}
                    className="mb-3 h-2 w-2 rounded-full border border-[#c6b397] bg-[#171511]"
                  />

                  <span
                    ref={(el) => {
                      if (el && !timeRefs.current.includes(el)) {
                        timeRefs.current.push(el);
                      }
                    }}
                    className="ibm-heading text-2xl sm:text-[28px]"
                  >
                    17:00
                  </span>

                  <span
                    ref={(el) => {
                      if (el && !timeInfoRefs.current.includes(el)) {
                        timeInfoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text-medium mt-2 text-[10px] uppercase tracking-[0.1em] text-[#c6b397] sm:text-xs"
                  >
                    Церемония
                  </span>

                  <Paragraph
                    paragraphRef={(el) => {
                      if (el && !timeInfoTwoRefs.current.includes(el)) {
                        timeInfoTwoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text mt-3 max-w-[150px] text-xs leading-relaxed text-white/45"
                  >
                    Самый важный момент нашей истории
                  </Paragraph>
                </div>

                {/* Событие 3 */}

                <div className="relative flex flex-col items-center text-center">
                  <div
                    ref={(el) => {
                      if (el && !eventIconRefs.current.includes(el)) {
                        eventIconRefs.current.push(el);
                      }
                    }}
                    className="flex h-[68px] w-full items-start justify-center"
                  >
                    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 text-[#c6b397]" aria-hidden="true">
                      <path
                        d="M16 11V21M20 11V21M16 17H20M18 21V39M29 11V21C29 24 32 24 32 21V11M29 39V21"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span
                    ref={(el) => {
                      if (el && !circleTimeRefs.current.includes(el)) {
                        circleTimeRefs.current.push(el);
                      }
                    }}
                    className="mb-3 h-2 w-2 rounded-full border border-[#c6b397] bg-[#171511]"
                  />

                  <span
                    ref={(el) => {
                      if (el && !timeRefs.current.includes(el)) {
                        timeRefs.current.push(el);
                      }
                    }}
                    className="ibm-heading text-2xl sm:text-[28px]"
                  >
                    18:30
                  </span>

                  <span
                    ref={(el) => {
                      if (el && !timeInfoRefs.current.includes(el)) {
                        timeInfoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text-medium mt-2 text-[10px] uppercase tracking-[0.1em] text-[#c6b397] sm:text-xs"
                  >
                    Банкет
                  </span>

                  <Paragraph
                    paragraphRef={(el) => {
                      if (el && !timeInfoTwoRefs.current.includes(el)) {
                        timeInfoTwoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text mt-3 max-w-[150px] text-xs leading-relaxed text-white/45"
                  >
                    Ужин, музыка и тёплые поздравления
                  </Paragraph>
                </div>

                {/* Событие 4 */}

                <div className="relative flex flex-col items-center text-center">
                  <div
                    ref={(el) => {
                      if (el && !eventIconRefs.current.includes(el)) {
                        eventIconRefs.current.push(el);
                      }
                    }}
                    className="flex h-[68px] w-full items-start justify-center"
                  >
                    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 text-[#c6b397]" aria-hidden="true">
                      <path
                        d="M12 36H36M14 36V29H34V36M17 29V23H31V29M20 23V17H28V23M22 17V12H26V17M17 32H21M27 32H31"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M20 12H28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>

                  <span
                    ref={(el) => {
                      if (el && !circleTimeRefs.current.includes(el)) {
                        circleTimeRefs.current.push(el);
                      }
                    }}
                    className="mb-3 h-2 w-2 rounded-full border border-[#c6b397] bg-[#171511]"
                  />

                  <span
                    ref={(el) => {
                      if (el && !timeRefs.current.includes(el)) {
                        timeRefs.current.push(el);
                      }
                    }}
                    className="ibm-heading text-2xl sm:text-[28px]"
                  >
                    20:00
                  </span>

                  <span
                    ref={(el) => {
                      if (el && !timeInfoRefs.current.includes(el)) {
                        timeInfoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text-medium mt-2 text-[10px] uppercase tracking-[0.1em] text-[#c6b397] sm:text-xs"
                  >
                    Торт
                  </span>

                  <Paragraph
                    paragraphRef={(el) => {
                      if (el && !timeInfoTwoRefs.current.includes(el)) {
                        timeInfoTwoRefs.current.push(el);
                      }
                    }}
                    className="ibm-text mt-3 max-w-[150px] text-xs leading-relaxed text-white/45"
                  >
                    Сладкий финал праздничного вечера
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* Декоративная фотография */}

            <div ref={ourDayRef} className="relative min-h-[270px] overflow-hidden sm:min-h-[360px] lg:min-h-[390px]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#171511] via-transparent to-[#171511]/50" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 [text-shadow:1px_2px_5px_rgba(0,0,0,0.9)]">
                <Paragraph className="ibm-text-medium text-[9px] uppercase tracking-[0.2em] text-white">
                  Наш особенный день
                </Paragraph>

                <Heading level="h3" className="ibm-title mt-3 max-w-[320px] text-2xl leading-tight sm:text-3xl">
                  Пусть этот вечер будет наполнен счастьем
                </Heading>

                <Paragraph className="ibm-text mt-3 max-w-[320px] text-xs leading-[1.8] text-white/55">
                  Мы подготовили для вас незабываемый праздник, чтобы разделить самые важные моменты вместе.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-6 sm:mt-16 sm:pt-8">
            <span className="h-px w-10 bg-[#a99579]/60" />

            <Paragraph className="ibm-heading-italic text-xl text-[#c6b397] sm:text-2xl">С любовью ждём вас</Paragraph>

            <span className="h-px flex-1 bg-[#a99579]/30" />
          </div>
        </div>
        <LuxeWavesSections value="light" />
      </Container>
    </Section>
  );
}
