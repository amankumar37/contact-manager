import React from "react";
import user from "./user.png"

function ContactCard(props){


     function delete_contact(){
        props.deleteContact(props.item.id);
     }
    return (
        <div className="item" style={{display:"flex",justifyContent:"space-between", width:"100%",height:"50%" }} >
         <img className="ui avatar image" src={user} alt="image not found" />
            <div className="content">
                  <div className="header">{props.item.name}</div>
           
                  <div>{props.item.email}  </div>
            </div>
            <i style={{color:"red"}} className="trash alternate outline icon" onClick={delete_contact}></i>

        </div>
       
)
}


export default ContactCard;