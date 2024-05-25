"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import { usePathname } from "next/navigation";

export default function ClientTodo({ testProps }) {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{testProps}</p>
      <button onClick={() => setCount(100)}>{count}</button>
      <Todo passProps="from client" pathname={pathname} />
    </div>
  );
}
