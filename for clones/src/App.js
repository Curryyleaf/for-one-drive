import React from "react"

import Navbar from "./navbar";

import Hero from "./Hero"

import Cards from "./Card"

// import Star from"./Star 1.png"



import data from "./data"


import './App.css';

function App() {
  

const cards = data.map(function(datas) {
  return(
    <Cards
      key={datas.id} 
      // img={datas.coverImg}
      // rating={datas.stats.rating}
      // reviewCount={datas.stats.reviewCount}
      // location={datas.location}
      // title={datas.tittle}
      // price={datas.price}
      {...datas}
      
    
    />
  )
  


})
  



  return (
    
      <>

  <Navbar/>
  <Hero/>
  {cards}
</>

  
  );
}

export default App;
