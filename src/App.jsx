import Contact from "./components/Contact/Contact";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {

  const submit =(data)=>{
    console.log(data)
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Contact submit={submit}/>
      <SearchBox/>
    </div>

  )
  
}



export default App
