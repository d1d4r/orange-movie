"use client";
import { CircleX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function DashbordPage({ searchParams }) {
  // const params = useSearchParams();
  // const person = params.get("person");
  // const res = JSON.parse(person);
  // const { name } = params;
  return (
    <div>
      <button onClick={() => dialog.showModal()}>open drawer</button>
      <dialog
        id="dialog"
        className="w-2/3 h-screen mx-0 backdrop:bg-white backdrop:w-1/2 backdrop:animate-left-to-right animate-left-to-right "
      >
        <form method="dialog">
          <button className="m-2 ">
            <CircleX />
          </button>
        </form>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </dialog>
    </div>
  );
}
