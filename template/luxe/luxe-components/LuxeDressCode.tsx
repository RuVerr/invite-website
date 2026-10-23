import LuxeWavesSections from "./LuxeWavesSections";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Paragraph from "@/components/ui/typography/Paragraph";
import Heading from "@/components/ui/typography/Heading";

export default function LuxeDressCode() {
  return (
    <Section sectionId="dress-code" className="pb-[50px] relative overflow-hidden bg-[#eee9e1] text-[#292621]">
      <Container>
        <LuxeWavesSections value="dark" />
        <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[580px] lg:grid-cols-[1fr_0.8fr]">
          {/* Текстовая часть */}

          <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
            <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#9b876e]">04</span>

            <Heading
              level="h2"
              className="ibm-title mt-4 text-[clamp(36px,4.5vw,62px)] leading-[1.05] tracking-[-0.035em]"
            >
              Дресс-код
            </Heading>

            <Paragraph className="ibm-text mt-6 max-w-[390px] text-sm leading-[1.9] text-[#655d53] sm:text-base">
              Мы будем очень рады, если вы поддержите цветовую гамму нашего праздника. Мы подготовили палитру оттенков,
              которые гармонично дополнят атмосферу этого особенного дня.
            </Paragraph>

            {/* Цветовая палитра */}

            <div className="mt-12 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-5 lg:mt-16">
              {/* Ivory */}

              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[100px] overflow-hidden rounded-full border border-[#8e7d67]/50 bg-[#d9cbbb]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,#f5eee3_0%,#e5d8c7_48%,#bdae9a_100%)]" />
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                <span className="ibm-text-medium mt-3 text-[9px] uppercase tracking-[0.12em] text-[#62574a] sm:text-[10px]">
                  Слоновая кость
                </span>
              </div>

              {/* Sage */}

              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[100px] overflow-hidden rounded-full border border-[#777965]/50 bg-[#777965]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_25%,#b4b4a1_0%,#858673_45%,#505548_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_30%,rgba(255,255,255,0.12)_50%,transparent_70%)]" />
                </div>

                <span className="ibm-text-medium mt-3 text-[9px] uppercase tracking-[0.12em] text-[#62574a] sm:text-[10px]">
                  Шалфей
                </span>
              </div>

              {/* Mocha */}

              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[100px] overflow-hidden rounded-full border border-[#80644c]/50 bg-[#80644c]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,#b59a7e_0%,#92745a_45%,#554032_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_35%,rgba(255,255,255,0.1)_50%,transparent_65%)]" />
                </div>

                <span className="ibm-text-medium mt-3 text-[9px] uppercase tracking-[0.12em] text-[#62574a] sm:text-[10px]">
                  Мокко
                </span>
              </div>

              {/* Charcoal */}

              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[100px] overflow-hidden rounded-full border border-[#454440]/50 bg-[#454440]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,#77736b_0%,#4e4b45_45%,#292825_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.08)_50%,transparent_65%)]" />
                </div>

                <span className="ibm-text-medium mt-3 text-[9px] uppercase tracking-[0.12em] text-[#62574a] sm:text-[10px]">
                  Графит
                </span>
              </div>

              {/* Black */}

              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[100px] overflow-hidden rounded-full border border-[#242321]/40 bg-[#242321]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,#55514b_0%,#302e2b_45%,#141311_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_35%,rgba(255,255,255,0.06)_50%,transparent_65%)]" />
                </div>

                <span className="ibm-text-medium mt-3 text-[9px] uppercase tracking-[0.12em] text-[#62574a] sm:text-[10px]">
                  Чёрный
                </span>
              </div>
            </div>

            {/* Дополнительная информация */}

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9b876e]/60" />

              <Paragraph className="ibm-heading-italic text-xl text-[#9b8265] sm:text-2xl">
                В гармонии с нашим днём
              </Paragraph>
            </div>
          </div>

          {/* Фотография / заглушка */}

          <div className="relative min-h-[400px] overflow-hidden bg-[#b8a48c] sm:min-h-[540px] lg:min-h-full">
            {/* Основной фон */}

            <div className="absolute inset-0 bg-[linear-gradient(145deg,#d8cbbb_0%,#a9957b_40%,#524536_100%)]" />

            {/* Архитектурная арка */}

            <div className="absolute bottom-0 left-[12%] right-[12%] top-[8%] rounded-t-full border border-[#f0e4d2]/40 bg-[#e3d4c0]/10" />

            <div className="absolute bottom-0 left-[19%] right-[19%] top-[15%] rounded-t-full border border-[#f0e4d2]/30 bg-[#392e23]/15" />

            {/* Свет */}

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_25%,rgba(255,245,225,0.45),transparent_50%)]" />

            {/* Декоративные цветы */}

            <div className="absolute right-[8%] top-[12%] h-36 w-36 rounded-full bg-[#f5eee3]/20 blur-3xl sm:h-52 sm:w-52" />

            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#211a14]/70 to-transparent" />

            {/* Подпись */}

            <div className="absolute bottom-8 h-full flex flex-col justify-center left-6 right-6 sm:bottom-12 sm:left-10 sm:right-10 lg:left-12 lg:right-12 xl:left-16 xl:right-16">
              <span className="ibm-text-medium text-[9px] uppercase tracking-[0.25em] text-white/65">Dress code</span>

              <Heading
                level="h3"
                className="ibm-title mt-3 max-w-[400px] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Оттенки, которые создают атмосферу
              </Heading>

              <Paragraph className="ibm-text mt-4 max-w-[350px] text-sm leading-[1.8] text-white/65">
                Выбирайте близкие оттенки палитры и оставайтесь собой.
              </Paragraph>
            </div>

            {/* Вертикальная подпись */}

            <span className="ibm-text-medium absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.25em] text-white/70 sm:block">
              The colour palette
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
