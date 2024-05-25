"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Pathname({ children }) {
  const pathname = usePathname();
    return <>
        {children}
    </>;
}
