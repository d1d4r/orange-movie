import React from "react";
import Combobox from "../Combobox";

export default function YearsFilter() {
  const items = [
    {
      value: "next.js",
      label: "1",
    },
    {
      value: "sveltekit",
      label: "2",
    },
    {
      value: "nuxt.js",
      label: "3",
    },
    {
      value: "remix",
      label: "4",
    },
    {
      value: "astro",
      label: "5",
    },
  ];
  return <Combobox items={items} name="Years" />;
}
