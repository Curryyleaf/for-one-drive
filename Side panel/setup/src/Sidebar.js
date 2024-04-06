import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const sideBar =()=>{
  
  return(
 <aside className=''>
  <div className="sidebar header">
    <img src={logo} alt="code addict " className="logo" />
    <button className="close-btn">
      <FaTimes/>
    </button>
    <ul className="links">
      {links.map((link)=>{
        const{url , text , id , icon  }= link;
        return(
          <li id={id}><a href={url}>{icon}{text}</a></li>
        )
      })}
    </ul>
    <ul className='social'>
      {social.map((item)=>{
        const {icon , url  , id }= item;
        return(
          <li id={id }> <a href={url}>{icon}</a></li>
        )
      })}
    </ul>
  </div>

 </aside>
  )
}

// const Sidebar = () => {
//   const{    isSidebarOpen, closeSidebar} = useGlobalContext();
//   return (
//     <aside className={`${ isSidebarOpen?"sidebar show sidebar" :"sidebar"}`}>
//       <div className="sidebar header">
//         <img src={logo} alt="code Adict " className="logo" />
//         <button className="close-btn" onClick={closeSidebar}>
//           <FaTimes />
//         </button>
//       </div>
//       <ul className="links">
//         {links.map((link) => {
//           const { id, icon, url, text } = link;
//           return (
//             <li key={id}>
//               <a href={url}>
//                 {icon}
//                 {text}
//               </a>
//             </li>
//           );
//         })}
//       </ul>

//       <ul className="scoial">
//         {social.map((link) => {
//           const { id, icon, url, } = link;
//           return (
//             <li key={id}>
//               <a href={url}>
//                 {icon}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }

export default Sidebar
