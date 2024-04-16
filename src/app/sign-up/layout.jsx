import React from "react";

export default function LayoutAuth({ children, modal }) {
  return (
    <>
      <p>layout</p>
      {modal}
      {children}
    </>
  );
}
