import React from "react";
import Combobox from "../Combobox";

export default function VoteAverageGTEFilter() {
  const items = [
    {
      value: "next.js",
      label: "> 3",
    },
    {
      value: "sveltekit",
      label: "> 5",
    },
    {
      value: "nuxt.js",
      label: "> 8",
    },
  ];
  return <Combobox items={items} name="Vote" />;
}
