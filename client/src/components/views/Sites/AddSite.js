import React, {useEffect, useState} from 'react';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import {Button, Chip, Input, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as yup from "yup";
import {useFormik,Field} from "formik";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  margin-left: 1rem;;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:hover {
    background-color: #5a2360;
    box-shadow: 0px 4px 12px rgba(72, 28, 76, 0.4);
    color: #fff;
    transform: translateY(-2px);
  }
`;
export const AddSite = () => {
    const validationSchema = yup.object({
        /*name: yup
            .string('Enter employee name')
            .required('Name is required'),
        type: yup
            .string('Select employee type')
            .required('Type is required'),
        gender: yup
            .string('Select gender type')
            .required('Gender is required'),
        dateOfBirth: yup
            .string('Enter the date of birth')
            .required('Date of birth is required'),
        permanentAddress: yup
            .string('Enter permanent address')
            .required('Permanent address is required'),
        nationalId: yup
            .string('Enter the National ID card number')
            .required('NIC is required'),
        phoneNumber: yup
            .string('Enter the phone number')
            .required('Phone number is required'),
        email: yup
            .string('Enter the email')
            .required('email is required'),*/

    });

    const formik = useFormik({
        initialValues: {
            siteName: '',
            siteManagerName: '',
            phoneNumber: '',
            dateOfBirth: '',
            address: '',
            budget: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const formData = new FormData();
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            const sites = {
                siteName: values.siteName,
                siteManagerName: values.siteManagerName,
                phoneNumber: values.phoneNumber,
                dateOfBirth: values.dateOfBirth,
                address: values.address,
                budget: values.budget,
            }
            console.log(sites);
            axios.post('http://localhost:8080/api/site/add', sites, config)
                .then(response => {
                    if (response.data.success) {
                        alert('Site Added Successfully')
                    } else {
                        alert('Failed to add Site')
                    }
                }
                )
        },
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Add Site</h1>
                    <p className="lead text-center">
                        Create new site
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Site Name"
                                name="siteName"
                                className="form-control"
                                value={formik.values.siteName}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Site Manager Name"
                                name="siteManagerName"
                                className="form-control"
                                value={formik.values.siteManagerName}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                className="form-control"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Date of Birth"
                                name="dateOfBirth"
                                className="form-control"
                                value={formik.values.dateOfBirth}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                className="form-control"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Budget"
                                name="budget"
                                className="form-control"
                                value={formik.values.budget}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <SubmitButton type="submit" className="btn btn-primary btn-block mt-4">
                            Submit
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

