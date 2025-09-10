"use client";

import InputField from "./Components/InputField";
import { useTheme } from "./Components/Theme-Provider";
import ThemeButton from "./Components/ThemeButton";
import TodoComponent from "./Components/TodoComponent";
import useTodoStore from "./Store/store";

export default function Home() {
  const { bg, mode, text } = useTheme();
  const { todos } = useTodoStore();

  return (
    <main
      style={{ background: bg[mode] }}
      className="h-screen w-screen flex flex-col items-center p-10"
    >
      <div className="h-[600px] w-[600px]">
        <div className="flex m-2 justify-between">
          <h1
            className="text-center"
            style={{
              fontSize: text.heading[mode].text_size,
              color: text.heading[mode].text_color,
            }}
          >
            Context_API and Zustand
          </h1>
          <ThemeButton />
        </div>
        <InputField />
        <div className="flex flex-wrap p-3 bg-white/30 rounded-lg">
          {todos?.map((todo) => {
            return <TodoComponent key={todo.id} todos={todo} />;
          })}
        </div>
      </div>
    </main>
  );
}
