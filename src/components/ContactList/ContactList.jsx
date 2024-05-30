import Contact from "./Contact/Contact";
import css from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
};

export default ContactList;