import React, {useEffect, useState} from 'react';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import {Button, Chip, IconButton, Input, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as yup from "yup";
import {useFormik,Field} from "formik";
import styled from "styled-components";
import {useHistory, useLocation} from "react-router-dom";
import { JumpCircleLoading } from 'react-loadingg';


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
export const EditEmployee = (props)=>{
    const [isLoading,setIsLoading] = useState(true);
    const [employeeName,setEmployeeName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState([]);
    const [id, setId] = useState('');

    const history = useHistory();
    const data = history.location.state;

    // const initialFormState = {
    //     birthday: Date.now(),
    //   };

    useEffect( () => {
        const fetchData = async () => {
            await axios.get('http://localhost:8070/employees/'+props.match.params.id)
            .then((response) => {
            if(response.data.success){

                console.log(" response data" ,response.data.employee);
                const data = response.data.employee;

                setEmployeeName(data.employeeName);
                setDateOfBirth(data.dateOfBirth);
                setPermanentAddress(data.permanentAddress);
                setNationalID(data.nationalID);
                setPhoneNumber(data.phoneNumber);
                setEmail(data.email);
                setId(data._id);
                setIsLoading(false);

            } else{
                alert('An error occurred while retrieving data');
                console.log(response.data.error);
            }
        })
    }
        fetchData();

    },[])
    const validationSchema = yup.object({
        employeeName: yup
            .string('Enter employee name')
            .required('Name is required'),
        dateOfBirth: yup
            .string('Enter the date of birth')
            .required('Date of birth is required'),
        permanentAddress: yup
            .string('Enter permanent address')
            .required('Permanent address is required'),
        nationalID: yup
            .string('Enter the National ID card number')
            .required('NIC is required'),
        phoneNumber: yup
            .string('Enter the phone number')
            .required('Phone number is required'),
        email: yup
            .string('Enter the email')
            .required('email is required'),

    });
    const formik = useFormik({
        initialValues: {
            _id: id,
            employeeName: employeeName,
            dateOfBirth: dateOfBirth,
            permanentAddress: permanentAddress,
            nationalID: nationalID,
            phoneNumber: phoneNumber,
            email: email,

        },
        enableReinitialize: true,
        validationSchema: validationSchema,

        onSubmit: (values) => {
            const employee = {
                _id: id,
                employeeName: values.name,
                dateOfBirth: values.dateOfBirth,
                permanentAddress: values.permanentAddress,
                nationalID: values.nationalID,
                phoneNumber: values.phoneNumber,
                email: values.email,
            }
            console.log(values.dateOfBirth)

            axios.put('http://localhost:8070/employees', employee)
                .then(response => {
                            if (response.data.success) {
                                alert('Employee  Successfully Updated')

                            } else {
                                alert('Failed to edit employee')
                            }

                        })
                    console.log("employees", values)

        },
    });


    return isLoading ? (
        <div>
            <div className={'content'}>
                <div className={'dashboard-header'}>
                    Employment Management
                    <div className={'dashboard-subheader'}>
                        {/*TODO Align icon an route to go back*/}
                        <IconButton aria-label="back"
                                    onClick={() =>{
                                        history.goBack();
                                    }}>
                            <Icon style={{
                                color: '#5a2360',
                            }}>arrow_back_ios</Icon>
                        </IconButton>
                        Edit Employee Details
                    </div>
                </div>
                <div className={'main-container'}>
                    <div className={'form-container'}>
                        Loading...
                        <JumpCircleLoading
                            color ="#5a2360"
                            speed = {0.5}
                            size = "large"

                        />

                    </div>
                </div>
            </div>
        </div>
    ):(
        <div className={'content'}>
            <div className={'dashboard-header'}>
                Employee Management
                <div className={'dashboard-subheader'}>
                    {/*TODO Align icon an route to go back*/}
                    <Icon style={{
                        color: '#5a2360',
                    }}>arrow_back_ios</Icon>
                    Edit Employee Details
                </div>
            </div>
            <div className={'main-container'}>
                <div className={'form-container'}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="employeeName"
                            name="employeeName"
                            label="Name"
                            value={formik.values.employeeName}
                            onChange={formik.handleChange}
                            error={formik.touched.employeeName && Boolean(formik.errors.employeeName)}
                            helperText={formik.touched.employeeName && formik.errors.employeeName}
                        />
                       
                        <br/>
                        
                        <TextField
                            fullWidth
                            // id="dateOfBirth"
                            name="dateOfBirth"
                            // label="DateOfBirth"
                            // multiline
                            id="dateOfBirth"
                         label="Birthday"
                        //  type="date"
                        //  defaultValue="2017-05-24"
                         sx={{ width: 220 }}
                         InputLabelProps={{
                         shrink: true,
                           }}
                            value={formik.values.dateOfBirth}
                            onChange={(value) => formik.setFieldValue('dateOfBirth', value, true)}
                            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                        />
                        <TextField
                            fullWidth
                            id="permanentAddress"
                            name="permanentAddress"
                            label="Permanentaddress"
                            multiline
                            value={formik.values.permanentAddress}
                            onChange={formik.handleChange}
                            error={formik.touched.permanentAddress && Boolean(formik.errors.permanentAddress)}
                            helperText={formik.touched.permanentAddress && formik.errors.permanentAddress}
                        />
                        <TextField
                            fullWidth
                            id="nationalID"
                            name="nationalID"
                            label="NationalID"
                            value={formik.values.nationalID}
                            onChange={formik.handleChange}
                            error={formik.touched.nationalID && Boolean(formik.errors.nationalID)}
                            helperText={formik.touched.nationalID && formik.errors.nationalID}
                        />
                        <TextField
                            fullWidth
                            id="phoneNumber"
                            name="phoneNumber"
                            label="PhoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <SubmitButton
                        type="submit"
                            style={{
                                float: 'right',
                                marginTop: '10px',
                                backgroundColor: '#326ad9',
                                fontFamily: 'Josefin Sans'
                            }}
                            
                        >
                           Save Changes
                        </SubmitButton>
                    </form>


                </div>
            </div>
        </div>



    );



};