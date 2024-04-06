import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSeacrhTerm}=useGlobalContext();
  const searchValue=useRef('');
const searchCocktail=()=>{
  setSeacrhTerm(searchValue.current.value );

  React.useEffect(()=>{
  searchValue.current.focus();
  // our app is getting re-rendered everytime the user is entering any charcter in the input feild , so it prevents the rendering until pressed enter

  } , [])

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
}
  return (
<section className='section-search'>
  <form className='search-form' onSubmit={handleSubmit}>
    <div className="form-control">
      <label htmlFor="name" >Search your fav cocktail </label>
      <input type="text" id='name' ref={searchValue} onChange={searchCocktail} />
    </div>
  </form>
</section>
  )
}

export default SearchForm
