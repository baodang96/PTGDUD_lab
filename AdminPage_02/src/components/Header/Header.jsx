import "./Header.css";
import avatar from "/assets/Avatar.png";
import bell from "/assets/Bell1.png"
import question from "/assets/Question1.png"
import search from "/assets/Search.png"

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <img src={search} alt="help" className="search-icon"/>
          <input type="text" placeholder="Search..." />
        </div>
        <img src={bell} alt="notification" className="icon"/>
        <img src={question} alt="help" className="icon"/>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </div>
  );
}

export default Header;
