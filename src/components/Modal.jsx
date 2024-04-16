import React from "react";
import { CircleX } from "lucide-react";
import { getTrailerMovie } from "@/data/api/movies";

export default async function Modal({ id }) {
  const key = await getTrailerMovie(id);
  //console.log("render modal");
  return (
    <dialog
      id="modal"
      className="overflow-hidden size-fit backdrop:bg-black backdrop:opacity-5 "
    >
      <div className="flex flex-col w-full h-full">
        <div className="self-end modal-action">
          <form method="dialog">
            <button className="m-2 ">
              <CircleX />
            </button>
          </form>
        </div>
        <iframe
          
          src={`https://www.youtube.com/embed/${key}`}
          title={"trailae"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </dialog>
  );
}
