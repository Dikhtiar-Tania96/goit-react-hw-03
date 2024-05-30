import { VscAccount } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
    
    return (
      <li>
        <div>
        <VscAccount />
          <p>{contact.name}</p>
        </div>
        <div>
        <FaPhoneAlt />
        <p>{contact.phone}</p>
        </div>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  };
  
  export default Contact;
  
  
  
  