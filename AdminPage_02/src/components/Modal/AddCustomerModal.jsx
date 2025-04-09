import "./Modal.css";
import { useState } from "react";

const AddCustomerModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "/assets/Avatar.png", // bạn có thể cho chọn ảnh nếu muốn
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Add failed");

      onClose();
      window.location.reload(); // hoặc refetch data nếu dùng react-query/SWR
      alert("Add new customer successful")
    } catch (err) {
      alert("Failed to add customer");
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Customer</h2>
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
          Order Date:
          <input
            name="orderDate"
            type="text"
            placeholder="dd/mm/yyyy"
            value={formData.orderDate}
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

export default AddCustomerModal;
