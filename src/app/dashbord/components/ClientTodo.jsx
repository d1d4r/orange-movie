"use client";
import React from "react";
import Todo from "./Todo";

export default function ClientTodo({ testProps }) {
  return (
    <div>
      <p>{testProps}</p>
      <Todo passProps="from client" />
    </div>
  );
}
