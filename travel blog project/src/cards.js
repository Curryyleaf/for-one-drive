import React from 'react';

function Cards(props) {
  return (
    <>
      <div className="box">
      <img src={props.img} alt="" className="main-pic" />

      <div className="content">
          <img src={props.secondImg} alt="" className="icon" />
           <span className="country">{props.country}</span> <span className="grey">View on google maps</span>
           <h1 className="title">{props.title}</h1> <h3 className="date">{props.date}</h3>
           <p className="writing">{props.writing}</p>
          </div>
      </div>
    </>
  );
}

export default Cards;
