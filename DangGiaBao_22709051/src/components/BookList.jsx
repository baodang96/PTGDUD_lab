import { useState } from "react";
import BookItem from "./BookItem";

const initialBooks = [
  { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 },
  { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
  { id: 3, title: "Tuổi trẻ đáng giá bao nhiêu", author: "Rosie Nguyễn", genre: "Phát triển", year: 2016 }
];

function BookList() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "", year: "" });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newBook.title || !newBook.author || !newBook.genre || !newBook.year) return;

    const newEntry = {
      ...newBook,
      id: Date.now(),
      year: parseInt(newBook.year)
    };
    setBooks([...books, newEntry]);
    setNewBook({ title: "", author: "", genre: "", year: "" });
  };

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <h2>Thêm sách mới</h2>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          name="title"
          placeholder="Tên sách"
          value={newBook.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Tác giả"
          value={newBook.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Thể loại"
          value={newBook.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Năm"
          value={newBook.year}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Thêm sách</button>
      </div>

      <h2>Danh sách sách</h2>
      {books.map(book => (
        <BookItem key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default BookList;
