import { useState } from "react"

export default function ToDo({ addItem }) {
    const [input, setInput] = useState("")

    const handleAdd = () => {
        addItem(input);
        setInput(""); // Reset input sau khi thêm
    };

    return (
        <>
            <input
                type="text"
                placeholder="To do..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </>
    );
}