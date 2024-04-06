import React from "react";
import { useState , useContext } from "react";
const AppContext = useContext()


const AppProvider=(Childern)=>{
const[isSubMenuOpen , setIsSubMenuOpen ] = (false );
const [isSideBarOpen , setIsSideBarOpen ] = ( false ) ;

const openSubMenu=()=>{
  setIsSubMenuOpen(true)
}
const closeSubMenu=()=>{
  setIsSubMenuOpen(false)
}

const openSideBar=()=>{
  setIsSideBarOpen(true)
}
const closeSideBar=()=>{
  setIsSideBarOpen(false)
}


    return(
        <AppContext.Provider >
{ Childern}
        </AppContext.Provider>
    )
}

const useGlobalContext= ()=>{
    useContext(AppContext);

}

export {AppProvider , useGlobalContext }