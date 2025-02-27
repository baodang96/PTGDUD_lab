
export default function ToDoList({ list }) {
    if (!Array.isArray(list)) {
        return <p>No items available</p>; // Hoặc xử lý theo ý bạn
    }

    return (
        <>
            <br />
            {list.map((item, index) => (
                <>
                <span key={index}>{item}</span>
                <button>delete</button>
                <br/>
                </>
            ))}
        </>
    );
}