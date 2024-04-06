import React from "react"

// import Star from"./Star 1.png"

// import  Swimpic from "./swim.png"


export default function Cards(props){


    let badgeText
    if(props.openSpots === 0){
        badgeText="SOLD OUT "

    }else if(props.online === "online"){
        badgeText="online"
    }
  

    // let badgeText
    // if(props.openSpots === 0){
    //     badgeText="SOLD OUT "

    // }else if(props.online === "online"){
    //     badgeText="online"
    // }
  
    // return(

      
       

    //  <div className="Cards">
    //         {badgeText && <div className="card--badge">{badgeText}</div>}
            

    //         <img src={props.datas.img} alt="" className="cards-img" />
        
    //         <div className="cards-stats">
    //             <img  src={props.datas.staricon} alt="" className="star" /> <span>{props.datas.rating}</span> <span className="grey">(6).{props.datas.location}</span>
                
    //         </div>



    //         <p>{ props.datas.title}</p> <p> <span className="bold">{props.datas.price}</span>/Person</p>

    //     </div>

    // )

    return(

      
       

        <div className="Cards">
               {badgeText && <div className="card--badge">{badgeText}</div>}
               
   
               <img src={props.img} alt="" className="cards-img" />
           
               <div className="cards-stats">
                   <img  src={props.staricon} alt="" className="star" /> <span>{props.rating}</span> <span className="grey">(6).{props.location}</span>
                   
               </div>
   
   
   
               <p>{ props.title}</p> <p> <span className="bold">{props.price}</span>/Person</p>
   
           </div>
    )
}


