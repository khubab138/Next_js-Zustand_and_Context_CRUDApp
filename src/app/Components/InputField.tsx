import React, { useState } from "react";
import { Todo } from "../_lib/Types";
import useTodoStore from "../Store/store";

const InputField = () => {
  const [todo, setTodo] = useState<string>("");

  const { addTodo } = useTodoStore();

  function handleClick() {
    addTodo({ name: todo });
    setTodo("");
  }

  return (
    <div className=" bg-neutral-500 flex items-center justify-evenly rounded-xl m-2">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(e.target.value);
        }}
        value={todo}
        name="name"
        type="text"
        className="h-full w-full rounded-md px-3  outline-none selection:bg-neutral-500"
        placeholder="Name a Todo"
      />
      <button
        onClick={() => handleClick()}
        className="bg-teal-600 cursor-pointer h-full px-4 rounded-r-2xl hover:bg-teal-200 hover:text-slate-900 text-xl"
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
