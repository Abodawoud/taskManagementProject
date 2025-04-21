export interface Todo {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTodo {
  title: string;
  summary: string;
  date: string;
}
