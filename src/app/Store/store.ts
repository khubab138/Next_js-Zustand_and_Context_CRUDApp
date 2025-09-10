import { create } from "zustand";
import { Todo, Todostore } from "../_lib/Types";

const useTodoStore = create<Todostore>()((set) => ({
  todos: [
    { id: "1", name: "add zustand", complete: false, editToggle: false },
    { id: "2", name: "add to git", complete: false, editToggle: false },
  ],
  addTodo: ({ name }) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), name, complete: false, editToggle: false },
      ],
    })),
  deleteTodo: ({ id }) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  completeTodo: ({ id }) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      ),
    })),
  editToggle: ({ id }) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, editToggle: !todo.editToggle } : todo
      ),
    })),
}));

export default useTodoStore;
