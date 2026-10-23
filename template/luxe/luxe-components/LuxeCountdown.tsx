import LuxeWavesSections from "./LuxeWavesSections";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Paragraph from "@/components/ui/typography/Paragraph";
import Heading from "@/components/ui/typography/Heading";

export default function LuxeCountdown() {
  return (
    <Section sectionId="date" className="relative pb-[100px] overflow-hidden bg-[#eee9e1] text-[#292621]">
      {/* Лёгкий растительный декор слева */}
      <LuxeWavesSections value="dark" />
      <Container>
        <svg
          aria-hidden="true"
          viewBox="0 0 180 180"
          fill="none"
          className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 text-[#b3a18a]/30 sm:-left-8 sm:h-48 sm:w-48 lg:left-0"
        >
          <path d="M-10 170C35 140 45 95 80 20" stroke="currentColor" strokeWidth="1" />
          <path d="M28 133C5 110 8 91 12 81C33 92 40 112 28 133Z" stroke="currentColor" strokeWidth="1" />
          <path d="M48 102C45 77 58 61 72 56C78 79 67 95 48 102Z" stroke="currentColor" strokeWidth="1" />
          <path d="M64 67C41 62 32 45 33 30C55 35 67 49 64 67Z" stroke="currentColor" strokeWidth="1" />
          <path d="M17 150C40 139 61 144 68 158C47 169 29 165 17 150Z" stroke="currentColor" strokeWidth="1" />
          <circle cx="91" cy="34" r="9" stroke="currentColor" />
          <circle cx="91" cy="34" r="3" stroke="currentColor" />
          <path
            d="M91 20V14M91 48V54M77 34H71M105 34H111M81 24L76 19M101 44L106 49M101 24L106 19M81 44L76 49"
            stroke="currentColor"
          />
        </svg>

        {/* Основное содержимое */}
        <div
          className="
          relative mx-auto grid max-w-[1600px]
          grid-cols-1 items-center
          gap-8
          px-6 py-10
          sm:px-10 sm:py-12
          lg:grid-cols-[0.8fr_2fr_0.75fr]
          lg:gap-8
          lg:px-16 lg:py-12
          xl:px-20
        "
        >
          {/* Заголовок */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#9b876e]">06</span>

            <Heading level="h2" className="ibm-title mt-2 text-[clamp(24px,2.5vw,34px)] leading-tight">
              До свадьбы
              <br className="hidden lg:block" /> осталось
            </Heading>
          </div>

          {/* Таймер */}
          <div className="relative z-10 grid grid-cols-4 items-start">
            <div className="flex flex-col items-center">
              <span className="ibm-heading text-[clamp(30px,4.2vw,58px)] leading-none tracking-[-0.04em]">32</span>
              <span className="ibm-text-medium mt-3 text-[8px] uppercase tracking-[0.12em] text-[#8a7b67] sm:text-[10px]">
                Дней
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="ibm-heading text-[clamp(30px,4.2vw,58px)] leading-none tracking-[-0.04em]">14</span>
              <span className="ibm-text-medium mt-3 text-[8px] uppercase tracking-[0.12em] text-[#8a7b67] sm:text-[10px]">
                Часов
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="ibm-heading text-[clamp(30px,4.2vw,58px)] leading-none tracking-[-0.04em]">27</span>
              <span className="ibm-text-medium mt-3 text-[8px] uppercase tracking-[0.12em] text-[#8a7b67] sm:text-[10px]">
                Минут
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="ibm-heading text-[clamp(30px,4.2vw,58px)] leading-none tracking-[-0.04em]">09</span>
              <span className="ibm-text-medium mt-3 text-[8px] uppercase tracking-[0.12em] text-[#8a7b67] sm:text-[10px]">
                Секунд
              </span>
            </div>
          </div>

          {/* Дата и место */}
          <div className="relative z-10 flex items-center justify-center gap-3 border-t border-[#a99579]/30 pt-5 lg:justify-end lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 shrink-0 text-[#8a7b67]" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 3V7M17 3V7M3 10H21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path
                d="M7 14H9M12 14H14M7 17H9M12 17H14M17 14H17.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <Paragraph className="ibm-text-medium whitespace-nowrap text-[9px] uppercase tracking-[0.12em] sm:text-[10px]">
                14 сентября 2026
              </Paragraph>
              <Paragraph className="ibm-text mt-1 text-[9px] uppercase tracking-[0.08em] text-[#8a7b67]">
                Ереван, Армения
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Лёгкий растительный декор справа */}
        <svg
          aria-hidden="true"
          viewBox="0 0 180 180"
          fill="none"
          className="pointer-events-none absolute -right-16 bottom-0 h-36 w-36 rotate-[-25deg] text-[#b3a18a]/20 sm:right-0 sm:h-44 sm:w-44"
        >
          <path d="M190 175C145 145 130 100 95 25" stroke="currentColor" strokeWidth="1" />
          <path d="M151 140C174 117 170 97 167 87C145 98 139 119 151 140Z" stroke="currentColor" />
          <path d="M132 108C135 83 122 67 108 62C102 85 113 101 132 108Z" stroke="currentColor" />
          <path d="M116 73C139 68 148 51 147 36C125 41 113 55 116 73Z" stroke="currentColor" />
          <circle cx="89" cy="35" r="8" stroke="currentColor" />
          <circle cx="89" cy="35" r="3" stroke="currentColor" />
        </svg>
      </Container>
    </Section>
  );
}
