import React from 'react';
import Tour from './Tour';
const Tours = ({tours , removeTour}) => {
  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>

    
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        // what does {...tour} means here?
        // and does .map() method returns a new object after iterating ?

// it loos like this if you use a spread operator as props
        // <Tour key={tour.id} id={tour.id} image={tour.image} info={tour.info} price={tour.price} name={tour.name}></Tour>

        
// Yes, you're correct! The spread operator in JavaScript works by taking all the enumerable properties of an object and spreading them as separate key-value pairs. The keys of the object become the prop names, and the values become the prop values.

// In the context of React components, if the keys of the object match the expected prop names in the component, then the values are assigned to the corresponding props. If the names don't match, the props won't be assigned correctly.

      })}
    </div>
  </section>
};

export default Tours;
