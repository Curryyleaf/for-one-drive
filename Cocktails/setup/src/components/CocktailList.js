import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{loading , cocktail}=useGlobalContext();
if(loading){
  return<Loading/>
}
if(Cocktail.list < 1){
  return(
    <h2 className='section-title'>No match </h2>
  )
}
  return (
 <section className='section'>
  <h1 className='section-title'>
    cockTails
  </h1>
  <div className='cocktails-center'>
    {cocktail.map((item)=>{
     return <Cocktail key={item.id}{...item} />
    })}
  </div>
 </section>
  )
}

export default CocktailList
