import React, { useEffect, useState } from "react";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"


function App(){
        const LOCAL_STROAGE_KEY="contacts";
     const [contacts,setContacts] = useState([]);
      
     const addContact=(contact)=>{
          setContacts([...contacts,contact]);
          // console.log(contact.length);
          
     };

     const deleteContact=(id)=>{
          const newContactList= contacts.filter((contact)=>{
               return contact.id!=id;
          })

          setContacts(newContactList);
     }

     useEffect(()=>{
          const retrieve = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
          if(retrieve)setContacts(retrieve);
},[])

     useEffect(()=>{
           localStorage.setItem(LOCAL_STROAGE_KEY,JSON.stringify(contacts));
     },[contacts])

     

     return (
          <div>
               <Header />
               <AddContact addContact={addContact} />
               <ContactList deleteContact={deleteContact} contacts={contacts}/>
          </div>
     );
}

export default App;

