import React, { RefObject } from "react";

type headingType = "h1" | "h2" | "h3" | "h4";

interface HeadingProp {
  level: headingType;
  children: React.ReactNode;
  className: string;
  headingRef?: RefObject<HTMLHeadingElement | null>;
}

export default function Heading({ level: Heading, children, headingRef, className = "" }: HeadingProp) {
  return (
    <Heading ref={headingRef} className={className}>
      {children}
    </Heading>
  );
}
