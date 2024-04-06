import React, { useState, useContext, Children } from "react";
import sublinks from "./data";

const AppContext = useContext();

const AppProvider = (Children)=>{
const [isSubmenuOpen , setIsSubmenuOpen]=useState(true);
const [isSidebarOpen , setIsSidebarOpen]= useState(false );
const [ location, setLocation ] =useState({});
const [page , setPage ] =useState( { page , links:[]})


const openSubmenu=( text , coordinates )=>{
  const Page = sublinks.find((links)=> links===text);
  setIsSubmenuOpen(true);
  setPage( Page  );
  setLocation(coordinates);

  

}

const closeSubmenu=()=>{
  setIsSubmenuOpen(false)
}

const openSidebar=()=>{
setIsSidebarOpen(true);

}

const closeSidebar=()=>{
setIsSidebarOpen(false)
}
  <AppContext.provider Value={
{
  isSubmenuOpen ,
  isSidebarOpen ,
  openSidebar,
  closeSidebar,
  openSubmenu,
  closeSubmenu, 
  location,

}
  } >
    {Children}
  </AppContext.provider>
}



const useGlobalContext=()=>{
  useContext(AppContext);
}

export{useGlobalContext , AppContext ,  AppProvider}