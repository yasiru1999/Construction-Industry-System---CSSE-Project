import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import './Suppliers.css'
import MaterialTable from "material-table";
import {Button, Icon, Paper} from "@material-ui/core";
import {JumpCircleLoading} from "react-loadingg";
import {Form, Input} from "antd";
import Select from "react-select";

export const ViewSupplyOrder = () => {

    const history = useHistory();

    return (
        <div className={'content'}>
            <div className={'dashboard-header'}>
                OR022
            </div>
            <div className={'main-container-tables3'}>
                    <div className="row3">
                        <div className="colum2 colLeft" >
                            <h2>Item Details</h2>
                            <table id="orders">
                                <tr>
                                    <td>Item Name</td>
                                    <td><b>cement</b></td>
                                </tr>
                                <tr>
                                    <td>Item Quantity</td>
                                    <td><b>30</b></td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td><b>Approved</b></td>
                                </tr>
                                <tr>
                                    <td>Due Date</td>
                                    <td><b>05/05/2022</b></td>
                                </tr>
                                <tr>
                                    <td>Approver</td>
                                    <td><b>Procurement Staff</b></td>
                                </tr>
                                <tr>
                                    <td>Condition</td>
                                    <td><b>No Condition</b></td>
                                </tr>
                                <br/>
                                <h2>Delivery Details</h2>
                                <tr>
                                    <td>Site Name</td>
                                    <td><b>Mr. J</b></td>
                                </tr>
                                <tr>
                                    <td>Site Manager Name</td>
                                    <td><b>Mr. Y</b></td>
                                </tr>
                                <tr>
                                    <td>Site Contact No</td>
                                    <td><b>119</b></td>
                                </tr>
                                <tr>
                                    <td>Site Address</td>
                                    <td><b>CMB 3</b></td>
                                </tr>
                            </table>
                        </div>
                        <div className="colum2 colRight">
                            <h2>Payments</h2>
                            <table id="orders">
                                <tr>
                                    <td>Total Price</td>
                                    <td><b>Rs. 150,000.00/=</b></td>
                                </tr>
                                <br/>
                                <h2>Delivery Status</h2>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    );
};
