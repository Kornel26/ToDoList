export function TodoItem({ isCompleted, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    );
}