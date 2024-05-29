import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [value, setValue] = useState("qwerty");

const submit = (data) => {
  console.log('data', data)
}

const saveContacts = 
  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={submit}/>
      <SearchBox value={value} onChange={setValue} />
      <ContactList/>
    </div>
  );
}

export default App;
