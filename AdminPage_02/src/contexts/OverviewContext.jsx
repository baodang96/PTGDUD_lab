import React, { createContext, useContext, useState, useEffect } from 'react';
import { data } from 'react-router-dom';

const OverviewContext = createContext();

// Tạo hook để sử dụng context
export const useOverview = () => {
  return useContext(OverviewContext);
};

// Tạo OverviewProvider để bao bọc các component cần dữ liệu
export const OverviewProvider = ({ children }) => {
  const [overview, setOverview] = useState([]);  // "overview" should be an object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ tệp JSON (Giả sử bạn có tệp 'overview.json')
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/overview');
        const data = await response.json();
        setOverview(data); // <-- FIX HERE
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  console.log(overview);
  

  return (
    <OverviewContext.Provider value={{ overview, loading, error }}>
      {children}
    </OverviewContext.Provider>
  );
};
