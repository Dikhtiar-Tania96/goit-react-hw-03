import { useId, useState } from "react";

const Contact = () => {
  const uniqUserId = useId();
  const uniqNumberId = useId();

  const [state, setState] = useState({
    name : 'a',
    phone: '123',
  });

  const handleSubmit = (e) => {
    e.preventDefault()
  }

const handleChangeName = (e) => {
    // setState({
    //     ...state,
    //     name: e.target.value
    // })
    console.log('e.target.name', e.target.name)
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
