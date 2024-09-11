import { TodoItemProps } from "./types";

export default function TodoItem({todo, toggleTodo, deleteTodo}: TodoItemProps) {

    return (
        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={(e) => {
                console.log(e.target)
                toggleTodo(todo.id);
            }} 
            />
            {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>删除</button>
        </li>
    )
}
