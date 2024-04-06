import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../final/src/context";

const navbar = () => {
  const { openSubmenu, openSidebar, closeSubmenu } = useGlobalContext();
  const displayMenu = (e) => {
    const page = e.target.content;
    const tempbtn = e.target.getBoundingClientRect();
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;

    openSubmenu(page, { center, bottom });

    const handleSubmit = () => {
      if (e.target.classList.conatins("links-btn")) {
        closeSubmenu();
      }
    };
  };
  return (
    <nav className="nav" onMouseOver={handleSubmit}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" onMouseOver={displayMenu}>
            company
          </li>
          <li className="link-btn" onMouseOver={displayMenu}>
            departs
          </li>
          <li className="link-btn" onMouseOver={displayMenu}>
            contact
          </li>
          <li className="link-btn" onMouseOver={displayMenu}>
            developers
          </li>
        </ul>
        <button className="btn signin-btn">sign in </button>
      </div>
    </nav>
  );
};

export default navbar;
