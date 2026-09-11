import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/typography/Heading";
import Link from "next/link";
import { FooterType } from "@/template/minimal/MinimalTypes";

interface FooterProp {
  data: FooterType;
}

export default function Footer({ data }: FooterProp) {
  return (
    <footer>
      <div className="relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[380px]">
        <Image src={data.footerBackgroundImage} alt="HRAVIRAT" fill quality={100} className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px]" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <Heading
            level="h2"
            className="ibm-title text-white uppercase
        text-[clamp(2.3rem,8vw,5rem)]
        tracking-[0.14em]
        [text-shadow:0_4px_18px_rgba(0,0,0,.45)]"
          >
            HRAVIRAT
          </Heading>

          <p
            className="
        ibm-text
        mt-2
        text-[11px]
        sm:text-xs
        lg:text-sm
        uppercase
        tracking-[0.22em]
        text-white/90"
          >
            Digital Invitations
          </p>

          <div
            className="
        mt-7
        flex
        flex-wrap
        items-center
        justify-center
        gap-x-5
        gap-y-3
        sm:gap-x-7
        lg:gap-x-8"
          >
            <Link
              href="https://instagram.com/hravirat"
              target="_blank"
              className="ibm-text text-xs sm:text-sm uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-70"
            >
              Instagram
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-white/60 sm:block" />

            <Link
              href="https://t.me/ruver13"
              target="_blank"
              className="ibm-text text-xs sm:text-sm uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-70"
            >
              Telegram
            </Link>

            {/* <span className="hidden h-1 w-1 rounded-full bg-white/60 sm:block" /> */}

            {/* <Link
              href="https://wa.me/..."
              target="_blank"
              className="ibm-text text-xs sm:text-sm uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-70"
            >
              WhatsApp
            </Link> */}
          </div>

          <p
            className="
        ibm-text
        mt-7
        text-[10px]
        sm:text-xs
        tracking-[0.1em]
        text-white/70"
          >
            © 2026 HRAVIRAT
          </p>
        </div>
      </div>
    </footer>
  );
}
