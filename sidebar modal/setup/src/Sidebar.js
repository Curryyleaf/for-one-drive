import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context"
const Sidebar = () => {
  const {  
     showSidebar ,
     closeSidebar} = useGlobalContext()
  return (
    <aside className={`${showSidebar? 'sidebar show-sidebar' :'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { url, id, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
  
      <ul className="social-icons">
        {social.map((link)=>{
          const{icon , id , url }= link;
          return <li key={id}>
           <a href={url}>
            {icon}
           </a>
          </li>
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
