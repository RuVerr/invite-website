import React from "react";
import dynamic from "next/dynamic";
const MinimalTemplate = dynamic(() => import("@/template/minimal/MinimalTemplate"));

import { data } from "./data";

export default function page() {
  return (
    <>
      <MinimalTemplate data={data} />
    </>
  );
}
