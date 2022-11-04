import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import {Button, Icon, Link, Paper} from "@material-ui/core";
import axios from "axios";

export const PurchaseOrders = () => {

    const history = useHistory();
    

    const [purchaseOrders,setPurchaseOrders] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8070/purchaseOrder/get-all').
        then((response) => {
            if(response.data.success) {
                // console.log(response.data.purchaseOrder);
                setPurchaseOrders(response.data.purchaseOrder.map((item) => ({

                    orderId: item.orderId,
                    itemName: item.itemName,
                    quantity: item.quantity,
                    // status: item.status,
                    approver: item.approver,
                    action : <button
                    style={{
                        textTransform: 'none',
                        borderRadius: 35,
                        backgroundColor: '#326ad9',
                        fontFamily: 'Roboto',
                        color: 'white',
                        padding: '5px 20px',                         
                              }}
                              
                    onClick={()=> buttonOnClickFunction(item._id)}>Select </button>

                })));
                // setTimeout(console.log(purchaseOrders),3000)
            } else{
                alert('An error occurred while retrieving data');
                console.log(response.data.error);
            }
        })
    },[])

  const buttonOnClickFunction = (event) => {
    history.push(`/purchaseOrderbyId/${event}`);
  }
    
    return (
        <div className={'content'}>
            <div className={'dashboard-header'}>
               Purchase Order Request List
            </div>
       
        <div className={'main-container-tables'}
        // style={{
        //     display:"grid",
        //     gridTemplateColumns:"1fr 3fr"
        // }}
        >
            {/* <p>----------------------</p>  */}
            <div className={'table-container'}
            
            >
                <MaterialTable
                    style={{backgroundColor:"#cae3f5",borderRadius:'20px'}}
                    columns={[
                        { title: 'id', field: 'id', hidden: true },
                        { title: 'Order Id', field: 'orderId' },
                        { title: 'Item Name', field: 'itemName' },
                        { title: 'Quantity', field: 'quantity' },
                        // { title: 'Status', field: 'status' },
                        { title: 'Approver', field: 'approver' },
                        { title: 'Actions', field: 'action' },
                   

                      
                    ]}
                    data={
                        purchaseOrders
                    }
                    
                    options={{
                        actionsColumnIndex: -1,
                        tableLayout: 'auto',
                        //exportButton: true,
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
    
);
};



