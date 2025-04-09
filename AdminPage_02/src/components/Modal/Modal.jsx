import "./Modal.css";
import { useState } from "react";

const Modal = ({ customer, onClose }) => {
  const [formData, setFormData] = useState({ ...customer });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/customers/${customer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Update failed");

      onClose(); // đóng modal
      alert("Customer updated successful")
      window.location.reload(); // reload lại danh sách (hoặc refetch nếu bạn dùng SWR, React Query)
    } catch (err) {
      alert("Failed to update customer");
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Customer</h2>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Company:
          <input name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Order Value:
          <input
            name="orderValue"
            type="number"
            value={formData.orderValue}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option>New</option>
            <option>In-progress</option>
            <option>Completed</option>
          </select>
        </label>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
