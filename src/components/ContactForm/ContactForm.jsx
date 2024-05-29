import { useId, useState } from "react";
import css from './ContactForm.module.css'

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
        <div className={css.formEl}>
      <div className={css.formLbl}>
        <label htmlFor={uniqUserId} className={css.formName}>Name</label>
        <br />
        <input id={uniqUserId} type="text" name="name" value={state.name} onChange={handleChangeName} />
      </div>
      <div className={css.formLbl}>
        <label htmlFor={uniqNumberId} className={css.formName}>Number</label>
        <br />
        <input id={uniqNumberId} type="text" name="phone" value={state.phone} onChange={handleChangeName}/>
      </div>
      <button type="submit" className={css.formBtn}>Add contact</button>
      </div>
    </form>
  );
};

export default Contact;
