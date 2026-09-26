import React from "react";
import { StandardDressCodeTypes } from "../StandardTypes";

interface StandardDressCodeProp {
  data: StandardDressCodeTypes;
}

export default function StandardDressCode({ data }: StandardDressCodeProp) {
  return (
    <section id="details" className="relative overflow-hidden bg-[#eee9e1] text-[#292621]">
      <div
        className="
          relative mx-auto
          flex
          min-h-[clamp(420px,70vw,560px)]
          w-full
          max-w-6xl
          flex-col
          justify-between
          px-[clamp(20px,5vw,48px)]
          py-[clamp(48px,8vw,96px)]
        "
      >
        <header className="w-full">
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
            04
          </span>

          <h2
            className="
              ibm-title
              mt-[clamp(12px,1.5vw,16px)]
              max-w-full
              text-[clamp(25px,4vw,44px)]
              uppercase
              leading-[1.05]
              tracking-[0.06em]
            "
          >
            Հագուստի գույներ
          </h2>

          <p
            className="
              ibm-text
              mt-[clamp(12px,1.5vw,16px)]
              max-w-[clamp(220px,32vw,320px)]
              text-[clamp(7px,0.7vw,9px)]
              uppercase
              leading-[1.8]
              tracking-[0.16em]
              text-black/50
            "
          >
            ՓԱՓՈՒԿ ՆԵՐԿԱՊՆԱԿ ՄԵՐ ՕՐՎԱ ՀԱՄԱՐ
          </p>
        </header>
        <div
          className="
            mt-[clamp(42px,7vw,80px)]
            flex
            w-full
            justify-center
          "
        >
          <div
            className="
              flex
              w-full
              max-w-[420px]
              items-center
              justify-between
              gap-[clamp(8px,2vw,32px)]
            "
          >
            {data.dressColors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="
                        h-[clamp(32px,4vw,48px)]
                        w-[clamp(32px,4vw,48px)]
                        rounded-full
                        border
                        border-black/10
                        bg-[#f4f0e8]
                      "
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div
          className="
            mt-[clamp(42px,7vw,80px)]
            flex
            w-full
            flex-col
            items-center
            text-center
          "
        >
          <p
            className="
              ibm-text
              w-full
              max-w-[clamp(250px,40vw,360px)]
              text-[clamp(8px,0.8vw,10px)]
              leading-[1.9]
              tracking-[0.06em]
              text-black/55
            "
          >
            Մենք ուրախ կլինենք տեսնել Ձեզ
            <br />
            այս փափուկ և տաք երանգներով
          </p>
          <div
            className="
              mt-[clamp(20px,3vw,32px)]
              h-px
              w-[clamp(40px,5vw,64px)]
              bg-black/20
            "
          />
          <p
            className="
              ibm-text
              mt-[clamp(14px,2vw,20px)]
              max-w-[90%]
              text-center
              text-[clamp(6px,0.6vw,7px)]
              uppercase
              leading-[1.7]
              tracking-[0.18em]
              text-black/35
            "
          >
            ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆՆ ԱՄԵՆԱԿԱՐևՈՐՆ Է
          </p>
        </div>
      </div>
    </section>
  );
}
