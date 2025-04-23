import { useState, useEffect } from "react";
import BookItem from "./BookItem";

const initialBooks = [
  { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 },
  { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "Văn học", year: 1997 },
  { id: 3, title: "Tuổi trẻ đáng giá bao nhiêu", author: "Rosie Nguyễn", genre: "Tâm lý", year: 2016 },
  { id: 4, title: "Lược sử thời gian", author: "Stephen Hawking", genre: "Khoa học", year: 1988 }
];

function BookList() {
  const [books, setBooks] = useState(() => {
    // Lấy dữ liệu từ localStorage khi khởi tạo
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  });
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "", year: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  useEffect(() => {
    // Lưu danh sách sách vào localStorage mỗi khi thay đổi
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

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

  const filteredBooks = books.filter(book => {
    const matchTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = filterGenre === "" || book.genre === filterGenre;
    return matchTitle && matchGenre;
  });

  const genres = Array.from(new Set(books.map(book => book.genre)));

  return (
    <div>
      <h2>Thêm sách mới</h2>
      <div style={{ marginBottom: "15px" }}>
        <input type="text" name="title" placeholder="Tên sách" value={newBook.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="Tác giả" value={newBook.author} onChange={handleChange} />
        <input type="text" name="genre" placeholder="Thể loại" value={newBook.genre} onChange={handleChange} />
        <input type="number" name="year" placeholder="Năm" value={newBook.year} onChange={handleChange} />
        <button onClick={handleAdd}>Thêm sách</button>
      </div>

      <h2>Tìm kiếm sách</h2>
      <input
        type="text"
        placeholder="Tìm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>Lọc sách</h2>
      <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)} style={{ marginLeft: "10px" }}>
        <option value="">Tất cả thể loại</option>
        {genres.map((g, idx) => (
          <option key={idx} value={g}>{g}</option>
        ))}
      </select>

      <h2>Danh sách sách</h2>
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} onDelete={handleDelete} />
      ))}

      <h3>Tổng số sách: {filteredBooks.length}</h3>
    </div>
  );
}

export default BookList;
