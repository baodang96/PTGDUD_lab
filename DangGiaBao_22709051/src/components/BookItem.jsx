function BookItem({ book, onDelete }) {
    return (
      <div style={{ 
        border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "6px" 
      }}>
        <p><strong>Tên:</strong> {book.title}</p>
        <p><strong>Tác giả:</strong> {book.author}</p>
        <p><strong>Thể loại:</strong> {book.genre}</p>
        <p><strong>Năm:</strong> {book.year}</p>
        <button onClick={() => onDelete(book.id)}>Xoá</button>
      </div>
    );
  }
  
  export default BookItem;
  