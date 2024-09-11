export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  export interface AddTodoProps {
    addTodo: (txt: string) => void;
  }

  export interface TodoListProps {
    todoList: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }

  export interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }