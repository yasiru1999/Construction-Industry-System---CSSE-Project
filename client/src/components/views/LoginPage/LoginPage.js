import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import './LoginPage.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import axios from "axios";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
  password: Yup.string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters"),
});

function LoginPage(props) {
  const dispatch = useDispatch();

  const [formErrorMessage, setFormErrorMessage] = useState('')

  return (
      <>
        {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
        <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            // onSubmit={(values) => {
            //   alert(JSON.stringify(values));
            // }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  let dataToSubmit = {
                    email: values.email,
                    password: values.password
                  };

                    axios.post('http://localhost:8070/api/users/login', dataToSubmit)
                    .then(response => {
                        console.log(dataToSubmit)
                      if (response.data.loginSuccess) {
                        window.localStorage.setItem('userId', response.data.userId);
                        window.localStorage.setItem('name', response.data.name);
                          window.localStorage.setItem('role', response.data.Role);
                        props.history.push("/RoomReservation");
                      } else {
                        setFormErrorMessage('Check out your Account or Password again')
                      }
                    })
                    .catch(err => {
                      setFormErrorMessage('Check out your Account or Password again')
                      setTimeout(() => {
                        setFormErrorMessage("")
                      }, 3000);
                    });
                  setSubmitting(false);
                }, 500);
              }}

        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
                <div className="app">
                    <div className="login">
                        <div className="for2">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                {/* Click on submit button to submit the form */}
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>

          )}
        </Formik>
      </>
  );
};

export default withRouter(LoginPage);


