import React from "react";

function BookItem({ book, onDelete }) {
  return (
    <div className="book-item">
      <div className="book-info" style={{textAlign: 'left'}}>
        <p><strong>Tên:</strong> {book.title}</p>
        <p><strong>Tác giả:</strong> {book.author}</p>
        <p><strong>Thể loại:</strong> {book.genre}</p>
        <p><strong>Năm:</strong> {book.year}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(book.id)}>Xoá</button>
    </div>
  );
}

export default BookItem;
