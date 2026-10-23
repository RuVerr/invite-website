import React from "react";

interface SectionProp {
  children: React.ReactNode;
  className?: string;
  sectionRef?: React.Ref<HTMLElement | null>;
  sectionId?: string;
}

export default function Section({ children, className, sectionRef, sectionId }: SectionProp) {
  return (
    <section id={sectionId} ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
