import { useId } from "react";
import css from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";

const Contact = ({ submit }) => {
  const uniqUserId = useId();
  const uniqNumberId = useId();

  return (
    <Formik
      initialValues={{
        name: "a",
        phone: "b",
      }}
      onSubmit={(values, actions) => {
        submit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <div className={css.formEl}>
          <div className={css.formLbl}>
            <label htmlFor={uniqUserId} className={css.formName}>
              Name
            </label>
            <br />
            <Field id={uniqUserId} type="text" name="name" />
          </div>
          <div className={css.formLbl}>
            <label htmlFor={uniqNumberId} className={css.formName}>
              Number
            </label>
            <br />
            <Field id={uniqNumberId} type="text" name="phone" />
          </div>
          <button type="submit" className={css.formBtn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Contact;
