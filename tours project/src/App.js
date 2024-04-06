import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
const [loading , setLoading] = useState(true);
const [tours , setTours] = useState([])

const removeTour=  (id) =>{
  const newTours = tours.filter ( (tour ) => tour.id !== id );
  // The id parameter in the removeTour function represents a unique identifier associated with a specific tour. This id is used to filter out the tour with the specified identifier from the tours array.
  // so this id represent the id of the element that needs to be removed 

  setTours(newTours)
}

const fetchTours = async () =>{
  setLoading(true)

  try {
    const response  = await  fetch(url);
    const tours = await response.json()
    setLoading(false)
    setTours(tours)
    
  
  } catch (error) {
    setLoading(false);
    console.log(error);
    
  }


}

useEffect( () =>{
  fetchTours();
} , []  )
// its is called depedencies array 
  // if it is set to [0] it runs the effect only for once 
  // if it changes compared to the last value it had it


if(loading ){
  <main>
    <Loading />
  </main>
}

if (tours.length ===0){
  return(
    <main>
      <div className="title">
        <h2>No tours left </h2>
      </div>
      <button className='btn' onClick={fetchTours}> Refresh</button>
    </main>
  )
}
  return (
    <main>
      <Tours tours = {tours} removeTour={removeTour}/>
    </main>
  )
  
}


export default App
