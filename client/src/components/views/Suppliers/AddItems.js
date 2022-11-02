import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";
import styled from "styled-components";
import "./Suppliers.css"
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 6 characters"),
});

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

export const AddItems = () => {

    const history = useHistory();

    const validationSchema = yup.object({
        name: yup
            .string('Enter room name')
            .required('Name is required'),
        type: yup
            .string('Select room type')
            .required('Type is required'),
        space: yup
            .number('Space should be a number')
            .label('space')
            .positive()
            .required('Space is required'),
        guests: yup
            .number()
            .label('guests')
            .positive()
            .required('Guest count is required'),
        height: yup
            .number()
            .label('height')
            .positive(),
        price: yup
            .number()
            .label('price')
            .positive()
            .required('Price is required'),
        description: yup
            .string('Enter the description')
            .required('Description is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            space: '',
            guests: '',
            height: '',
            price: '',
            description: '',
            facilities: [],
            events: [],
            image: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const hall = {
                hallName: values.name,
                type: values.type,
                space: values.space,
                guests: values.guests,
                height: values.height,
                price: values.price,
                description: values.description,
                facilities: values.facilities,
                events: values.events,
            }

            // axios.post('http://localhost:8080/halls', hall)
            //     .then(response => {
            //         axios.post("http://localhost:8080/files",formData,config)
            //             .then(() => {
            //                 if (response.data.success) {
            //                     alert('Hall Successfully Added')
            //                 } else {
            //                     alert('Failed to add hall')
            //                 }
            //             }).catch((error) => {
            //             alert(error.message);
            //         });
            //
            //     }).catch((error) => console.error(error))
        },
    });

    return (
        <div className={'content'}>
            <div className={'dashboard-header'}>
                Reception Hall Management
                <div className={'dashboard-subheader'}>
                    {/*TODO Align icon an route to go back*/}
                    {/*<IconButton aria-label="back"*/}
                    {/*            onClick={() =>{*/}
                    {/*                history.goBack();*/}
                    {/*            }}>*/}
                    {/*    <Icon style={{*/}
                    {/*        color: '#5a2360',*/}
                    {/*    }}>arrow_back_ios</Icon>*/}
                    {/*</IconButton>*/}
                    {/*<div>*/}
                    {/*    Add a Reception Hall*/}
                    {/*</div>*/}

                </div>
            </div>
            <div className="row">
                <div className="column left" style={{backgroundColor:'red'}}>
                    <div className={'main-container'}>
                    <div className={'form-container'}>
                        <form onSubmit={formik.handleSubmit}>


                            <SubmitButton
                                style={{
                                    float: 'right',
                                    marginTop: '10px',
                                    backgroundColor: '#5a2360',
                                    fontFamily: 'Josefin Sans'
                                }}
                                type = "submit"
                            >
                                Add Hall
                            </SubmitButton>
                        </form>
                    </div>
                </div>
                </div>
                <div className="column right" style={{backgroundColor:'#aaa'}}>
                    <h2>Column 2</h2>
                </div>
            </div>

        </div>
    );
}
