import LuxeWavesSections from "./LuxeWavesSections";

export default function LuxeFarewell() {
  return (
    <section id="farewell" className="relative overflow-hidden bg-[#eee9e1] text-[#292621]">
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:min-h-[540px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16 lg:py-24 xl:px-24">
        {/* Декоративный фон */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#c8b49a]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[30%] h-64 w-64 rounded-full bg-[#d8c9b5]/30 blur-3xl"
        />

        {/* Текстовая часть */}

        <div className="relative z-10 max-w-[460px]">
          <span className="ibm-text-medium text-xs tracking-[0.2em] text-[#9b876e]">08</span>

          <h2 className="ibm-title mt-5 text-[clamp(38px,5vw,64px)] leading-[1.05] tracking-[-0.035em]">До встречи</h2>

          <p className="ibm-text mt-7 max-w-[350px] text-sm leading-[2] text-[#655d53] sm:text-base">
            Мы с нетерпением ждём вас на нашем празднике и будем рады разделить этот особенный день вместе.
          </p>

          <p className="ibm-text mt-4 max-w-[350px] text-sm leading-[2] text-[#655d53] sm:text-base">
            Спасибо, что станете частью нашей истории. До скорой встречи!
          </p>

          {/* Подпись */}

          <div className="mt-10 sm:mt-12">
            <p className="ibm-heading-italic text-3xl text-[#9b8265] sm:text-4xl">С любовью,</p>

            <p className="ibm-heading mt-2 text-2xl tracking-wide sm:text-3xl">Арман & София</p>
          </div>

          {/* Декоративная линия */}

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-[#9b876e]/60" />

            <span className="ibm-text-medium text-[9px] uppercase tracking-[0.2em] text-[#8a7b67]">
              14 сентября 2026
            </span>
          </div>
        </div>

        {/* Фотография пары — заглушка */}

        <div className="relative mx-auto h-[380px] w-full max-w-[650px] sm:h-[480px] lg:h-[500px]">
          {/* Фоновая фотография */}

          <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(145deg,#d5c5b0_0%,#a99479_40%,#63513e_100%)]">
            {/* Свет на фоне */}

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(255,244,224,0.5),transparent_55%)]" />

            {/* Архитектурная арка */}

            <div className="absolute bottom-0 left-[13%] right-[13%] top-[8%] rounded-t-full border border-[#f4e9d7]/50 bg-[#f3e7d5]/10" />

            <div className="absolute bottom-0 left-[21%] right-[21%] top-[16%] rounded-t-full border border-[#f4e9d7]/40 bg-[#544536]/20" />

            <div className="absolute bottom-0 left-[28%] right-[28%] top-[24%] rounded-t-full bg-[linear-gradient(180deg,#c9b79d_0%,#948069_45%,#44372b_100%)]" />

            {/* Силуэты цветов */}

            <div className="absolute right-[8%] top-[20%] h-24 w-24 rounded-full bg-[#e9dfce]/30 blur-2xl sm:h-36 sm:w-36" />

            <div className="absolute bottom-[20%] left-[5%] h-28 w-28 rounded-full bg-[#d9c8b1]/30 blur-2xl sm:h-40 sm:w-40" />

            {/* Затемнение снизу */}

            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#211a14]/80 to-transparent" />
          </div>

          {/* Подпись поверх фотографии */}

          <div className="absolute bottom-7 left-5 right-5 text-center sm:bottom-10">
            <p className="ibm-text-medium text-[9px] uppercase tracking-[0.25em] text-white/70">
              Наша история продолжается
            </p>

            <p className="ibm-heading-italic mt-3 text-3xl text-white sm:text-5xl">До встречи</p>
          </div>

          {/* Декоративная подпись сбоку */}

          <span className="ibm-text-medium absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[0.25em] text-white/70 sm:block">
            Forever & Always
          </span>
        </div>
      </div>

      {/* Нижняя линия */}

      <div className="mx-auto max-w-[1600px] px-6 pb-8 sm:px-10 sm:pb-10 lg:px-16 xl:px-24">
        <div className="flex items-center gap-4 border-t border-[#9b876e]/25 pt-5">
          <span className="ibm-heading text-sm tracking-[0.2em]">A / S</span>

          <span className="ibm-text-medium text-[8px] tracking-[0.15em] text-[#8a7b67]">ЕРЕВАН · АРМЕНИЯ</span>

          <span className="h-px flex-1 bg-[#9b876e]/25" />

          <a
            href="#hero"
            className="ibm-text-medium flex h-10 w-10 items-center justify-center rounded-full border border-[#9b876e]/40 text-lg transition-colors duration-300 hover:bg-[#292621] hover:text-[#eee9e1]"
            aria-label="Наверх"
          >
            ↑
          </a>
        </div>
      </div>
    </section>
  );
}
