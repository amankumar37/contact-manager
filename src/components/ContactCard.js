import React, { useState } from "react";
import user from "./user.png"


function ContactCard(props) {
   const [hovered, setHovered] = useState(false);

   function delete_contact() {
      props.deleteContact(props.item.id);
   }
   return (
      <div className="item"
         style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            height: "fit-content"
         }}
      >
         <div className="user-content"
            style={{
               display: "flex", width: "75%", height: "max(4rem,12vh)",
            }}
         >
            <img className="ui avatar tiny image " src={user} alt="img"
               style={{marginLeft:"0" ,maxWidth: "70%", maxHeight: "70%", objectFit: "contain" }}
            />
            <div className="content"
               style={{ display: "flex", flexDirection: "column", marginInline: "1rem", marginBlock: "1rem" }}
            >
               <div className="header"
                  style={{
                     marginBottom: "0.5rem", fontSize: "1.3rem",
                     fontFamily: "sans-serif", textTransform: "uppercase"
                  }}
               >{props.item.name}
               </div>
               <div className="userEmail"
                  style={{ fontSize: "1rem" }}
               >{props.item.email}  </div>
            </div>
         </div>

         <div className="dlt-icon"
            style={{
               display: "flex", width: "10%", height: "max(4rem,12vh)"
               , justifyContent: "flex-end", alignItems: "center"
            }}
         >
            <i className="trash alternate outline big  icon" style={{ maxWidth: "90%", height: "auto",
             marginRight: "0rem",cursor:"pointer",color: hovered ? "#2185d0" : "red" }} 
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}

             onClick={delete_contact}></i>
         </div>

      </div>

   )
}


export default ContactCard;