interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todoPreview: TodoPreview = { title: "first todo", completed: false };
