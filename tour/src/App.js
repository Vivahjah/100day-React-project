import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function App() {

const [loading, setloading] = useState(true);
const [tours, setTours] = useState([]);

const removeTour = (id) => {
  //return all the tours except the one the tour id == id
  const newTour = tours.filter((tour) => tour.id != id);
  setTours(newTour);
}

const url = 'https://course-api.com/react-tours-project'

//fetching the tour data
const fetchTours = async() => {
  setloading(true);       
  try {
  
    const data = await fetch(url).then(data => data.json());
    setloading(false)
    setTours(data)
    
  } catch (error) {
    setloading(false);
    console.log(error);
    
  }
}
useEffect(() => {
  fetchTours();
  
},[]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>

    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className='btn' onClick={fetchTours} >refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
