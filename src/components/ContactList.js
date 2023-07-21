import React from "react";
import ContactCard from './ContactCard'


function ContactList(props){

function renderContactList(){

   return ( props.contacts.map((item,key)=>{
        return  <ContactCard item={item} key={key} deleteContact={props.deleteContact} /> 
    })
   )
}


return (
    <div className="ui celled list">{renderContactList()}</div>
)


}

export default ContactList;