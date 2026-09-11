import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Paragraph from "@/components/ui/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import MinimalHero from "./minimal-components/MinimalHero";
import { MinimalDataTypes } from "./MinimalTypesData";
import MinimalOurStory from "./minimal-components/MinimalOurStory";
import MinimalDetails from "./minimal-components/MinimalDetails";
import Footer from "@/components/ui/footer/Footer";

interface MinimalTemplateProp {
  data: MinimalDataTypes;
}
export default function MinimalTemplate({ data }: MinimalTemplateProp) {
  return (
    <main className="min-w-0 overflow-x-clip bg-[#f9f4f1]">
      <div className="minimal_content">
        <MinimalHero data={data.hero} />
        <MinimalOurStory data={data.ourStory} />
        <MinimalDetails data={data.details} />
      </div>
      <Footer data={data.footer}/>
    </main>
  );
}
