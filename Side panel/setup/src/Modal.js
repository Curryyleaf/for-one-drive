import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal=()=>{
  const{closeModal , ismodalopen}=useGlobalContext();
  
  return(
    <div className={`${ismodalopen? 'show model model-overlay' :'show modal'}`}>
      <div className="modal-conatiner">
        <h3>modal conatain </h3>
        <button className="close-modal" onClick={closeModal}></button>
      </div>
    </div>
  )
}

// const Modal = () => {
//   const { closeModel, ismodalOpen } = useGlobalContext();

//   return (
//     <div className={`${ismodalOpen? 'model-overlay show-modal':'modal-overlay'}`}>
//       <div className="modal-container">
//         <h3>modal</h3>
//         <button className="close-modal" onClick={closeModel}>
//           <FaTimes/>
//         </button>
//       </div>
//     </div>
//   )
// }

export default Modal
