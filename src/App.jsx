import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/Contact/Contact";

function App() {
  const [value, setValue] = useState("qwerty");

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm/> */}
      <Contact/>

      <SearchBox value={value} onChange={setValue} />
    </div>
  );
}

export default App;
