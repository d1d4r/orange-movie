import React from "react";
import Todo from "./Todo";

export default function ServerTodo({ testProps }) {
  return (
    <div>
      <p>{testProps}</p>
      <Todo passProps="from server" />
    </div>
  );
}
