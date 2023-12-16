interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return {
    ...todo,
    ...fieldsToUpdate,
  };
}

const todo1: Todo = { title: "my todo", description: "awesome todo" };

const todo2: Todo = updateTodo(todo1, { description: "This is awesome todo" });

console.log("todo2", todo2)