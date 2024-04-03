import React from "react";
import Combobox from "../Combobox";
import { genresList } from "@/data/api/movies";

export default async function GenraFilter() {
    const data = await genresList();
    
    console.log("🚀 ~ GenraFilter ~ data:", data);
  return (
    <Combobox
      items={data}
      name="Genra"
    />
  );
}
