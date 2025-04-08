import "./CustomerTable.css";
import avt1 from '../../assets/Avatar.png'
import avt2 from '../../assets/Avatar1.png'
import avt3 from '../../assets/Avatar2.png'
import avt4 from '../../assets/Avatar3.png'
import avt5 from '../../assets/Avatar4.png'
import avt6 from '../../assets/Avatar5.png'
import avt7 from '../../assets/Avatar6.png'

const statusStyles = {
  New: "status new",
  "In-progress": "status in-progress",
  Completed: "status completed",
};

const CustomerTable = () => {
    const customers = [
        {
          name: "Elizabeth Lee",
          avatar: avt1,
          company: "AvatarSystems",
          orderValue: 359,
          orderDate: "10/07/2023",
          status: "New",
        },
        {
          name: "Carlos Garcia",
          avatar: avt2,
          company: "SmoozeShift",
          orderValue: 747,
          orderDate: "24/07/2023",
          status: "New",
        },
        {
          name: "Elizabeth Bailey",
          avatar: avt3,
          company: "Prime Time Telecom",
          orderValue: 564,
          orderDate: "08/08/2023",
          status: "In-progress",
        },
        {
          name: "Ryan Brown",
          avatar: avt4,
          company: "OmniTech Corporation",
          orderValue: 541,
          orderDate: "31/08/2023",
          status: "In-progress",
        },
        {
          name: "Ryan Young",
          avatar: avt5,
          company: "DataStream Inc.",
          orderValue: 769,
          orderDate: "01/05/2023",
          status: "Completed",
        },
        {
          name: "Hailey Adams",
          avatar: avt6,
          company: "FlowRush",
          orderValue: 922,
          orderDate: "10/06/2023",
          status: "Completed",
        },
        {
          name: "Sophia Turner",
          avatar: avt7,
          company: "NextGen Solutions",
          orderValue: 630,
          orderDate: "12/09/2023",
          status: "New",
        }
      ];

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
