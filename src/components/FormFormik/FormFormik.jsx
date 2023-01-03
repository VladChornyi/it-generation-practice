import React from "react";
import { Formik, Field, Form } from "formik";

import { SignupSchema } from "./formValidation";
export default function FormFormik({ addUser }) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        phone: "",
      }}
      onSubmit={addUser}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <label htmlFor="lastName">Last name</label>
          <Field type="text" id="lastName" name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <label htmlFor="phone">Number of phone</label>
          <Field type="tel" id="phone" name="phone" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
}
