import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h1>ADD CUSTOMER</h1>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Avatar URL:
        <input name="avatar" value={formData.avatar} onChange={handleChange} />
      </label>

      <label>
        Company:
        <input name="company" value={formData.company} onChange={handleChange} />
      </label>

      <label>
        Order Value:
        <input
          type="number"
          name="orderValue"
          value={formData.orderValue}
          onChange={handleChange}
        />
      </label>

      <label>
        Order Date:
        <input
          type="date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Completed">Completed</option>
          <option value="In-progress">In-progress</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
