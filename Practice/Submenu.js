import React from "react";
import { useContext , useState , useGlobalContext } from "react";

 const Submenu =()=>{
    const {isSubMenuOpen}= useGlobalContext();

    return(
        <aside className={isSubMenuOpen? "show Submenu " : " Submenu"}>
            

        </aside>
    )
 }