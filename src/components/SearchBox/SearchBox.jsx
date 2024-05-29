import { useId} from "react"

const SearchBox = ({value, onChange, name}) => {

const uniqInputId = useId();

  return (
   <form>
        <label htmlFor={uniqInputId}>Find contacts by name</label>
        <br/>
        <input id={uniqInputId} type='text' value={value} onChange={onChange} name={name}/>
    </form>
  )
}

export default SearchBox