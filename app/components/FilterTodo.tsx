export default function FilterTodo({ setFilter }: any) {
    return (
        <div>
            {/* 特别注意不要忘记在onclick事件中不要直接执行了 */}
            <button onClick={() =>setFilter('all')}>全部</button>
            <button onClick={() =>setFilter('uncompleted')}>待办</button>
            <button onClick={() =>setFilter('completed')}>已办</button>
        </div>
    )
}