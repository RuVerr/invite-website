import LuxeWavesSections from "./LuxeWavesSections";
import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";
import Paragraph from "@/components/ui/typography/Paragraph";
import Heading from "@/components/ui/typography/Heading";

export default function LuxeFAQ() {
  return (
    <Section sectionId="faq" className="relative isolate pb-[100px] overflow-hidden bg-[#171511] text-[#eee7dc]">
      <Container>
        <div className="mx-auto grid max-w-[1600px] h-[1050px] grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Фотография банкетного стола — заглушка */}

          <div className="relative min-h-[300px] overflow-hidden bg-[#3c3023] sm:min-h-[420px] lg:min-h-[580px]">
            {/* Фон */}

            <div className="absolute inset-0 bg-[linear-gradient(145deg,#96816a_0%,#594633_45%,#211b14_100%)]" />

            {/* Свет свечей */}

            <div className="absolute left-[15%] top-[20%] h-28 w-28 rounded-full bg-[#efc994]/20 blur-3xl sm:h-40 sm:w-40" />

            <div className="absolute right-[15%] top-[30%] h-24 w-24 rounded-full bg-[#eac995]/15 blur-3xl" />

            {/* Силуэты свечей */}

            <div className="absolute bottom-[24%] left-[18%] h-20 w-2 bg-gradient-to-r from-[#a89579] via-[#f3e5cd] to-[#a89579] sm:h-28">
              <span className="absolute -top-5 left-1/2 h-5 w-2 -translate-x-1/2 rounded-full bg-[#f6d8a4]/70 blur-[4px]" />
            </div>

            <div className="absolute bottom-[24%] left-[35%] h-28 w-2 bg-gradient-to-r from-[#a89579] via-[#f3e5cd] to-[#a89579] sm:h-40">
              <span className="absolute -top-5 left-1/2 h-5 w-2 -translate-x-1/2 rounded-full bg-[#f6d8a4]/70 blur-[4px]" />
            </div>

            <div className="absolute bottom-[24%] left-[52%] h-16 w-2 bg-gradient-to-r from-[#a89579] via-[#f3e5cd] to-[#a89579] sm:h-24">
              <span className="absolute -top-5 left-1/2 h-5 w-2 -translate-x-1/2 rounded-full bg-[#f6d8a4]/70 blur-[4px]" />
            </div>

            <div className="absolute bottom-[24%] left-[68%] h-24 w-2 bg-gradient-to-r from-[#a89579] via-[#f3e5cd] to-[#a89579] sm:h-32">
              <span className="absolute -top-5 left-1/2 h-5 w-2 -translate-x-1/2 rounded-full bg-[#f6d8a4]/70 blur-[4px]" />
            </div>

            {/* Стол */}

            <div className="absolute bottom-[18%] left-[-10%] right-[-10%] h-12 rotate-[-4deg] border-t border-[#e1c9a8]/30 bg-gradient-to-b from-[#9d8568] to-[#433628] sm:h-16" />

            {/* Цветы на столе */}

            <div className="absolute bottom-[18%] left-[10%] h-16 w-16 rounded-full bg-[#eee5d7]/30 blur-xl sm:h-24 sm:w-24" />

            <div className="absolute bottom-[20%] right-[10%] h-20 w-20 rounded-full bg-[#e0d2bf]/20 blur-xl sm:h-28 sm:w-28" />

            {/* Затемнение */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#171511]/90 via-transparent to-[#171511]/20" />

            {/* Подпись */}

            <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-10 lg:left-14">
              <span className="ibm-text-medium text-[9px] uppercase tracking-[0.25em] text-[#c6b397]">
                Важные детали
              </span>

              <Paragraph className="ibm-title mt-3 max-w-[360px] text-3xl leading-tight text-white sm:text-4xl">
                Чтобы вы могли наслаждаться каждым моментом
              </Paragraph>
            </div>
          </div>

          {/* Вопросы */}

          <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
            {/* Номер и заголовок */}

            <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#a99579]">07</span>

            <Heading
              level="h2"
              className="ibm-title mt-4 text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.035em]"
            >
              Частые вопросы
            </Heading>

            <Paragraph className="ibm-text mt-5 max-w-[360px] text-sm leading-[1.9] text-white/50">
              Здесь вы найдёте ответы на самые популярные вопросы о нашем празднике.
            </Paragraph>

            {/* Аккордеон */}

            <div className="mt-10 border-t border-white/15 sm:mt-12">
              {/* Вопрос 1 */}

              <details className="group border-b border-white/15">
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="ibm-text text-sm text-white/85 transition-colors duration-300 group-hover:text-[#d5c1a3] sm:text-[15px]">
                    Можно ли пригласить с собой детей?
                  </span>

                  <span className="ibm-text shrink-0 text-lg text-[#c6b397] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <Paragraph className="ibm-text max-w-[440px] pb-6 pr-8 text-sm leading-[1.9] text-white/50">
                  Пожалуйста, заранее сообщите нам, если планируете прийти с детьми, чтобы мы могли всё организовать.
                </Paragraph>
              </details>

              {/* Вопрос 2 */}

              <details className="group border-b border-white/15">
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="ibm-text text-sm text-white/85 transition-colors duration-300 group-hover:text-[#d5c1a3] sm:text-[15px]">
                    Как добраться до места проведения?
                  </span>

                  <span className="ibm-text shrink-0 text-lg text-[#c6b397] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <Paragraph className="ibm-text max-w-[440px] pb-6 pr-8 text-sm leading-[1.9] text-white/50">
                  Адрес площадки указан в разделе «Место проведения». Там же вы сможете открыть карту и построить
                  маршрут.
                </Paragraph>
              </details>

              {/* Вопрос 3 */}

              <details className="group border-b border-white/15">
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="ibm-text text-sm text-white/85 transition-colors duration-300 group-hover:text-[#d5c1a3] sm:text-[15px]">
                    Будет ли трансфер?
                  </span>

                  <span className="ibm-text shrink-0 text-lg text-[#c6b397] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <Paragraph className="ibm-text max-w-[440px] pb-6 pr-8 text-sm leading-[1.9] text-white/50">
                  Информация о трансфере появится здесь после уточнения организационных деталей.
                </Paragraph>
              </details>

              {/* Вопрос 4 */}

              <details className="group border-b border-white/15">
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="ibm-text text-sm text-white/85 transition-colors duration-300 group-hover:text-[#d5c1a3] sm:text-[15px]">
                    Что подарить на свадьбу?
                  </span>

                  <span className="ibm-text shrink-0 text-lg text-[#c6b397] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <Paragraph className="ibm-text max-w-[440px] pb-6 pr-8 text-sm leading-[1.9] text-white/50">
                  Самый ценный подарок для нас — ваше присутствие и разделённые вместе счастливые моменты.
                </Paragraph>
              </details>
            </div>

            {/* Нижняя подпись */}

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#a99579]/50" />

              <Paragraph className="ibm-heading-italic text-xl text-[#c6b397]">С заботой о каждом госте</Paragraph>
            </div>
          </div>
        </div>
      </Container>
      <LuxeWavesSections value="light" />
    </Section>
  );
}
