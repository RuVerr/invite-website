import React from "react";

interface SectionProp {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProp) {
  return <section className={`relative overflow-hidden ${className}`}>{children}</section>;
}
