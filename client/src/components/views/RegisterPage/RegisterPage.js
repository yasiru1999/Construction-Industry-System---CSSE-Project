import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import axios from "axios";
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

const options = [
    { value: 'Supplier', label: 'Supplier' },
    { value: 'Accountant', label: 'Accountant' },
]
// Creating schema
const schema = Yup.object().shape({
    ID: Yup.string()
        .required("ID is a required field"),
    name: Yup.string()
        .required("name is a required field"),
    phoneNumber: Yup.string()
        .required("Phone Number is a required field"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 6 characters"),
});

function LoginPage(props) {
    const dispatch = useDispatch();
    const [role,setRole] = useState('');
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
                            ID: values.ID,
                            name: values.name,


                        };

                        axios.post('http://localhost:8070/api/users/login', dataToSubmit)
                            .then(response => {
                                console.log(dataToSubmit)
                                if (response.data.loginSuccess) {
                                    window.localStorage.setItem('userId', response.data.userId);
                                    window.localStorage.setItem('name', response.data.name);
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
                    <div className="login">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Registration</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}


                                <input
                                    type="text"
                                    name="ID"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.ID}
                                    placeholder="Enter ID"
                                    className="form-control inp_text"
                                    id="ID"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.ID && touched.ID && errors.ID}
                                </p>

                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Enter Name"
                                    className="form-control inp_text"
                                    id="name"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.name && touched.name && errors.name}
                                </p>

                                <input
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    placeholder="Enter Phone Number"
                                    className="form-control inp_text"
                                    id="phoneNumber"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                </p>
                                <Select
                                    defaultValue="lucy"
                                    options = {options}
                                    style={{ width: 270 }}
                                    onChange={handleChange}
                                    className="form-control inp_text"
                                    id="phoneNumber"
                                >
                                </Select><br/><br/>

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
                )}
            </Formik>
        </>
    );
};

export default withRouter(LoginPage);


