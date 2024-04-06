import React from 'react';
import Navbar from './nav';
import Cards from './cards';
import Data from './data';
import './App.css';

function App() {
  const cards = Data.map((datas) => (
    <Cards key={datas.id} {...datas} />
  ));

  return (
     <div className="my-blog">
      <Navbar />
      {cards}
    
     </div>
  );
}

export default App;
