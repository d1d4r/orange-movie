'use client'
import React from "react";
import { createPortal } from "react-dom";
import FavButton from "./movies/FavButton";

const favWatchEl = document.getElementById('fav-watch');

export default function PortalButton() {
    //   return createPortal(<FavButton />, favWatchEl);
   
    return <div>{JSON.stringify(favWatchEl) }</div>
}
