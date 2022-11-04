import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import './PurchaseOrder.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import axios from "axios";

function OrderDetail(props) {

    const [noticeList, setNoticeList] = useState([]);
  
  return (
    <div>
 
        <div className="page">

            <center>
                <h1 className="topicOne">Order Details</h1><br/>
            </center>

            <div class="row">

                <div class="column1" >
                    <div className="card2">
                        <h3 className="topicPoNum">OR001</h3><br/><br/>

                        <div class="row">
                            <div class="column2" >
                                <h3 className="selSuptopic">Item Details</h3><br/><br/>

                                <div class="column22" >
                                    <div className="dataleft22">
                                        <label>Item Name</label><br/>
                                        <label>Quantity</label><br/>
                                        <label>Status</label><br/>
                                        <label>Due Date</label><br/>
                                        <label>Approver</label><br/>
                                        <label>Condition</label><br/>
                                    </div>
                                </div>

                                <div class="column23" >
                                    <div className="dataleft23">
                                        <label>Cement bags</label><br/>
                                        <label>30</label><br/>
                                        <label>Pending</label><br/>
                                        <label>2022-11-20</label><br/>
                                        <label>Procument staff</label><br/>
                                        <label>No Condition</label><br/>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="columnIn2" >
                                <h3 className="selSuptopic">Delivery Details</h3><br/><br/>

                                <div class="column24" >
                                    <div className="dataleft22">
                                        <label>Site Name</label><br/>
                                        <label>Manager Name</label><br/>
                                        <label>Contact no</label><br/>
                                        <label>Site Address</label><br/>
                                    </div>
                                </div>

                                <div class="column25" >
                                    <div className="dataleft23">
                                        <label>Nova Construction</label><br/>
                                        <label>A J S Dilshan</label><br/>
                                        <label>0775630159</label><br/>
                                        <label>Colombo 03</label><br/>
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
