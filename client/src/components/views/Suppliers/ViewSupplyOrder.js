import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import './Suppliers.css'
import { Formik } from 'formik';
import {Form} from "antd";
import Select from "react-select";
import GeneratePdf from "./GenerateReceipt"

const statuses = [
    { value: 'delivered', label: 'delivered' },
    { value: 'completed', label: 'completed' }
]

export const ViewSupplyOrder = (props) => {

    const [ID,setId] = useState("");
    const [orderID,setOrderId] = useState("");
    const [itemName,setItemName] = useState("");
    const [itemQty,setItemQty] = useState("");
    const [status,setStatus] = useState("");
    const [dueDate,setDueDate] = useState("");
    const [approver,setApprover] = useState("");
    const [condition,setCondition] = useState("");
    const [siteName,setSiteName] = useState("");
    const [siteManagerName,setSiteManagerName] = useState("");
    const [siteContactNu,setSiteContactNu] = useState("");
    const [siteAddress,setSiteAddress] = useState("");
    const [totPrice,setTotPrice] = useState("");
    const [deliveryStatus,setDeliveryStatus] = useState('');

    const [Order, setOrder] = useState([]);

    const location = useLocation();
    useEffect(() =>{
        setId(location.state.order._id)
        setOrderId(location.state.order.orderId)
        setItemName(location.state.order.itemName)
        setItemQty(location.state.order.quantity)
        setStatus(location.state.order.approvelStatus)
        setDueDate(location.state.order.dueDate)
        setApprover(location.state.order.approver)
        setCondition(location.state.order.condition)
        setSiteName(location.state.order.siteName)
        setSiteManagerName(location.state.order.siteManager)
        setSiteContactNu(location.state.order.siteContactNo)
        setSiteAddress(location.state.order.siteAddress)
        setTotPrice(location.state.order.totalPrice)
        setDeliveryStatus(location.state.order.deliveryStatus)

        setOrder(location.state.order);
    },[location])
    return (
        <Formik
            initialValues={{
                _id:ID,
                deliveryStatus:""
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        _id:ID,
                        deliveryStatus: deliveryStatus.value,
                    };
                    axios.put('http://localhost:8070/purchaseOrder/' , dataToSubmit)
                        .then(response => {
                            console.log(dataToSubmit)
                            if (response.data.success) {
                                alert("Delivery Status Updated");
                                window.location.reload(false);
                            } else {
                                alert("Delivery Status not Updated");
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className={'content'}>
                        <div className={'dashboard-header'}>
                            {orderID}
                        </div>
                    <div className={'main-container-tables3'}>
                        <div className="row3">
                            <div className="colum2 colLeft" >
                                <h2>Item Details</h2>
                                    <table id="orders">
                                        <tr>
                                            <td>Item Name</td>
                                            <td><b>{itemName}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Item Quantity</td>
                                            <td><b>{itemQty}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td><b>{status}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Due Date</td>
                                            <td><b>{dueDate}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Approver</td>
                                            <td><b>{approver}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Condition</td>
                                            <td><b>{condition}</b></td>
                                        </tr>
                                        <br/>
                                        <h2>Delivery Details</h2>
                                        <tr>
                                            <td>Site Name</td>
                                            <td><b>{siteName}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Site Manager Name</td>
                                            <td><b>{siteManagerName}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Site Contact No</td>
                                            <td><b>{siteContactNu}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Site Address</td>
                                            <td><b>{siteAddress}</b></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="colum2 colRight">
                                    <h2>Payments</h2>
                                    <table id="orders">
                                        <tr>
                                            <td>Total Price</td>
                                            <td><b>{totPrice}</b></td>
                                        </tr>
                                        <br/>
                                        <h2>Delivery Status</h2>
                                        {/*<tr>*/}
                                        {/*    <td>Status</td>*/}
                                        {/*    <td><b>{deliveryStatus}</b></td>*/}
                                        {/*</tr>*/}
                                    </table><br/>
                                    <div className="row3">
                                        <div className="">
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <div className="colum3 colSide1">
                                                    <Form.Item style={{textAlign:'left',fontSize:'15px'}}>
                                                        <Select
                                                            id="status"
                                                            options = {statuses}
                                                            hasValue
                                                            setValue={values.ItemName}
                                                            onBlur={handleBlur}
                                                            onChange={setDeliveryStatus}
                                                            className="inputFieldStatus"
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className="colum3 colSide2">
                                                    <button
                                                        className='selectBtn2'
                                                        type="submit"
                                                    >Update</button>
                                                </div>
                                            </Form>
                                                <div className="colum3 colSide3">
                                                    <button

                                                        className='selectBtn3'
                                                        type="submit"
                                                    >Generate Receipt
                                                    </button>
                                                </div>
                                        </div>

                                    </div>

                                    <button
                                        className='selectBtn4'
                                        type="submit"
                                    >GENERATE INVOICE
                                    </button>

                                </div>
                            </div>
                    </div>
                </div>
            )}}
        </Formik>
    );
};
