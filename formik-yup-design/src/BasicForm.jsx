import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "./utilities";

const BasicForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: 0,
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="email"
          placeholder="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        <label>Age</label>
        {errors.age && <p className="error">{errors.age}</p>}
        <input
          type="number"
          placeholder="age"
          id="age"
          value={values.age}
          onChange={handleChange}
          className={errors.age ? "input-error" : ""}
        />
        <label>Password</label>
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="password"
          id="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          className={errors.password ? "input-error" : ""}
        />
        <label>Confirm Password</label>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default BasicForm;
