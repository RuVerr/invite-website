import React from "react";

interface SectionProp {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProp) {
  return (
    <section>
      <div className=" max-w-[1200px] px-[10px] mx-auto ">{children}</div>
    </section>
  );
}
