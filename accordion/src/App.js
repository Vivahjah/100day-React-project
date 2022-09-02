import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions, setQuestions] = useState(data);

  return <main>
    <div className="container">
      <h3>questions and answers about Login</h3>
      <section className="info">
        {
          questions.map((question) => {
            // it maps thru the questions , returns a SINGLEQUESTION component and passing its props
           return <SingleQuestion key={question.id} {...question} /> //questions have props Id, name , Info
          })
        }
      </section>
    </div>
  </main>;
}

export default App;
