import  React from "react"

import Logo from "./reactjs-icon.png"

export default function navbar (){
    return(
        <>
        <div className="navbar">

            
            <img src={Logo} alt="icon" className="logo" />
            <h3 className="title">ReactFacts</h3>

            <h3 className="side-title">React course - project 1 </h3>
        </div>
        
        </>
    )
}