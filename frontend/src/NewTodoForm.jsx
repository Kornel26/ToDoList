import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!newItem) return;
        onSubmit(newItem);

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
                <button>Add</button>
            </div>
        </form>
    );

}