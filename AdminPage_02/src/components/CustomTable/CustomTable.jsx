import "./CustomTable.css";
import { useCustomers } from "../../contexts/CustomerContext";

const statusStyles = {
  New: "status new",
  "In-progress": "status in-progress",
  Completed: "status completed",
};

const CustomerTable = () => {

  const { customers } = useCustomers();

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th></th>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Order Value</th>
            <th>Order Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="customer-name">
                <img src={customer.avatar} alt="avatar" />
                <span>{customer.name}</span>
              </td>
              <td>{customer.company}</td>
              <td>${customer.orderValue}</td>
              <td>{customer.orderDate}</td>
              <td>
                <span className={statusStyles[customer.status]}>
                  {customer.status}
                </span>
              </td>
              <td>
                <span className="edit-icon">✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>«</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
        <span>11</span>
        <span>»</span>
      </div>
      <p className="results-count">{customers.length} results</p>
    </div>
  );
};

export default CustomerTable;
