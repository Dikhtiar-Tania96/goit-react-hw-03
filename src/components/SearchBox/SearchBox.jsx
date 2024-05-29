import { useId, useState } from "react"

const SearchBox = () => {

const uniqInputId = useId();

const [value, setValue] = useState('qwerty');

const handleChange = (e) => {
    setValue(e.target.value)
}

  return (
   <form>
        <label htmlFor={uniqInputId}>Find contacts by name</label>
        <br/>
        <input id={uniqInputId} type='text' value={value} onChange={handleChange}/>
    </form>
  )
}

export default SearchBox