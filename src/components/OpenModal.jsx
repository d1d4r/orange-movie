"use client";
import Link from "next/link";
import React from "react";

export default function OpenModal() {
  return (
    <Link href={"/sign-up"} onClick={() => signupmodal.showModal()}>
      Sign Up
    </Link>
  );
}


