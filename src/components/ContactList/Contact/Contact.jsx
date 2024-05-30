import { VscAccount } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
    
    return (
      <li className={css.listElContact}>
        <div className={css.contactForm}>
        <VscAccount />
          <p>{contact.name}</p>
        </div>
        <div>
        <FaPhoneAlt />
        <p>{contact.number}</p>
        </div>
        <button onClick={onDelete} className={css.btnContact}>Delete</button>
      </li>
    );
  };
  
  export default Contact;
  
  
  
  