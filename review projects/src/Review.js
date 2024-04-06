import React, { useState } from 'react';
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Review = () => {
 const [index , setIndex] = useState(0);
 const {name , image , job , text } = people[index ]

 const checknumber = (number) =>{
  if(number > people.length -1){
    return 0 ;
  }
  if (number < 0 ) {
    return people.length -1
  }

  return number ;
 }



 const prevPerson = ( ) =>{
  setIndex( (index) =>{
    let newIndex = index -1 ;
    return checknumber(newIndex)
  })
}

const nextPerson = ( ) =>{
  setIndex( (index) =>{
    let newIndex = index + 1 ;
    return checknumber(newIndex)

    // !!!!!!!! if you dont return this function it wont run !!!!!!!!
 
    //  the return statement is used to end the execution of a function and specify the value that the function should return to the calling context.
  })
}
// In React functional components, the return statement is crucial for rendering UI based on conditions. Conditional rendering allows components to display different content based on certain conditions.
// example 
// function MyComponent({ isLoggedIn }) {
  // return isLoggedIn ? <AuthenticatedComponent /> : <LoginComponent />;

  const randomPerson = () =>{
    console.log(Math.random())
  }
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name } className="person-img" />
    </div>

    <span className="quote-icon">
      <FaQuoteRight/>
    </span>
    <h4 className="author">{name }</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>

    <div className="button-container">
    <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
    <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
    </div>

    <button className="random-btn" onClick={randomPerson}>Suprise me </button>
    
  </article>
};



 
  


export default Review;
