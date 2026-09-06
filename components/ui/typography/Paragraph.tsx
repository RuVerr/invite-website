import React from "react";
interface ParagraphProp {
  children: string;
  className?: string;
}
export default function Paragraph({ children, className = "" }: ParagraphProp) {
  return <p className={className }>{children}</p>;
}
