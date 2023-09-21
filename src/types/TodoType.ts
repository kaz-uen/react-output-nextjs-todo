export type TodoItemType = {
  id: number;
  title?: string;
  content?: string;
};

export type TodoStateType = {
  todoItemsData: TodoItemType[];
  amount: number;
  searchKeyword: string;
};
