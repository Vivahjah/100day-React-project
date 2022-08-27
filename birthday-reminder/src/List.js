import React from "react";

// destructuring the props
const List = ({ people }) => {
  console.log(people.length);

  return (
    <>
      {people.map((person) => {
        // destructuring an object
        const { id, image, name, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
