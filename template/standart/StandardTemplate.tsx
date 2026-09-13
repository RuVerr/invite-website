import Section from "@/components/ui/section/Section";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import React from "react";
import StandardHero from "./standard-components/StandardHero";
import { StandardTypesData } from "./StandardTypesData";

interface StandardTemplateProp {
  data: StandardTypesData;
}

export default function StandardTemplate({ data }: StandardTemplateProp) {
  return (
    <main className="relative overflow-hidden">
      <StandardHero data={data.hero} />
    </main>
  );
}
