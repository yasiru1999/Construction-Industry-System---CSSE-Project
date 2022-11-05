import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import './PurchaseOrder.css'
//import { Formik } from 'formik';
//import * as Yup from 'yup';
//import { useDispatch } from "react-redux";
import axios from 'axios';

function OrdersList(props) {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:8070/purchaseOrder/getOrders`)
                setOrderList(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    function GetByStatus(state) {
        axios.get(`http://localhost:8070/purchaseOrder/get/${state}`)
            .then(res => {
                console.log(res.data)
                setOrderList(res.data)
            }).catch(err => console.error(err))
    }

    function GetAllOrders(state) {
        axios.get(`http://localhost:8070/purchaseOrder/getOrders`)
            .then(res => {
                console.log(res.data)
                setOrderList(res.data)
            }).catch(err => console.error(err))
    }

  
  return (
    <div>
        <div className="page">
            <center>
                <h1 className="topicOne">Purchase Order Approvel Status</h1><br/>
            </center>
            <button className="buttonState" onClick={() => GetAllOrders('All')}>All</button> 
            <button className='buttonState3' onClick={() => GetByStatus('Approved')}>Approved</button> 
            <button className='buttonState3p' onClick={() => GetByStatus('Pending')}>Pending</button> 
            <button className='buttonState4' onClick={() => GetByStatus('Partially_Approved')}>Partially_Approved</button> 
            <button className='buttonState3r' onClick={() => GetByStatus('Rejected')}>Rejected</button>

            <div className="card2">
                <table>
                    <thead className='table-dark'>
                        <tr>
                            <th className='tablegap2'> Order Id</th>
                            <th className='tablegap2'> Site Name</th>
                            <th className='tablegap2'> Item Name </th>
                            <th className='tablegap2'> Quantity</th>
                            <th className='tablegap2'> Total Amount</th>
                            <th className='tablegap2'> Approval Satatus</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            orderList.map((detail, id) => (
                                <tr className='sup' key={id}>
                                    <td>{detail.orderId}</td>
                                    <td>{detail.siteName}</td>
                                    <td className='tablegap '>{detail.itemName}</td>
                                    <td>{detail.quantity}</td>
                                    <td>{detail.totalPrice}</td>
                                    <td>{detail.approvelStatus}</td>                 
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
            </div>

        </div>
    </div>
  );
};

export default withRouter(OrdersList);
