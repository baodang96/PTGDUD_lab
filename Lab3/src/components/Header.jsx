import React from "react";
import { Search, Bookmark } from "lucide-react";
import "./Header.css";
import logo from '../img/logo.png'
import user_icon from '../img/user-icon.png'
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Chefify Logo" />
      </div>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="search-input"
        />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        {/* <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a> */}
        <ul>
            <Menu></Menu>
        </ul>
      </nav>

      {/* Recipe Box & Avatar */}
      <div className="right-section">
        <button className="recipe-box">
          <Bookmark size={18} className="bookmark-icon" />
          Your Recipe Box
        </button>
        <img
          src={user_icon}
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
    </header>
  );
};

export default Header;
