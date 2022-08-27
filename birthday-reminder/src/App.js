import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [people, setPeople] = useState(data); 


const checkClick = () => setPeople([]);

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {/* passing the props down to the list component */}
      <List people={people}/>
      <button onClick={checkClick}>Clear All</button>
    </section>
  </main>;
}

export default App;
