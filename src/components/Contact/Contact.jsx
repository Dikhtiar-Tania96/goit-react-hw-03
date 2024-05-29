import { useId } from "react";

const Contact = ({ submit }) => {
  const uniqUserId = useId();
  const uniqNumberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      user: e.target.elements.user.value,
      phone: e.target.elements.phone.value,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={uniqUserId}>Name</label>
        <br/>
        <input id={uniqUserId} type="text" name="user" />
      </div>
      <div>
        <label htmlFor={uniqNumberId}>Number</label>
        <br/>
        <input id={uniqNumberId} type="text" name="phone" />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Contact;
