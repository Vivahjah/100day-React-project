import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control"><label htmlFor="name">search your favorite cocktails</label>
        <input type="text" id='name' ref={searchValue} onChange={searchCocktails} /></div>
      </form>
    </section>
  )
}

export default SearchForm
