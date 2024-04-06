import React, { useState } from 'react';

const Tour = ( {id , image , info , price , name , removeTour}) => {

const [readmore , setreadmore ] = useState(true)

  return <article className="single-tour">
   <img src={image} alt={name } />
   <footer>
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">${price}</h4>

    </div>

    <p> 
      {readmore ? info : `${info.subString( 0 , 200)}`}
      <button onClick={() => { setreadmore(!readmore)}} >   { readmore ?  ' showless': 'showmore '}   </button>
    </p>
    <button  on onClick ={ () => removeTour(id )} className="delete-btn">Not Intersted</button>

{/* The id inside the arrow function in the onClick handler represents the unique identifier of the tour associated with the specific button that was clicked. It does not represent the id of the HTML element that caused the event.  */}
{/* 
Exactly! The id in the onClick handler represents the unique identifier from the data (such as an API response or an array of objects) that corresponds to the specific element (in this case, a tour) rendered in your React component */}
{/* In this context, id represents a property (e.g., a unique identifier) associated with a tour in your data, not an HTML element's id attribute */}
   </footer>
  </article>
};

// Arrow functions cannot be used as constructors, i.e., with the new keyword.
// Arrow functions do not have their own arguments object. They inherit it from the enclosing scope.

// In a regular function (created using the function keyword), the value of this is determined by the way the function is called:

// // 
// Yes, you're on the right track. When you use the map method with an arrow function, the arrow function plays a role similar to what we've discussed regarding lexical scoping.
export default Tour;
