import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks , setShowLinks]= useState(false);
  const linksContainerRef= useRef(null);
  // links-container has the css of overflow hidden and transition 
  const linksRef =useRef(null);
  // show_conatiner has height of 15 rem 

   const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height 
    if(showLinks){
      linksContainerRef.current.style.height =`${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height=0;
    }
  } ,[showLinks])
  return (
    <nav className="nav-center">
      <div className="navheader">
        <img src={logo} alt="" />
        <button className="nag-toggle" onClick={toggleLinks}>
          {" "}
          <FaBars />
        </button>
      </div>
      <div className="link-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {/* <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Contacts
          </li>
          <li>
            <a href="#"></a>Products
          </li> */}
          {links.map((link)=>{
            const{id , url ,text } =link;
            
            return(
              <li key={id}> <a href={url}></a></li>
            )
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {/* <li>
          <a href="https://www.teitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.teitter.com">
            <FaTwitter />
          </a>
          <li>
            <a href="https://www.teitter.com">
              <FaTwitter />
            </a>
          </li>
        </li> */}
        {social.map((link)=>{
          const{id , url , icon}=link;
          return(
            <li key={id}>{icon}</li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navbar
