import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const sidebar = () => {
  const { isSiderbarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSiderbarOpen ? "side wrapper " : "sidebar wrapper show "
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <article key={index}>
              <h3>{page}</h3>
              <div className="sidebar-links">
                {links.map((link, index) => {
                  const { url, label, icon } = link;

                  return (
                    <a href={url} key={index}>
                      {" "}
                      {label}
                      {icon}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};
