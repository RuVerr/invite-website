import React from "react";
import LuxeHero from "./luxe-components/LuxeHero";
import LuxeStory from "./luxe-components/LuxeStory";
import LuxeSchedule from "./luxe-components/LuxeSchedule";
import LuxeVenue from "./luxe-components/LuxeVenue";
import LuxeDressCode from "./luxe-components/LuxeDressCode";
import LuxeGallery from "./luxe-components/LuxeGallery";
import LuxeCountdown from "./luxe-components/LuxeCountdown";
import LuxeFAQ from "./luxe-components/LuxeFAQ";
import LuxeFarewell from "./luxe-components/LuxeFarewell";
import Footer from "@/components/ui/footer/Footer";
import SmoothScroll from "@/utils/SmoothScroll/SmoothScroll";

export default function LuxeTemplate() {
  return (
    <>
      <SmoothScroll />
      <main>
        <LuxeHero />
        <LuxeStory />
        <LuxeSchedule />
        <LuxeVenue />
        <LuxeDressCode />
        <LuxeGallery />
        <LuxeCountdown />
        <LuxeFAQ />
        <LuxeFarewell />
        {/* <Footer/> */}
      </main>
    </>
  );
}
