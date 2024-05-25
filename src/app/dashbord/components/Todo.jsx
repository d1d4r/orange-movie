import axios from "axios";
import React from "react";

export default async function Todo({ passProps, pathname }) {
  const { data } = await axios.get("https://dummyjson.com/todos");

  return (
    <div>
      <p>
        {passProps}:{pathname}
      </p>
      <ul>
        {data.todos.map((todo) => {
          return <li key={todo.id}>{JSON.stringify(todo)}</li>;
        })}
      </ul>
    </div>
  );
}
