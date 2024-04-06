import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext  , useGlobalContext} from './context'

const Home = () => {
  const {openSidebar , openModel} = useGlobalContext(AppContext);

return(
  <main>
    <button className="side-toggle"onClick={openSidebar}><FaBars/></button>
    <button className='btn' onClick={openModel}>Show modal</button>
  </main>
)
  // return (
  //   <main>
  //     <button className="side-toggle" >
  //       <FaBars/>
  //     </button>
  //     <button className="btn" >
  //       Show modal 
  //     </button>
  //   </main>
  // )
}

export default Home
