import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import Axios from "axios";
import {useLocation} from "react-router-dom";



function UpdateItems(props) {

    const [itemID,setItemID] = useState("");
    const [itemName,setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");


    let [paymentsDate, setPaymentDate] = useState("");

    const location = useLocation();

    useEffect(() =>{
        setItemID(location.state.item.SupItemID)
        setItemName(location.state.item.ItemName)
        setPrice(location.state.item.Price)
        setQty(location.state.item.qty)
    },[location])


    const onUserIDChange = (event) => {
        setItemID(event.currentTarget.value)
    }

    const onNameChange = (event) => {
        setItemName(event.currentTarget.value)
    }
    const onPriceChange = (event) => {
        setPrice(event.currentTarget.value)
    }
    const onQtyChange = (event) => {
        setQty(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // if (!studentID || !studentName || !phoneNo || !registeredCourse || !paymentAmount || !paymentAmount) {
        //     return alert('fill all the fields first!')
        // }

        const variables = {
            UserID: itemID,
            itemName: itemName,
            price: price,
            qty:qty
        }


        // Axios.put(`http://localhost:5001/api/users/updateUserInfo/${ID}`, variables)
        //     .then(response => {
        //         if (response.data) {
        //             alert('User Details Successfully Edited')
        //             props.history.push('/AllUsers')
        //         } else {
        //             alert('User Details Successfully Edited')
        //         }
        //     })

    }

    return(
        <div style={{ width: '98%'}}>

            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto',marginLeft:'500px'}}>
                <Form className="updateForm" style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>Item ID :</label>
                    <Input
                        onChange={onUserIDChange}
                        value={itemID}
                    />

                    <br />
                    <br />

                    <label>Item Name :</label>
                    <Input
                        onChange={onNameChange}
                        value={itemName}
                    />
                    <br />
                    <br />

                    <label>Price :</label>
                    <Input
                        onChange={onPriceChange}
                        value={price}
                    />
                    <br />
                    <br />

                    <label>Quantity :</label>
                    <Input
                        onChange={onQtyChange}
                        value={qty}
                    />

                    <br />
                    <br />

                    <Button
                        style={{marginLeft: '300px'}}
                        className="selectBtn5"
                        onClick={onSubmit}>
                        Submit
                    </Button>

                </Form>

            </div>

        </div>
    )
}

export default UpdateItems;