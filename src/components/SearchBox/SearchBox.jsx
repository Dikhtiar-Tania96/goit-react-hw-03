import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange}) => {
  const uniqInputId = useId();

  return (
    <form>
      <div className={css.formEl}>
        <label htmlFor={uniqInputId}> Find contacts by name</label>
        <br />
        <input id={uniqInputId} value={value} onChange={onChange}/>
      </div>
    </form>
  );
};

export default SearchBox;
