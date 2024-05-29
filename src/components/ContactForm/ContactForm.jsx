import { useId, useState } from "react";
const initialValues = {
    name : '',
    phone: '',
};

const Contact = ({submit}) => {
  const uniqUserId = useId();
  const uniqNumberId = useId();

  const [state, setState] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(state) 
    setState(initialValues)
  }

const handleChangeName = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={uniqUserId}>Name</label>
        <br />
        <input id={uniqUserId} type="text" name="name" value={state.name} onChange={handleChangeName} />
      </div>
      <div>
        <label htmlFor={uniqNumberId}>Number</label>
        <br />
        <input id={uniqNumberId} type="text" name="phone" value={state.phone} onChange={handleChangeName}/>
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Contact;
