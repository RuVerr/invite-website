import React from "react";
import dynamic from "next/dynamic";
const StandardTemplate = dynamic(() => import("@/template/standart/StandardTemplate"));
// import StandardTemplate from "@/template/standart/StandardTemplate";
import { data } from "./data";

export default function page() {
  return <StandardTemplate data={data} />;
}
