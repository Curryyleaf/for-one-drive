import React from "react";

import Mainpic from "./hero.png"

 export default function Hero (){

    return(
        <section className="main-content">
           <img src={Mainpic} alt="pics" className="hero-img" />

           <h1>Online Experiences</h1>
<br />
           <p className="herotext">Join unique  interactive activities led by one of a kind hosts- all without leabing your warm home</p>
       </section>

    )
}


