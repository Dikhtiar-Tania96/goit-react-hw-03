import { VscAccount } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
    
    return (
      <li className={css.listElContact}>
        <div className={css.contactForm}>
        <VscAccount/>
          <p>{contact.name}</p>
        </div>
        <div className={css.contactForm}>
        <FaPhoneAlt />
        <p>{contact.number}</p>
        </div>
        <button className={css.btnContact} onClick={onDelete} >Delete</button>
      </li>
    );
  };
  
  export default Contact;
  
  
  
  