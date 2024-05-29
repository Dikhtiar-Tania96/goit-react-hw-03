import Contact from "./components/Contact/Contact";

function App() {

  const submit =(data)=>{
    console.log(data)
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Contact submit={submit}/>
    </div>

  )
  
}



export default App
