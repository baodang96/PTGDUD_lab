import React, { useState } from "react";
import BookItem from "./BookItem";

const initialBooks = [
    { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
    { id: 3, title: "Lập trình C cơ bản", author: "Nguyễn Văn A", genre: "Giáo trình", year: 2010 }
];

function BookList() {
    const [books, setBooks] = useState(initialBooks);

    const handleDelete = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div className="book-list">
            <h1>Danh sách sách</h1>
            {books.map(book => (
                <BookItem key={book.id} book={book} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default BookList;
