import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setcolor] = useState("");
  // to hanlde input from form
  const [error, setError] = useState(false);
  // to control error by flicking
  const [list, setList] = useState(new Values('#f15025'));
  //  to handle default value

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello ");
    //  to check if its working
    try {
      let colors = new Values(color).all(10);
      // .all() here is custum method of values class
      // here the colors variable is getting a set of colors , becuse we have color as argumnet and color is being changed by setcolor below onchange inside input html elemnt  so actually color has the value entered by the user as onchange is tied to a arrow function and that arrow function uses events object to grab the user value(e.target.value) and setcolor to that value
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="conatiner">
        <h3>Color generator </h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={() => setcolor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="color">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
        })}
      </section>
    </>
  );
}

export default App;
