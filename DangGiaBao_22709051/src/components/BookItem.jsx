import React from "react";

function BookItem({ book, onDelete }) {
    return (
        <div className="book-list">
            <div style={{ marginBottom: "10px", border: "1px solid #ddd", padding: "10px" }}>
                <h3>{book.title}</h3>
                <p><strong>Tác giả:</strong> {book.author}</p>
                <p><strong>Thể loại:</strong> {book.genre}</p>
                <p><strong>Năm:</strong> {book.year}</p>
                <button onClick={() => onDelete(book.id)}>Xoá</button>
            </div>
        </div>
    );
}

export default BookItem;
