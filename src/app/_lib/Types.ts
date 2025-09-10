export type Todo = {
  id?: string;
  name?: string;
  complete?: boolean;
  editToggle?: boolean;
};

export type Todostore = {
  todos: Todo[];
  addTodo: ({ name }: { name: string }) => void;
  deleteTodo: ({ id }: { id: string | undefined }) => void;
  completeTodo: ({ id }: { id: string | undefined }) => void;
  editToggle: ({ id }: { id: string | undefined }) => void;
};
