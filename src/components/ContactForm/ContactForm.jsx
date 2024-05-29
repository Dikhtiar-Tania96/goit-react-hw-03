import { useId } from "react";
import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Min 2 sumbol 🙂').max(50, 'Max 50 sumbol 😯').required('required❗'),
  phone: Yup.string().min(2,'Min 2 sumbol 🙂').max(50, 'Max 50 sumbol 😯').required('required❗'),
});

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
      validationSchema={validationSchema}
    >
      <Form>
        <div className={css.formEl}>
          <div className={css.formLbl}>
            <label htmlFor={uniqUserId} className={css.formName}>
              Name
            </label>
            <br />
            <Field id={uniqUserId} type="text" name="name" />
            <br/>
            <ErrorMessage name="name"/>
          </div>
          <div className={css.formLbl}>
            <label htmlFor={uniqNumberId} className={css.formName}>
              Number
            </label>
            <br />
            <Field id={uniqNumberId} type="text" name="phone" />
            <br/>
            <ErrorMessage name="phone"/>
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
