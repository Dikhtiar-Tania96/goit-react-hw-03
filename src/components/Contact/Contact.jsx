const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.user.value);
    console.log(e.target.elements.phone.value);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" />
      <label />
      <input type="text" name="phone" />
      <label />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Contact;
