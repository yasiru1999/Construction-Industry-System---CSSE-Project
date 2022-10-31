import React, {useState} from "react";
import {Radio } from "antd";
import AccountantRegPage from "./Sections/AccountantRegPage";
import SupplierRegPage from "./Sections/SupplierRegPage"
import './Register.css'

function RegisterPage(props) {

    const [regType,setRegType] = useState(0);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setRegType(e.target.value);
    };

    return (
        // style={{  margin: '3rem auto' }}
        <div className="app">
            <h2 style={{  fontFamily: 'Unica One',fontSize:'40px' }}>Sign Up</h2>
            <br/>
            <Radio.Group
                /*options={options}*/
                onChange={onChange}
                // value={regType}
                optionType="button"
                defaultValue="0"
                buttonStyle="solid"
            >
                <Radio.Button className="radio" value="0">Accountant</Radio.Button>
                <Radio.Button className="radio" value="1">
                    Supplier
                </Radio.Button>
            </Radio.Group>
            <br/><br/>
            { regType=="0"  ?
                <>
                    <AccountantRegPage/>
                </>

                : null }
            { regType=="1"  ?
                <>
                    <SupplierRegPage/>
                </>

                : null }

        </div>
    );
};

export default RegisterPage
