import React from "react";

interface ContainerProp {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProp) {
  return <div className=" max-w-[1200px] px-[10px] mx-auto ">{children}</div>;
}
