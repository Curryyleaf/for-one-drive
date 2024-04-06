import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const storageList= ()=>{
  let list =localStorage.getItem("list ");
  if (list) {
    return( list = JSON.parse (localStorage.getItem("list")))
  }
}

function App (){
  const[name , setname ]= useState("");
  const [list , setlist ] = useState([]);
  const [isEditing , setIsEditing]= useState(false );
  const [ editID , setEditID] = useState(null );
  const [ alert , setAlert] = useState({ show : false , type:" " , msg:""});

  const handleSubmit= ()=>{
    if(!name ){
   showAlert(true , "danger " , " invalid")

    } else if(name && isEditing) {
      {list.map((item)=>{
        if (item.id === editID){
          return {...item , title:name }
        }
        return item ;
      }
      )
    setAlert(true , "sucess " , " item edited ")
  setEditID( null);
  setIsEditing(false )
b }
     
    } else {
      const newItem = {id: new Date().getTime().toString , title: name }
      setlist(...list , newItem)
      showAlert(true , "sucess " , " item added")
    }
  }
 const showAlert = ( show=false , type="" , msg="")=>{
  setAlert(show ,type ,msg)

 }

 const deleteItem=(id)=>{
  const newlist= list.filter((item ) => item.id !== id );
  setlist(newlist);
  showAlert(true , "sucess " , " item deleted ")
 }

  const editItem= (id)=>{
    const editedlist=List.find((item)=> item.id == id );
    setname(editedlist);
    setEditID(id);
    setIsEditing(true );

  }

  useEffect(()=>{
    localStorage.setItem("list " , JSON.stringify(list))
  }[list])
  return(
    <section className="list-container">
      <form action="" className="form-area">
        {alert.show && <Alert{...alert}/>}
        <p>grocery bud </p>
        <input type="text"
         className="input-area"
         value={name }
         onChange={setname((e)=> e.target.value )} />

         <button className="btn-submit" onClick={handleSubmit} type="submit">{isEditing? "edit " : " submit"}</button>
      </form>
      {name && (
        <div className="list-area">
          {<List items = {list} editItem={editItem} deleteItem={deleteItem}/>}
          <button className="btn-clear">
            Clear all 
          </button>
        </div>
      )}
    </section>
  )


}


// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem("list")));
//   } else {
//     return [];
//   }
// };
// function App() {
//   const [name, setName] = useState("");
//   const [list, setList] = useState(getLocalStorage());
//   const [isEditing, setIsEditing] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       showAlert(true, "danger", "please enter value");
//     } else if (name && isEditing) {
//       setList(
//         list.map((item) => {
//           if (item.id === editID) {
//             return { ...item, title: name };
//           }
//           return item;
//         })
//       );
//       setName("");
//       setEditID(null);
//       setIsEditing(false);
//       showAlert(true, "success", "value changed");
//     } else {
//       showAlert(true, "success", "item added to the list");
//       const newItem = { id: new Date().getTime().toString(), title: name };

//       setList([...list, newItem]);
//       setName("");
//     }
//   };

//   const showAlert = (show = false, type = "", msg = "") => {
//     setAlert({ show, type, msg });
//   };
//   const clearList = () => {
//     showAlert(true, "danger", "empty list");
//     setList([]);
//   };
//   const removeItem = (id) => {
//     showAlert(true, "danger", "item removed");
//     setList(list.filter((item) => item.id !== id));
//   };
//   const editItem = (id) => {
//     const specificItem = list.find((item) => item.id === id);
//     setIsEditing(true);
//     setEditID(id);
//     setName(specificItem.title);
//   };
//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(list));
//   }, [list]);
//   return (
//     <section className="section-center">
//       <form className="grocery-form" onSubmit={handleSubmit}>
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

//         <h3>grocery bud</h3>
//         <div className="form-control">
//           <input
//             type="text"
//             className="grocery"
//             placeholder="e.g. eggs"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type="submit" className="submit-btn">
//             {isEditing ? "edit" : "submit"}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className="grocery-container">
//           <List items={list} removeItem={removeItem} editItem={editItem} />
//           <button className="clear-btn" onClick={clearList}>
//             clear items
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

export default App;
