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

    const resetForm = () => {
        setPoList({ orderId:"", itemName:"", quantity:"", approver:"", siteName:"", siteManager:"", siteContactNo:"",
        siteAddress:"", approvedQty:"", dueDate:"", priority:"", approvelStatus:"", comment:"", condition:"",
        deliveryStatus:"", supCompany:"", supName:"", supContact:"", supAddress:"" });
    }

    /*const [PoListUpdate, setPoListUpdate] = useState({
        orderId:"", itemName:"", quantity:"", approver:"", siteName:"", siteManager:"", siteContactNo:"",
        siteAddress:"", approvedQty:"", dueDate:"", priority:"", approvelStatus:"", comment:"", condition:"",
        deliveryStatus:"", supCompany:"", supName:"", supContact:"", supAddress:""});*/
    
    const [supplierList, setSupplierList] = useState([]);
    const [supplier, setSupplier] = useState({Price:"", supName:""});

    const totalAmount = supplier.Price * PoList.quantity;

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

    function AssignSupplier(item) {
        axios.get(`http://localhost:8070/supplyItem/${item}`)
            .then(res => {
                console.log(res.data)
                setSupplierList(res.data)
            }).catch(err => console.error(err))
    }

    function SupplierSelect(id) {
        axios.get(`http://localhost:8070/supplyItem/get/${id}`)
            .then(res => {
                console.log(res.data)
                setSupplier(res.data)
            }).catch(err => console.error(err))
    }

    function isApproved(){
        //e.preventDefault();
        const ListUpdate = {
            _id: id,
            approvedQty: PoList.quantity,
            approvelStatus: "Approved",
            supCompany: supplier.supName,
            supName: supplier.supName,
            supContact: "0779863015",
            totalPrice: totalAmount,
            comment: PoList.comment
        }
        axios.put(`http://localhost:8070/purchaseOrder`, ListUpdate).then(() => {
            alert("Successfully Approved");
            props.history.push(`/purchaseOrders`)
            resetForm();
        }).catch((err) => {
            alert("Fild to Approved!");
            alert(err)
        });
    }

    function isPartiallyApproved(){
        //e.preventDefault();
        const ListUpdate = {
            _id: id,
            approvedQty: PoList.quantity,
            approvelStatus: "Partially_Approved",
            supCompany: supplier.supName,
            supName: supplier.supName,
            supContact: "0779863015",
            totalPrice: totalAmount,
            comment: PoList.comment
        }
        axios.put(`http://localhost:8070/purchaseOrder`, ListUpdate).then(() => {
            alert("Partially Approved");
        }).catch((err) => {
            alert("Fild to Approved!");
            alert(err)
        });
    }

    function isReject(){
        //e.preventDefault();
        const ListUpdate = {
            _id: id,
            approvedQty:0,
            approvelStatus: "Rejected",
            totalPrice: 0,
            comment: PoList.comment
        }
        axios.put(`http://localhost:8070/purchaseOrder`, ListUpdate).then(() => {
            alert("Order Rejected");
            props.history.push(`/OrderList`)
        }).catch((err) => {
            alert("Fild to reject!");
            alert(err)
        });
    }

    const onChange = e => {
        setPoList({ ...PoList, [e.target.name]: e.target.value });
    }

  
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
                            <button className="buttonSup" onClick={() => AssignSupplier(PoList.itemName)}>Assign Supplier</button> 
                                                                    
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
                                    <thead className='table-dark'>
                                        <tr>
                                            <th> ID</th>
                                            <th className='tablegap'> Name </th>
                                            <th> Price</th>
                                        </tr>
                                    </thead>
                                        <tbody className='table-group-divider'>
                                        {
                                            supplierList.map((detail, id) => (
                                                <tr className='sup' key={id} onClick={() => SupplierSelect(detail.supID)}>
                                                    <td>{detail.supID}</td>
                                                    <td className='tablegap '>{detail.supName}</td>
                                                    <td>Rs. {detail.Price}</td>                      
                                                </tr>
                                            ))
                                        }
                                        </tbody>
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
                                        <label>{PoList.quantity} X {supplier.Price}</label><br/>
                                        <label>Rs {totalAmount}</label><br/><br/>
                                        <label>Rs 1000000</label><br/>
                                    </div>
                                </div>
                            </div>

                            <label for="name" className='labelStypeL'>Enter Comment</label>
                            <label for="name" className='labelStypeR'>New quantity</label><br/>
                            <input type="text" className="form-control inputL" id="name" placeholder="Comment.." name='comment'
                                    value={PoList.comment} onChange={onChange} required></input>  

                            
                            <input type="number" className="form-control" id="name" placeholder="Enter new Qty.." name='quantity'
                                    value={PoList.quantity} onChange={onChange} required></input>

                            <button className="buttonPaAp" onClick={() => isPartiallyApproved()}>Partially Approved</button>     

                            <button className="buttonRej" onClick={() => isReject()}>Reject</button> 
 
                            <button className="buttonAp" onClick={() => isApproved()}>Approved</button>    
                        </div>

                    </div>
                </div>
            </div>

        </div>

  </div>
  );
};

export default withRouter(OrderDetail);
