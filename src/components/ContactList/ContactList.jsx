import Contact from "./Contact/Contact";


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
};

export default ContactList;