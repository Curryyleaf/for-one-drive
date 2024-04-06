
// // Correct export in Header.js
// import React from "react";
// import Logo from "../src/React-icon.svg.png"
// // import "./Header.css";




// function Header() {
//   // Component code

//   return(
//     <header>
//     <nav className="nav">
//         <img src={Logo}  className="my-img" alt=" logo" ></img>

//         <ul className="nav-items">
//             <li>Pricing</li>
//             <li>About us </li>
//             <li> contact us</li>
//         </ul>
//     </nav>
// </header>

// )
// }

// export default Header;

import React from "react";
import logo from "../src/React-icon.svg.png"

export default function Header (){
   return(
    <nav >
       <img src={ logo} alt="logo" />
       <h3>React Facts</h3>
       <h4>React Course-Project 1</h4>
    </nav>
    

   )
}