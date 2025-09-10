"use client";

import { useTheme } from "./Theme-Provider";
import { Todo } from "../_lib/Types";
import useTodoStore from "../Store/store";
import { useState } from "react";

export default function TodoComponent({ todos }: { todos: Todo }) {
  const { mode, bg, text } = useTheme();
  const { deleteTodo, completeTodo, editToggle, addTodo } = useTodoStore();
  const [todo, setTodo] = useState<string>("");

  function handleEdite() {
    addTodo({ name: todo });
    setTodo("");
    editToggle({ id: todos.id });
    deleteTodo({ id: todos.id });
  }

  return (
    <div
      style={{
        background: mode === "dark" ? bg.light : bg.dark,
        color: text.paragraph[mode].text_color,
      }}
      className={`w-[260px] h-[50px] flex items-center rounded-lg p-3 m-3 `}
    >
      {todos.editToggle ? (
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodo(e.target.value);
          }}
          value={todo}
          name="name"
          type="text"
          placeholder="Edit Todo"
          className="w-5/6 outline-none"
        ></input>
      ) : (
        <h1
          className={`w-3/4 flex items-center  ${
            todos.complete ? "line-through" : ""
          }  `}
        >
          {todos.name}
        </h1>
      )}
      {todos.editToggle ? (
        <button
          onClick={handleEdite}
          className="bg-teal-600 cursor-pointer h-full px-2 m-1 rounded hover:bg-teal-200 hover:text-slate-900 text-sm"
        >
          Add
        </button>
      ) : (
        <div className="flex">
          <button
            onClick={() => deleteTodo({ id: todos.id })}
            className="m-1 cursor-pointe"
          >
            ❌
          </button>
          <button
            disabled={todos.complete}
            onClick={() => completeTodo({ id: todos.id })}
            className="m-1 cursor-pointer"
          >
            ✔
          </button>
          <button
            disabled={todos.complete}
            className="m-1 cursor-pointer rotate-45"
            onClick={() => editToggle({ id: todos.id })}
          >
            ✏
          </button>
        </div>
      )}
    </div>
  );
}
