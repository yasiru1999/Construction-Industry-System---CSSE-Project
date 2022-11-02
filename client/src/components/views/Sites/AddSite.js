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

    });

    const formik = useFormik({
        initialValues: {
            siteName: '',
            siteManagerName: '',
            phoneNumber: '',
            address: '',
            budget: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const formData = new FormData();
            const config = {
                headers: {
                   
                }
            };
            const sites = {
                siteName: values.siteName,
                siteManagerName: values.siteManagerName,
                phoneNumber: values.phoneNumber,
                address: values.address,
                budget: values.budget,
            }
            console.log(sites);
            axios.post('http://localhost:8070/sites/add', sites, config)
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
        <div className={'content'}>
            <div className={'dashboard-header'}>
                Site Management
                <div className={'dashboard-subheader'}>
                    {/*TODO Align icon an route to go back*/}
                    <Icon style={{
                        color: '#5a2360',
                    }}>arrow_back_ios</Icon>
                    Add Site
                </div>
            </div>
            <div className={'main-container'}>
                <div className={'form-container'}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="siteName"
                            name="siteName"
                            label="Site Name"
                            value={formik.values.siteName}
                            onChange={formik.handleChange}
                            error={formik.touched.siteName && Boolean(formik.errors.siteName)}
                            helperText={formik.touched.siteName && formik.errors.siteName}
                        />
                        <TextField
                            fullWidth
                            id="siteManagerName"
                            name="siteManagerName"
                            label="Site Manager Name"
                            value={formik.values.siteManagerName}
                            onChange={formik.handleChange}
                            error={formik.touched.siteManagerName && Boolean(formik.errors.siteManagerName)}
                            helperText={formik.touched.siteManagerName && formik.errors.siteManagerName}
                        />
                        <TextField
                            fullWidth
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Site Contact Number"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                        <TextField
                            fullWidth
                            id="address"
                            name="address"
                            label="Site Address"
                            multiline
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                        <TextField
                            fullWidth
                            id="budget"
                            name="budget"
                            label="Budget"
                            value={formik.values.budget}
                            onChange={formik.handleChange}
                            error={formik.touched.budget && Boolean(formik.errors.budget)}
                            helperText={formik.touched.budget && formik.errors.budget}
                        />
                        


                        <SubmitButton
                            style={{
                                float: 'right',
                                marginTop: '10px',
                                backgroundColor: '#326ad9',
                                fontFamily: 'Josefin Sans'
                            }}
                            type="submit"
                        >
                            Add Site
                        </SubmitButton>
                    </form>


                </div>
                </div>
        </div>
    );
};

