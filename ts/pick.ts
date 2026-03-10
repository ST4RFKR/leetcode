type MyPick<T, V extends keyof T> = {
  [i in V]: T[i];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "completed">;

const todo: TodoPreview = {
  completed: false,
};
