import React from "react";


import { FaEdit, FaTrash } from "react-icons/fa";

const List =({items  , editItem , deleteItem})=>{
    return(
<div className="list">
    {items.map((item)=>{
        const{id , title } = item;
        <div className="list-element" key={id}>
           <p>{title }</p>

           <div className="btn-container">
            <button className="btn-edit" onClick={editItem}><FaEdit/></button>
            <button className="btn-delete" onClick={deleteItem}><FaTrash/></button>
           </div>
        </div>

    })}
</div>
    )
}

// const List = ({ items, removeItem, editItem }) => {
//   return (
//     <div className="grocery-list">
//       {items.map((item) => {
//         const { id, title } = item;
//         return (
//           <article className="grocery-item" key={id}>
//             <p className="title">{title}</p>
//             <div className="btn-container">
//               <button
//                 type="button"
//                 className="edit-btn"
//                 onClick={() => editItem(id)}
//               >
//                 <FaEdit />
//               </button>
//               <button
//                 type="button"
//                 className="delete-btn"
//                 onClick={() => removeItem(id)}
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

export default List;
