import axios from "axios";
import React from "react";

export default async function Todo({passProps}) {
  const res = await axios.get('https://dummyjson.com/todos');

  return (
    <div>
      <p>{passProps }</p>
      <ul>
        {res.data.todos.map((todo) => {
          return <li key={todo.id}>{JSON.stringify(todo)}</li>;
        })}
      </ul>
    </div>
  );
}
