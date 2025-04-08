import './Nav.css';
import banner from '../../assets/Group.png'; // ảnh minh họa phần dưới
import logo from '../../assets/logo.png'; // logo nếu bạn có ảnh riêng
import dashboard from '../../assets/Squaresfour2.png'
import project from '../../assets/Folder.png'
import team from '../../assets/Groups.png'
import analytic from '../../assets/Piechart.png'
import message from '../../assets/Chat.png'
import integration from '../../assets/Code.png'
import { useState } from 'react';

function Nav() {

const [activeTab, setActiveTab] = useState("Dashboard");

const menuItems = [
    { label: "Dashboard", icon: dashboard },
    { label: "Projects", icon: project },
    { label: "Teams", icon: team },
    { label: "Analytics", icon: analytic },
    { label: "Messages", icon: message },
    { label: "Integrations", icon: integration },
  ];

  return (
    <div className="nav">
      <div className="nav-top">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={activeTab === item.label ? "active" : ""}
              onClick={() => setActiveTab(item.label)}
            >
              <img src={item.icon} alt="#" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-banner">
        <img src={banner} alt="Banner" />
        <h4>V2.0 is available</h4>
        <button>Try now</button>
      </div>
    </div>
  );
}

export default Nav;
