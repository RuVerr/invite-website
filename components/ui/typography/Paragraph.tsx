import React, { RefObject } from "react";
interface ParagraphProp {
  children: React.ReactNode;
  className?: string;
  paragraphRef?: React.Ref<HTMLParagraphElement | null>;
}
export default function Paragraph({ children, paragraphRef, className = "" }: ParagraphProp) {
  return (
    <p ref={paragraphRef} className={className}>
      {children}
    </p>
  );
}
