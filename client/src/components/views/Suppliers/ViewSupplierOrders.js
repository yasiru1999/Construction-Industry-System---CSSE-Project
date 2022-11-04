import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import './Suppliers.css'
import user from './user2.png'
import {Button, Icon, Paper} from "@material-ui/core";
import {JumpCircleLoading} from "react-loadingg";
import {Form, Input} from "antd";
import Select from "react-select";

export const ViewSupplierOrders = () => {

    const history = useHistory();
    let loggedInSupID = localStorage.getItem('supID');
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        function getTopic() {
            loggedInSupID = localStorage.getItem('supID');
            console.log(loggedInSupID);
            axios.get('http://localhost:8070/purchaseOrder/get-all').then((response) => {
                if (response.data.success) {
                    console.log(response.data.purchaseOrder);
                    const order = response.data.purchaseOrder;
                    const FilteredOrders = response.data.purchaseOrder.filter(order =>
                        order.supID === loggedInSupID
                    )
                    setOrders(FilteredOrders);
                    // setIsLoading(false);
                } else {
                    alert('An error occurred while retrieving data');
                    console.log(response.data.error);
                }
            })
        }
        getTopic();
    },[])

    return (
            <div className={'content'}>
                <div className={'dashboard-header'}>
                    Supplier Orders
                </div>

                <div className={'main-container-tables2'}>
                    {orders.length > 0 && orders.map((item,index) => (
                    <div className={'viewData'}>
                        <div className="row2">
                            <div className="colum col1">
                                <img className="imgUser" src={user} />
                            </div>
                            <div className="colum col2" >

                                <table id="orders">
                                    <tr>
                                        <td>Order Id</td>
                                        <td><b>{item.orderId}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Item Name</td>
                                        <td><b>{item.itemName}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td><b>{item.quantity}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Total Price</td>
                                        <td><b>{item.totalPrice}</b></td>
                                    </tr>
                                </table>

                            </div>
                            <div className="colum col3">
                                <button className='selectBtn'>Select</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        );
};
