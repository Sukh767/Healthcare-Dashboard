import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__search">
        <span className="header__search-icon">🔍</span>
        <input
          type="text"
          className="header__search-input"
          placeholder="Search"
        />
        <button className="header__search-notification">🔔</button>
      </div>

      <div className="header__actions">
        <div className="header__profile">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User Avatar"
            className="header__avatar"
          />
          <span className="header__username">Alex</span>
        </div>
        <button className="header__add-btn">＋</button>
      </div>
    </header>
  );
};

export default Header;
