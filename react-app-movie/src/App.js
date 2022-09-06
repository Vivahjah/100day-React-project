import React, {useState, useEffect} from 'react'
import Movie from './components/Movie';
import './App.css'


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect( () => {
   fetch(APIURL).then(res => res.json()).then(data => setMovies(data.results));
    console.log(movies);
}, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {

      fetch(SEARCHAPI + searchTerm).then(res => res.json()).then(data => setMovies(data.results));
    }

    setSearchTerm('');
    

  }

  return (
    <>
    <header>
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} type="search" className='search' placeholder='search...' onChange={(e) => setSearchTerm(e.target.value)}  />

    </form>
    </header>

    <div className='movie-container'>
      {movies.map((movie) => {
        return <div>
          <Movie key={movie.id} {...movie} />
        </div>
      })}
    </div>
    </>
    
  );
}

export default App;
