import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({ title,info }) => {

  const [showMore, setShowMore] = useState(true);


  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowMore(!showMore)} className="btn">{!showMore? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
        {!showMore &&  <p>{info}</p>}
    </article>
  );
};

export default Question;
