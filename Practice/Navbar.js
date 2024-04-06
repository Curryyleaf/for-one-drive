import React from "react";
import { useState, useGlobalContext } from "react";

const Navbar = ()=>{
    return(
        <nav className="nav">
            <div className="nav-center">
            <img src=""  alt="Stripe" />

            <section className="Links">

            <a className="links-btn">
                Company 
            </a>
            <a  className="links-btn">
                Contacts 
            </a>
            <a  className="links-btn">
                projects
            </a>
            <a  className="links-btn">
                Developers 
            </a>
            
            </section>    
                
            </div>
        </nav>
    )
}