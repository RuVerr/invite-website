import React from "react";

import dynamic from "next/dynamic";

const LuxeTemplate = dynamic(() => import("@/template/luxe/LuxeTemplate"));

export default function page() {
  return <LuxeTemplate />;
}
