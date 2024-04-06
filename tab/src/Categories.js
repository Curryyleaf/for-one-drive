import React from 'react';

const Categories = ({filterItems , categories}) => {
  return (
    <div className="btn-container">
      {categories.map((category , index) => {
        return(
          <button 
          className="filter-btn"
          type='button'
          key={index}
          onClick={() => filterItems(category)}
          // 
// Absolutely correct! Let me clarify. In React, when you pass a function as a prop, it retains the ability to accept parameters when called
          >
          {category}
          </button>
        )
      } )}
    
    </div>
  )
};

export default Categories;
