import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import './Suppliers.css'
import user from './user2.png'
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
            <div className={'main-container-tables2'}>
                <div className={'viewData'}>
                    <div className="row2">
                        <div className="column2 col1">
                            <img className="imgUser" src={user} />
                        </div>
                        <div className="column2 col2" >
                            <table id="orders">
                                <tr>
                                    <td>Order Id</td>
                                    <td><b>OR022</b></td>
                                </tr>
                                <tr>
                                    <td>Item Name</td>
                                    <td><b>Iron bar</b></td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td><b>150</b></td>
                                </tr>
                                <tr>
                                    <td>Total Price</td>
                                    <td><b>Rs. 15000.00</b></td>
                                </tr>
                            </table>

                        </div>
                        <div className="column2 col3">
                            <button className='selectBtn'>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
