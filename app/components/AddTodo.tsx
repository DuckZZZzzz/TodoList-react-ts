import { useState } from "react"
import { AddTodoProps } from "./types";



export default function AddTodo({ addTodo }: AddTodoProps) {
    const [txt, setTxt] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        if(txt.trim() === '') return alert('请输入内容！')
        addTodo(txt);
        setTxt('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={txt}
            onChange={e => setTxt(e.target.value)} 
            />
            <button>新增事项</button>
        </form>
    )
}

