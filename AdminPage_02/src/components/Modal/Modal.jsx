import "./Modal.css";
import { useState } from "react";

const Modal = ({ customer, onClose }) => {
  const [formData, setFormData] = useState({ ...customer });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <button >Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
