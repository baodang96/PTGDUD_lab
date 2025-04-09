import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo CustomerContext
const CustomerContext = createContext();

// Tạo hook để sử dụng context
export const useCustomers = () => {
  return useContext(CustomerContext);
};

// Tạo CustomerProvider để bao bọc các component cần dữ liệu
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ tệp JSON (Giả sử bạn có tệp 'customers.json')
    const fetchData = async () => {
      try {
        const response = await fetch('/customers.json');  // Đảm bảo đường dẫn chính xác
        const data = await response.json();
        setCustomers(data.customers);   
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CustomerContext.Provider value={{ customers, loading, error }}>
      {children}
    </CustomerContext.Provider>
  );
};
