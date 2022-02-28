import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
const intitalValues = {
  name: "",
  email: "",
  message: "",
};
const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  name: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "Invalid name")
    .required("First name is required")
    .max(15, "First name is to long"),
  message: Yup.string()
    .required("Message to be send is required")
    .max(30, "Abstract should atleast be more than 50 words."),
});
function FormN() {
  return (
    <React.Fragment>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="Your name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              className="input"
              placeholder="Your email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <textarea
              className="input input-message"
              placeholder="Your message"
              rows="4"
              cols="30"
              type="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></textarea>

            {errors.email && touched.email && errors.email}
            <button
              className="send-message"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}
export default FormN;
