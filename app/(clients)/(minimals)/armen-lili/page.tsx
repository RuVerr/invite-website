import MinimalTemplate from "@/template/minimal/MinimalTemplate";
import React from "react";

import { data } from "./data";

export default function page() {
  return (
    <>
      <MinimalTemplate data={data} />
    </>
  );
}
