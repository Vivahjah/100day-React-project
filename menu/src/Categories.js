import React from 'react';

const Categories = ( {filteredItems, categories} ) => {
  console.log(categories)
  return (
    <div className="btn-container">
    {categories.map((category, index) => {
        return <button type='button' key={index} onClick={() => filteredItems(category)} className="filter-btn">{category}</button>
        
      })}
      
    </div>
   
  )
};

export default Categories;
