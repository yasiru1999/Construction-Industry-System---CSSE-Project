// import React, {useEffect, useState} from 'react';
// import { useHistory } from 'react-router-dom';
// import MaterialTable from 'material-table';
// import {Button, Icon, Link, Paper} from "@material-ui/core";
// import axios from "axios";

// export const PurchaseOrders = () => {

//     const history = useHistory();

//     const [purchaseOrders,setPurchaseOrders] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8070/purchaseOrders').
//         then((response) => {
//             if(response.data.success) {
//                 console.log(response.data.purchaseOrders);
//                 setPurchaseOrders(response.data.purchaseOrders.map((item) => ({

//                     orderId: item.orderId,
//                     itemName: item.itemName,
//                     quantity: item.quantity,
//                     status: item.status,
//                     approver: item.approver,

//                 })));
//                 setTimeout(console.log(purchaseOrders),3000)
//             } else{
//                 alert('An error occurred while retrieving data');
//                 console.log(response.data.error);
//             }
//         })
//     },[])

//     const deletePurchaseOrder = async (props) => {

//         console.log(props.data.id);

//         const id = props.data.id;

//         await axios.delete('http://localhost:8070/purchaseOrders/' + id).
//         then((response) => {
            
//             if(response.data.success) {
//                 alert('Purchase Order Deleted Successfully');
//                 window.location.reload(false);
//             } else{
//                 alert('An error occurred while deleting data');
//                 console.log(response.data.error);
//             }
//         })
//     }

//     const updatePurchaseOrder = async (props) => {
            
//             console.log(props.data.id);
    
//             const id = props.data.id;
    
//             await axios.put('http://localhost:8070/purchaseOrders/' + id).
//             then((response) => {
                
//                 if(response.data.success) {
//                     alert('Purchase Order Updated Successfully');
//                     window.location.reload(false);
//                 } else{
//                     alert('An error occurred while updating data');
//                     console.log(response.data.error);
//                 }
//             })
//         }

//     const columns = [
//         {title: 'Order ID', field: 'orderId'},
//         {title: 'Item Name', field: 'itemName'},
//         {title: 'Quantity', field: 'quantity'},
//         {title: 'Status', field: 'status'},
//         {title: 'Approver', field: 'approver'},
//     ]

//     return (
//         <div>
//             <Paper elevation={3} style={{padding: 20, margin: 20}}>
//                 <MaterialTable
//                     title="Purchase Orders"
//                     columns={columns}
//                     data={purchaseOrders}
//                     actions={[
//                         {
//                             icon: 'delete',
//                             tooltip: 'Delete Purchase Order',
//                             onClick: (event, rowData) => deletePurchaseOrder(rowData)
//                         },
//                         {
//                             icon: 'edit',
//                             tooltip: 'Update Purchase Order',
//                             onClick: (event, rowData) => updatePurchaseOrder(rowData)
//                         }
//                     ]}
//                     options={{
//                         actionsColumnIndex: -1
//                     }}
//                 />
//             </Paper>
//         </div>
//     )
// }

// /