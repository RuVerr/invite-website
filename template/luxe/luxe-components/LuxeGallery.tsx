import LuxeWavesSections from "./LuxeWavesSections";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Paragraph from "@/components/ui/typography/Paragraph";
import Heading from "@/components/ui/typography/Heading";

export default function LuxeGallery() {
  return (
    <Section sectionId="gallery" className="relative overflow-hidden bg-[#171511] text-[#eee7dc]">
      <LuxeWavesSections value="light" />
      <Container>
        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-16 lg:py-28 xl:px-24">
          {/* Текстовая часть */}

          <div className="relative z-10">
            <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#a99579]">05</span>

            <Heading
              level="h2"
              className="ibm-title mt-4 text-[clamp(36px,4.5vw,62px)] leading-[1.05] tracking-[-0.035em]"
            >
              Галерея
            </Heading>

            <Paragraph className="ibm-text mt-6 max-w-[350px] text-sm leading-[1.9] text-white/55 sm:text-base">
              Здесь собраны наши любимые моменты, взгляды и кадры, которые мы хотим разделить с вами.
            </Paragraph>

            <Paragraph className="ibm-text mt-4 max-w-[350px] text-sm leading-[1.9] text-white/45">
              Маленькие детали, искренние эмоции и воспоминания, к которым хочется возвращаться снова.
            </Paragraph>

            <a
              href="#gallery-photos"
              className="
              ibm-button
              mt-8 inline-flex min-h-11 items-center justify-center gap-5
              rounded-full border border-white/40 px-5 py-3
              text-[9px] text-white
              transition-colors duration-300
              hover:bg-white hover:text-[#171511]
              sm:mt-10
            "
            >
              Смотреть фотографии
              <span aria-hidden="true" className="text-base">
                →
              </span>
            </a>

            <div className="mt-12 flex items-center gap-4 sm:mt-16">
              <span className="h-px w-10 bg-[#a99579]/60" />

              <Paragraph className="ibm-heading-italic text-xl text-[#c6b397] sm:text-2xl">Moments forever</Paragraph>
            </div>

            <span className="ibm-text-medium mt-8 block text-[9px] tracking-[0.2em] text-white/30">
              A / S — OUR STORY
            </span>
          </div>

          {/* Фотоколлаж */}
          <div
            id="gallery-photos"
            className="
            relative grid
            min-h-[460px]
            grid-cols-[1.08fr_0.92fr]
            gap-3
            sm:min-h-[600px]
            sm:gap-5
            lg:min-h-[650px] "
          >
            {/* Большая фотография слева */}

            <div className="group relative mt-8 min-h-0 overflow-hidden bg-[#766451] sm:mt-12">
              <div
                className="
        absolute inset-0
        bg-[linear-gradient(155deg,#b7a58e_0%,#8c7861_35%,#65513d_65%,#30271f_100%)]
        transition-transform duration-700
        group-hover:scale-[1.03]
      "
              />

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_20%,rgba(255,240,215,0.3),transparent_50%)]" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171511]/70 via-transparent to-transparent" />

              {/* Тонкая внутренняя рамка */}

              <div className="pointer-events-none absolute inset-3 border border-white/20 sm:inset-4" />

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-9 sm:left-7 sm:right-7">
                <span className="ibm-text-medium text-[8px] uppercase tracking-[0.22em] text-white/65 sm:text-[9px]">
                  Наша история
                </span>

                <p className="ibm-title mt-2 text-2xl text-white sm:text-4xl">Вместе</p>
              </div>

              <span className="ibm-text-medium absolute right-6 top-6 text-[9px] tracking-[0.15em] text-white/65">
                01
              </span>
            </div>

            {/* Правая композиция */}

            <div className="grid min-h-0 grid-rows-[0.9fr_1.1fr] gap-3 sm:gap-5">
              {/* Верхняя широкая фотография */}

              <div className="group relative min-h-0 overflow-hidden bg-[#a99a85]">
                <div
                  className="
          absolute inset-0
          bg-[linear-gradient(135deg,#e0d2bf_0%,#b7a28a_38%,#87715a_68%,#504132_100%)]
          transition-transform duration-700
          group-hover:scale-[1.03]
        "
                />

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,246,225,0.35),transparent_55%)]" />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#171511]/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="ibm-text-medium text-[8px] uppercase tracking-[0.18em] text-white/80 sm:text-[9px]">
                    Особенные моменты
                  </span>

                  <span className="ibm-heading-italic text-lg text-white/90 sm:text-2xl">A & S</span>
                </div>
              </div>

              {/* Две нижние фотографии */}

              <div className="grid min-h-0 grid-cols-2 gap-3 sm:gap-5">
                {/* Детали */}

                <div className="group relative min-h-0 overflow-hidden bg-[#82725e]">
                  <div
                    className="
            absolute inset-0
            bg-[linear-gradient(145deg,#d0bda3_0%,#a48b6e_40%,#725941_70%,#382c20_100%)]
            transition-transform duration-700
            group-hover:scale-[1.04]
          "
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(255,240,215,0.3),transparent_50%)]" />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#171511]/60 to-transparent" />

                  <span className="ibm-text-medium absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.12em] text-white/80 sm:bottom-5 sm:left-4 sm:text-[9px]">
                    Детали
                  </span>
                </div>

                {/* Романтический кадр */}

                <div className="group relative min-h-0 overflow-hidden bg-[#65594b]">
                  <div
                    className="
            absolute inset-0
            bg-[linear-gradient(150deg,#c8b49a_0%,#958068_38%,#5b4938_70%,#29231c_100%)]
            transition-transform duration-700
            group-hover:scale-[1.04]
          "
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_25%,rgba(255,240,215,0.25),transparent_50%)]" />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#171511]/60 to-transparent" />

                  <span className="ibm-text-medium absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.12em] text-white/80 sm:bottom-5 sm:left-4 sm:text-[9px]">
                    Воспоминания
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя декоративная линия */}

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-8 sm:px-10 sm:pb-10 lg:px-16 xl:px-24">
          <div className="flex items-center gap-4 border-t border-white/15 pt-5">
            <span className="ibm-text-medium text-[8px] tracking-[0.2em] text-white/35">14 · 09 · 2026</span>

            <span className="h-px flex-1 bg-white/15" />

            <span className="ibm-text-medium text-[8px] tracking-[0.2em] text-white/35">ЕРЕВАН</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
