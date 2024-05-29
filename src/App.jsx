import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [value, setValue] = useState("qwerty");

const submit = (data) => {
  console.log('data', data)
}

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={submit}/>
      <SearchBox value={value} onChange={setValue} />
    </div>
  );
}

export default App;
