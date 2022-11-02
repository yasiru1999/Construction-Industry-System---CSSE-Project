import React, { useState,useEffect} from 'react';
import {useHistory, withRouter} from "react-router-dom";
import * as Yup from 'yup';
import {Form, Input,} from 'antd';
import Select from 'react-select';
import { Formik } from 'formik';
import axios from "axios";
import styled from "styled-components";
import "./Suppliers.css"
import {JumpCircleLoading} from "react-loadingg";
import MaterialTable from "material-table";
import {Button, Icon, Paper} from "@material-ui/core";

const Items = [
    { value: 'cement', label: 'cement' },
    { value: 'iron bar', label: 'iron bar' }
]

// Creating schema
const schema = Yup.object().shape({
    SupItemID: Yup.string()
        .required("ID is a required field"),
    // ItemName: Yup.string()
    //     .required("Item Name is a required field"),
    Price: Yup.string()
        .required("Price is a required field"),
    qty: Yup.string()
        .required("Quantity is a required field"),
});


const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  margin-left: 1rem;;
  font-size: 15px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: #326ad9;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:hover {
    background-color: #326ad9;
    box-shadow: 0px 4px 12px rgba(72, 28, 76, 0.4);
    color: #fff;
    transform: translateY(-2px);
  }
`;

function AddItems(props) {

    const history = useHistory();
    const [formErrorMessage, setFormErrorMessage] = useState('');
    const [SelectedItem,setSelectedItem] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [items,setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/supplyItem').
        then((response) => {
            if(response.data.success) {
                console.log(response.data.items);
                setItems(response.data.items.map((item) => ({
                    id: item._id,
                    SupItemID: item.SupItemID,
                    ItemName: item.ItemName,
                    Price: item.Price,
                    qty: item.qty
                })));
                // setIsLoading(false);
            } else{
                alert('An error occurred while retrieving data');
                console.log(response.data.error);
            }
        })
    },[])

    const deleteHall = async (props) => {

        const id = props.data.id;

        await axios.delete('http://localhost:8070/supplyItem/' + id).
        then((response) => {
            if(response.data.success){
                alert("Successfully deleted.");
            }else {
                alert('An error happened');
                console.log(response.data.error);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return  (
        <>
            {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <Formik
                validationSchema={schema}
                initialValues={{
                    SupItemID: "",
                    ItemName: "",
                    Price: "",
                    qty: ""
            }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        let dataToSubmit = {
                            SupItemID: values.SupItemID,
                            ItemName: SelectedItem.value,
                            Price: values.Price,
                            qty: values.qty
                        };

                        axios.post('http://localhost:8070/supplyItem/add', dataToSubmit)
                            .then(response => {
                                console.log(dataToSubmit)
                                if (response.data.success) {
                                    alert("Supply Items added successfully");
                                    props.history.push("/addItems");
                                    window.location.reload(false);
                                } else {
                                    alert("Supply Items added cancelled");
                                }
                            })
                            .catch(err => {
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

        <div className={'content'}>
            <div className={'dashboard-header'}>
                Add Supply Items
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
                <div className="column left" style={{backgroundColor:'#ffffff'}}>

                        <div className="">
                            <div className="for3">
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Item style={{textAlign:'left',fontSize:'15px'}} required label="Item ID">
                                        <Input
                                            id="SupItemID"
                                            placeholder="Enter Item ID"
                                            type="text"
                                            value={values.SupItemID}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="itemName"
                                        />
                                        <p className="error">
                                            {errors.SupItemID && touched.SupItemID && errors.SupItemID}
                                        </p>
                                    </Form.Item>

                                    <Form.Item style={{textAlign:'left',fontSize:'15px'}} required label="Item Name:">
                                        <Select
                                            id="ItemName"
                                            options = {Items}
                                            hasValue
                                            setValue={values.ItemName}
                                            onBlur={handleBlur}
                                            onChange={setSelectedItem}
                                            className="itemName"

                                        />

                                    </Form.Item>

                                    <Form.Item style={{textAlign:'left',fontSize:'15px'}} required label="One Item Price">
                                        <Input
                                            id="Price"
                                            placeholder="Enter Item Price"
                                            type="text"
                                            value={values.Price}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="itemName"
                                        />
                                        <p className="error">
                                            {errors.Price && touched.Price && errors.Price}
                                        </p>
                                    </Form.Item>

                                    <Form.Item style={{textAlign:'left',fontSize:'15px'}} required label="Quantity">
                                        <Input
                                            id="qty"
                                            placeholder="Enter Quantity"
                                            type="text"
                                            value={values.qty}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="itemName"
                                        />
                                        <p className="error">
                                            {errors.qty && touched.qty && errors.qty}
                                        </p>
                                    </Form.Item>
                                    <SubmitButton
                                        style={{
                                            float: 'right',
                                            marginTop: '10px',
                                            backgroundColor: '#326ad9'
                                        }}
                                        type = "submit"
                                    >
                                        Submit
                                    </SubmitButton>
                                </Form>
                            </div>
                        </div>

                </div>
                <div className="column right" >
                    <div className={''}>
                        <div className={'main-container-tables2'}>
                            <div className={''}>
                                <MaterialTable
                                    style={{backgroundColor:"#cae3f5",borderRadius:'20px'}}
                                    columns={[
                                        {title: 'ID', field: 'SupItemID'},
                                        {title: 'item name', field: 'ItemName'},
                                        {title: 'price', field: 'Price'},
                                        {title: 'Available quantity', field: 'qty'}
                                    ]}
                                    data={
                                        items
                                    }
                                    actions={[
                                        {
                                            icon: 'edit',
                                            tooltip: 'Edit hall data',
                                            // onClick: (event, rowData) => alert("You saved " + rowData.name)
                                        },

                                        {
                                            icon: 'delete',
                                            tooltip: 'Delete hall',

                                        }
                                    ]}
                                    // components={{
                                    //     Container: props => <Paper {...props} elevation={0}/>,
                                    //     Action:
                                    //         props => {
                                            //     if (props.action.icon === 'edit') {
                                            //         return (
                                            //             <button
                                            //                 className="MuiButtonBase-root
                                            //     MuiIconButton-root MuiIconButton-colorInherit"
                                            //                 tabIndex="0"
                                            //                 type="button"
                                            //                 title="Edit Hall"
                                            //                 onClick={(event, rowData) => {
                                            //                     history.push({
                                            //                         pathname: '/halls/edit-hall/' + props.data.id,
                                            //                         state: props.data
                                            //                     });
                                            //                     console.log(props.data);
                                            //                 }}
                                            //             >
                                            //     <span className="MuiIconButton-label">
                                            //         <span className="material-icons MuiIcon-root"
                                            //               aria-hidden="true">
                                            //             edit
                                            //         </span>
                                            // </span>
                                            //                 <span className="MuiTouchRipple-root"></span>
                                            //             </button>
                                            //         )
                                            //     }
                                            //     if (props.action.icon === 'delete') {
                                            //         return (
                                            //             <button
                                            //                 className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                                            //                 tabIndex="0"
                                            //                 type="button"
                                            //                 title="Delete Hall"
                                            //                 onClick={(event, rowData) => deleteHall(props)}
                                            //             >
                                            //     <span
                                            //         className="MuiIconButton-label">
                                            //         <span className="material-icons MuiIcon-root"
                                            //               aria-hidden="true">
                                            //             delete
                                            //         </span>
                                            //     </span>
                                            //                 <span className="MuiTouchRipple-root"></span>
                                            //             </button>
                                            //         )
                                            //     }
                                            // }

                                    // }}

                                    options={{
                                        actionsColumnIndex: -1,
                                        headerStyle: {
                                            backgroundColor: "#cae3f5",
                                            textAlign: "left",
                                        },
                                        tableLayout: 'auto',
                                        exportButton: false,
                                        sorting: true,
                                        pageSize: 6,
                                        pageSizeOptions: [6],
                                        showTitle: false,
                                        toolbarButtonAlignment: 'left',
                                    }}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
                )}
            </Formik>
        </>
    );
};
export default withRouter(AddItems);
