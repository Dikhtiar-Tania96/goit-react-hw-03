import { useId } from "react"

const SearchBox = () => {

    const uniqInputId = useId();

  return (
   <form>
        <label htmlFor={uniqInputId}>Find contacts by name</label>
        <br/>
        <input id={uniqInputId} type='text' name='userName'/>
    </form>
  )
}

export default SearchBox