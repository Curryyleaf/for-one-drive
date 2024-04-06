import React, { useState, useRef, useEffect, useContext } from "react";
import { useGlobalContext } from "./context";

const submenu=()=>{


    useEffect(()=>{

            const container = useContext();
            const[columns , setColumns ] = useState('col-1')
    const {
      isSubMenuOpen,
      location,
      page: { Page, links },
    } = useGlobalContext;
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}`;
    submenu.style.top = `${bottom}`; 
  if (links.length=== 3){
    setColumns('col-3');

  } else if ( links.length>3){
    setColumns('col-4')
    
  }

    } , [location] , [links ] , [page ])

    reutrn(
      <aside
        className={isSubMenuOpen ? "showSubMenu " : " subMenu "}
        ref={container}
      >
        <section>
          <h4>{Page}</h4>
          <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
              const { url, icon, label } = link;
              return (
                <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              );
            })}
          </div>
        </section>

      </aside>
    );
}
// const subMenu = ()=>{
//   const{isSubMenuOpen , location , Page:{ page , links}}= useGlobalContext();

//   const container= useRef(null);

//   useEffect(()=>{
//     const submenu = container.current;
//     const { center, bottom } = location;
//     submenu.style.left = `${center}`;
//     submenu.style.top = `${bottom}`;
//     // so these are setting position ? relative to the parent element ?
//   } , [location]) 
   

//   return (
//     <aside
//       className={isSubMenuOpen ? "show submenu" : "submenu"}
//       ref={container}
//     ></aside>
//   );
// }

//  this works by : submenu is assigned to container.current and container is our ref . this ref is assigned to our element that is displayed to the user (code is inside return () ) . so when we are giving submenu position , we are giving those positions to the container and conatiner is our ref and it is refrenced to our compoenent(element ) so therefore dynamically applying the position 