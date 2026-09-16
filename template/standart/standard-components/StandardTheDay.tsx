import Image from "next/image";
import React from "react";
import { StandardTheDayTypes } from "../StandardTypes";

interface TheDayProp {
  data: StandardTheDayTypes;
}

export default function TheDay({ data }: TheDayProp) {
  return (
    <section className="relative overflow-hidden bg-[#111] py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/the-day-bg.jpg')"
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs tracking-[0.4em] text-white/60">02</span>

            <div className="h-px w-14 bg-white/40" />
          </div>

          <h2 className="text-5xl font-light uppercase tracking-[0.12em]">The Day</h2>

          <p className="mt-5 text-sm uppercase tracking-[0.35em] text-white/70">Важные моменты нашего дня</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/40 md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {data.theDayData.map((item, itemIndex) => (
              <div key={itemIndex} className="relative flex flex-col items-center text-center">
                <div className=" relative top-3.5 h-3 w-3 rounded-full bg-amber-50 max-md:hidden" />
                <div className="relative top-[25px] mb-8 flex items-center justify-center">
                  <Image
                    src={item.theDayIcons}
                    alt={item.theDayHeadings}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-light md:text-3xl">{item.theDayTime}</h3>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] md:text-sm">{item.theDayHeadings}</p>

                <p className="mt-5 text-base text-white/80 md:text-lg">{item.theDayLocationsOrInfo}</p>

                <p className="text-base text-white/80 md:text-lg">{item.theDayCityOrInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
