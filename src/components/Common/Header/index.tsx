import React from "react";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
        <li>
          <a href="#">Sign up</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
