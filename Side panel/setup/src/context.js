import React, { useState, useContext } from "react";



const AppContext = React.createContext();

const AppProvider =({childern})=>{

  const[ismodalOpen , setisModelopen]= useState(false);
  const[isSidebarOpen , setisSidebaropen] = useState(false);

  const openSidebar =()=>{
    setisSidebaropen(true);
    
  }
  const closeSidebar =()=>{
    setisSidebaropen(false);

  }
  const openModal =()=>{
    setisSidebaropen(true);

  }
  const closeModal =()=>{
    setisSidebaropen(false);

  }

 return(
  <AppContext 
  value={{
    ismodalOpen,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    openModal,
    closeModal
  }}>
    {childern}
  </AppContext>
 )
}


export { AppContext, AppProvider };
