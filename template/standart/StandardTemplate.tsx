import Section from "@/components/ui/section/Section";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import React from "react";
import StandardHero from "./standard-components/StandardHero";
import { StandardTypesData } from "./StandardTypesData";
import StandardOurStory from "./standard-components/StandardOurStory";
import TheDay from "./standard-components/StandardTheDay";

interface StandardTemplateProp {
  data: StandardTypesData;
}

export default function StandardTemplate({ data }: StandardTemplateProp) {
  return (
    <main className="relative overflow-hidden">
      <StandardHero data={data.hero} />
      <StandardOurStory data={data.ourStory} />
      <TheDay data={data.theDay} />
    </main>
  );
}
