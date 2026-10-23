import Section from "@/components/ui/section/Section";
import LuxeWavesSections from "./LuxeWavesSections";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Container from "@/components/ui/container/Container";

export default function LuxeVenue() {
  return (
    <Section sectionId="venue" className="relative overflow-hidden bg-[#eee9e1] text-[#292621]">
      <Container>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Большая фотография места */}

          <div className="relative min-h-[320px] overflow-hidden bg-[#756451] sm:min-h-[440px] lg:min-h-[620px]">
            {/* Заглушка фотографии */}
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#b8a58c_0%,#85735b_35%,#4a4032_100%)]" />

            {/* Архитектура здания */}
            <div className="absolute inset-x-[12%] bottom-0 top-[15%] border-x border-t border-[#e2d2b9]/40 bg-[#d6c4a9]/10">
              <div className="absolute inset-x-[8%] bottom-0 top-[15%] grid grid-cols-3 gap-3">
                <div className="relative overflow-hidden rounded-t-full border border-[#e5d4b9]/30 bg-gradient-to-b from-[#d9c6a8]/40 to-[#30271e]/80">
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#211a14]/50" />
                </div>

                <div className="relative overflow-hidden rounded-t-full border border-[#e5d4b9]/40 bg-gradient-to-b from-[#e5d5bb]/50 to-[#30271e]/90">
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#211a14]/60" />
                </div>

                <div className="relative overflow-hidden rounded-t-full border border-[#e5d4b9]/30 bg-gradient-to-b from-[#c9b493]/40 to-[#30271e]/80">
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#211a14]/50" />
                </div>
              </div>
            </div>

            {/* Свет */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_30%,rgba(255,235,200,0.35),transparent_55%)]" />

            {/* Передний план */}
            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#201912]/85 to-transparent" />

            {/* Подпись */}
            <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-10 lg:bottom-14 lg:left-14">
              <span className="ibm-text-medium text-[9px] uppercase tracking-[0.25em] text-white/70 sm:text-[10px]">
                Место нашей встречи
              </span>

              <Paragraph className="ibm-heading mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">Grand Hall</Paragraph>

              <Paragraph className="ibm-text-medium mt-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
                Ереван · Армения
              </Paragraph>
            </div>

            {/* Вертикальная подпись */}
            <span className="ibm-text-medium absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[0.25em] text-white/60 sm:block">
              The wedding venue
            </span>
          </div>

          {/* Информация о месте */}

          <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:px-12 lg:py-16 xl:px-16">
            <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#9b876e]">03</span>

            <Heading
              level="h2"
              className="ibm-title mt-4 max-w-[420px] text-[clamp(36px,4vw,58px)] leading-[1.05] tracking-[-0.035em]"
            >
              Место
              <br />
              проведения
            </Heading>

            <div className="mt-7 h-px w-16 bg-[#9b876e]/60" />

            <Paragraph className="ibm-text-medium mt-7 text-[10px] uppercase tracking-[0.2em] text-[#8d7b65]">
              Grand Hall Yerevan
            </Paragraph>

            <Paragraph className="ibm-text mt-4 max-w-[300px] text-sm leading-[1.9] text-[#655d53]">
              Мы выбрали особенное место, чтобы провести этот день в окружении близких людей, красивой архитектуры и
              незабываемой атмосферы.
            </Paragraph>

            {/* Адрес */}

            <div className="mt-7 flex flex-col gap-2">
              <span className="ibm-text-medium text-[9px] uppercase tracking-[0.15em] text-[#9b876e]">Адрес</span>

              <Paragraph className="ibm-text text-sm text-[#494238]">Ереван, Армения</Paragraph>
            </div>

            {/* Дата и время */}

            <div className="mt-5 flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <span className="ibm-text-medium text-[9px] uppercase tracking-[0.15em] text-[#9b876e]">Дата</span>

                <Paragraph className="ibm-text mt-2 text-sm">14 сентября 2026</Paragraph>
              </div>

              <div>
                <span className="ibm-text-medium text-[9px] uppercase tracking-[0.15em] text-[#9b876e]">Начало</span>

                <Paragraph className="ibm-text mt-2 text-sm">17:00</Paragraph>
              </div>
            </div>

            {/* Кнопка карты */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Grand+Hall+Yerevan"
              target="_blank"
              rel="noreferrer"
              className="ibm-button mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-5 rounded-full border border-[#8c7a64]/60 px-5 py-3 text-[9px] text-[#292621] transition-colors duration-300 hover:bg-[#292621] hover:text-[#f5efe6]"
            >
              Показать на карте
              <span aria-hidden="true" className="text-base">
                →
              </span>
            </a>

            {/* Декоративная арка */}

            <div className="relative ml-auto mt-12 h-[220px] w-[190px] overflow-hidden rounded-t-full border border-[#a99579]/50 bg-[#d5c5af] sm:h-[280px] sm:w-[230px] lg:mt-14">
              <div className="absolute inset-[10px] overflow-hidden rounded-t-full border border-[#f8f3eb]/70 bg-[linear-gradient(180deg,#e6d8c4_0%,#b8a48a_50%,#60513d_100%)]">
                <div className="absolute left-[15%] top-[20%] h-[70%] w-[70%] rounded-t-full border border-[#f3e8d5]/50" />

                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#3b3023]/60 to-transparent" />

                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <span className="ibm-heading-italic text-xl text-white sm:text-2xl">The venue</span>
                </div>
              </div>
            </div>

            {/* Декоративная линия */}
            <div className="absolute bottom-8 left-6 right-6 h-px bg-[#9b876e]/20 sm:left-10 sm:right-10 lg:left-12 lg:right-12 xl:left-16 xl:right-16" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
