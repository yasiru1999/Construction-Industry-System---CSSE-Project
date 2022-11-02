import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import {Select, Button, Form, Input} from "antd";
import {withRouter} from "react-router-dom";
import "../RegPage.css";
import axios from "axios";
import '../Register.css'


function SupplierRegPage(props) {

    return (
        <Formik
            initialValues={{
                SupID: '',
                name: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
                SupID: Yup.string()
                    .required('ID is required'),
                name: Yup.string()
                    .required('Name is required'),
                phoneNumber: Yup.string()
                    .required('Contact Number is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        SupID: values.SupID,
                        name: values.name,
                        phoneNumber: values.phoneNumber,
                        email: values.email,
                        password: values.password,
                        Role: "Supplier",
                    };
                    console.log(dataToSubmit);
                    axios.post('http://localhost:8070/api/users/register', dataToSubmit)
                        .then(response => {
                            if (response.data.success) {
                                props.history.push("/login");
                            } else {
                                alert(response.data.err.errmsg)
                            }
                        })

                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (
                    <div className="login">
                        <div className="for">
                            <Form onSubmit={handleSubmit} >

                                <Form.Item required>
                                    <Input
                                        id="SupID"
                                        placeholder="Enter Supplier ID"
                                        type="text"
                                        value={values.SupID}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control inp_text"
                                    />
                                    <p className="error">
                                        {errors.SupID && touched.SupID && errors.SupID}
                                    </p>
                                </Form.Item>

                                <Form.Item required>
                                    <Input
                                        id="name"
                                        placeholder="Enter Name"
                                        type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control inp_text"
                                    />
                                    <p className="error">
                                        {errors.name && touched.name && errors.name}
                                    </p>
                                </Form.Item>

                                <Form.Item required hasFeedback>
                                    <Input
                                        id="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control inp_text"
                                    />
                                    <p className="error">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                </Form.Item>

                                <Form.Item required>
                                    <Input
                                        id="phoneNumber"
                                        placeholder="Enter Phone Number"
                                        type="text"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                    />
                                    <p className="error">
                                        {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                    </p>
                                </Form.Item>

                                <Form.Item required hasFeedback>
                                    <Input
                                        id="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                    />
                                    <p className="error">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                </Form.Item>

                                <Form.Item required hasFeedback>
                                    <Input
                                        id="confirmPassword"
                                        placeholder="Enter your Confirm Password"
                                        type="password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                    />
                                    <p className="error">
                                        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                    </p>
                                </Form.Item>

                                <Form.Item>
                                    <Button onClick={handleSubmit} type="submit" disabled={isSubmitting}>
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                );
            }}
        </Formik>
    );
};

export default withRouter(SupplierRegPage);
