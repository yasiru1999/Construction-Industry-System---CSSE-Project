import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import './PurchaseOrder.css'
//import { Formik } from 'formik';
//import * as Yup from 'yup';
//import { useDispatch } from "react-redux";
import axios from 'axios';

function OrderDetail(props) {

    const {id} = useParams(""); 

    const [PoList, setPoList] = useState({
        orderId:"", itemName:"", quantity:"", approver:"", siteName:"", siteManager:"", siteContactNo:"",
        siteAddress:"", approvedQty:"", dueDate:"", priority:"", approvelStatus:"", comment:"", condition:"",
        deliveryStatus:"", supCompany:"", supName:"", supContact:"", supAddress:""});

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:8070/purchaseOrder/get-one/${id}`)
                setPoList(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);
  
  return (
    <div>
        <div className="page">

            <center>
                <h1 className="topicOne">Order Details</h1><br/>
            </center>

            <div class="row">

                <div class="column1" >
                    <div className="card2">
                        <h3 className="topicPoNum">{PoList.orderId}</h3><br/><br/>

                        <div class="row">
                            <div class="column2" >
                                <h3 className="selSuptopic">Item Details</h3><br/><br/>

                                <div class="column22" >
                                    <div className="dataleft22">
                                        <label>Item</label><br/>
                                        <label>Quantity</label><br/>
                                        <label>Status</label><br/>
                                        <label>Due Date</label><br/>
                                        <label>Approver</label><br/><br/>
                                        <label>Condition</label><br/>
                                    </div>
                                </div>

                                <div class="column23" >
                                    <div className="dataleft23">
                                        <label>{PoList.itemName}</label><br/>
                                        <label>{PoList.quantity}</label><br/>
                                        <label>{PoList.approvelStatus}</label><br/>
                                        <label>{PoList.dueDate}</label><br/>
                                        <label>{PoList.approver}</label><br/>
                                        <label>{PoList.condition}</label><br/>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="columnIn2" >
                                <h3 className="selSuptopic">Delivery Details</h3><br/><br/>

                                <div class="column24" >
                                    <div className="dataleft22">
                                        <label>Site Name</label><br/>
                                        <label>Manager</label><br/>
                                        <label>Contact no</label><br/>
                                        <label>Site Address</label><br/>
                                    </div>
                                </div>

                                <div class="column25" >
                                    <div className="dataleft23">
                                        <label>{PoList.siteName}</label><br/>
                                        <label>{PoList.siteManager}</label><br/>
                                        <label>{PoList.siteContactNo}</label><br/>
                                        <label>{PoList.siteAddress}</label><br/>
                                    </div>
                                </div>
                            </div>  
                            <button className="buttonSup">Assign Supplier</button>          
                        </div>

                    </div>
                </div>

               


                <div class="column3" >
                    <div className="card2">
                        <h3 className="selSuptopic">Select Supplier</h3><br/><br/>
                        <div class="row">
                            <div class="columnR2" >
                                <div className="card3">
                                    <table>
                                        <tr>
                                            <td className="tdPaddings">SP7</td>
                                            <td className="tdPaddings">Amal</td>
                                            <td className="tdPaddings">RS 7200</td>
                                        </tr>

                                        <tr>
                                            <td className="tdPaddings">SP8</td>
                                            <td className="tdPaddings">Dilshan</td>
                                            <td className="tdPaddings">RS 5200</td>
                                        </tr>

                                        <tr>
                                            <td className="tdPaddings">SP9</td>
                                            <td className="tdPaddings">Sunul</td>
                                            <td className="tdPaddings">RS 7400</td>
                                        </tr>
                                    </table>
                                </div>
                                
                            </div>
                            
                            <div class="columnRIn2" >
                                <h3 className="selSuptopic">Delivery Details</h3><br/><br/>

                                <div class="columnR24" >
                                    <div className="dataleft22"><br/>
                                        <label>Total price</label><br/><br/>
                                        <label>Site budget allocation</label><br/>
                                    </div>
                                </div>

                                <div class="columnR25" >
                                    <div className="dataleft23">
                                        <label>30 X 5200</label><br/>
                                        <label>Rs 1500000</label><br/><br/>
                                        <label>Rs 1000000</label><br/>
                                    </div>
                                </div>
                            </div>  
                            <button className="buttonPaAp">Partially Approved</button>       
                            <button className="buttonRej">Reject</button> 
                            <button className="buttonAp">Approved</button>    
                        </div>

                    </div>
                </div>
            </div>

        </div>

  </div>
  );
};

export default withRouter(OrderDetail);
