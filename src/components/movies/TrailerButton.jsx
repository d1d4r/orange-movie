'use client'
import React from "react";
import { Button } from "../ui/button";
import { Youtube } from "lucide-react";

export default function TrailerButton() {
  return (
    <Button
      variant="goust"
      className="m-auto space-x-1 text-white"
      onClick={() => modal.showModal()}
    >
      <Youtube />
      <span>trailare</span>
    </Button>
  );
}
