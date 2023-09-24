export type InputItem = {
  item: string;
  status: string
};

export interface AddTodoProps {
  addTodo: (task:InputItem) => void;
};

export type TodoListProps = {
  items: InputItem[];
  removeAllTasks: () => void;
  removeTask: (index: number) => void;
};