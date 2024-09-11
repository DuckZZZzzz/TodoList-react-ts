import TodoItem from "./TodoItem";
import { TodoListProps } from "./types";


export default function TodoList({ todoList,  deleteTodo, toggleTodo }: TodoListProps) {
    return (
        <ul>
            {/* 不要忘记在html里写js要花括号{} */}
            {todoList.map(todo => 
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo} 
            />)}
        </ul>
    )
} 