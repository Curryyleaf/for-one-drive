// import logo from './logo.svg';
import './App.css';
// import buisness from './buisness';


import React from 'react';

import Rabina from "./rabina.jpeg"


 



      
  
function App (){
  return(
    <div className="Big-box">
            <div className='layout'>

               <img className='profile-pic' src={Rabina} alt="rabina ko photo" />

               <div className='inside-box'>
                   <h1>Rabina Tamang</h1>
                   <h5>Front end developer</h5>
                   <h6>Samakhusi ,Kathmandu</h6>

                   <button >Email</button>
                   <button>Linkdein</button>

                   <main>
                    <h2>About </h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                    <h2>Interest</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                   </main>



                
                </div>
            <footer></footer>
              
            </div>
        </div>
  )
}

export default App;
