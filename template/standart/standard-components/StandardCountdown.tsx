"use client";
import Container from "@/components/ui/container/Container";
import Section from "@/components/ui/section/Section";
import React, { useEffect, useState } from "react";
import { StandardCountdownTypes } from "../StandardTypes";

interface StandardCountdownProp {
  data: StandardCountdownTypes;
}

export default function StandardCountdown({ data }: StandardCountdownProp) {
  const targetDate = new Date(`${data.CountDownYear}-${data.CountDownMonth}-${data.CountDownDay}T18:12:00`).getTime();
  const [countDown, setCountdown] = useState(targetDate - Date.now());
  const mounted = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = targetDate - Date.now();

      setCountdown(Math.max(difference, 0));
      if (difference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const second = Math.floor(countDown / 1000) % 60;
  const minutes = Math.floor(countDown / (1000 * 60)) % 60;
  const hours = Math.floor(countDown / (1000 * 60 * 60)) % 24;
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  return (
    <Section>
      <Container>
        <div className="py-16 md:py-24">
          <span
            className="
              ibm-text
              block
              text-[clamp(7px,0.65vw,8px)]
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >
            03
          </span>
          <div className="mb-12 md:mb-16">
            <h2 className="text-[32px] font-light tracking-[0.12em] md:text-[44px]">Հետհաշվարկ</h2>

            <p className="mt-4 text-[12px] tracking-[0.35em] md:text-[14px]">Շուտով</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            <div className="flex flex-col items-center">
              <span className="text-[42px] font-light leading-none md:text-[56px]">
                {mounted ? String(days).padStart(2, "0") : "00"}
              </span>

              <span className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]">Օրերը</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[42px] font-light leading-none md:text-[56px]">
                {mounted ? String(hours).padStart(2, "0") : "00"}
              </span>

              <span className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]">Ժամ</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[42px] font-light leading-none md:text-[56px]">
                {mounted ? String(minutes).padStart(2, "0") : "00"}
              </span>

              <span className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]">Րոպե</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[42px] font-light leading-none md:text-[56px]">
                {mounted ? String(second).padStart(2, "0") : "00"}
              </span>

              <span className="mt-6 text-[11px] tracking-[0.3em] md:text-[13px]">Վայրկյան</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
