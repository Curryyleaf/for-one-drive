import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return(()=>{
      clearInterval(slider);
    })
  }, [index]);


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>
        </h2>
      </div>
      <div className="section-center">
        {/* this div has position of relative and also it has overflow hidden  */}
        {people.map((person, personIndex) => {
          // the map method automatically has three parameter 1(the array or object that is being processed , 2(index of that elemnt) and 3( array itself);
          const { id, image, name, title, quote } = person;
          // remeber that in react while destrucing the naming should be exact same key inside the object so that it automatically gets assigned correctly

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
            // so the code runs on the if either is true , if person.index === index-1  or if index ===0 and personIndex ===peoplel.length-1 ?
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              {/* this has the position absolute  */}
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
