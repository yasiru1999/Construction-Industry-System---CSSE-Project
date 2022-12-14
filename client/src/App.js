import './App.css';
import {Upper} from './components/views/upper/Upper'
import Sidebar from './components/views/SideNav/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {LandingDashBoard} from "./components/views/LandingDashBoard/LandingDashBoard";
import Login from "./components/views/LoginPage/LoginPage";
import Register from "./components/views/RegisterPage/RegisterPage"
import AddItems from "./components/views/Suppliers/AddItems"
import {ViewSupplierOrders} from "./components/views/Suppliers/ViewSupplierOrders";
import {ViewSupplyOrder} from "./components/views/Suppliers/ViewSupplyOrder";
import updateItems from "./components/views/Suppliers/updateItems";

import {Employees} from "./components/views/Employees/Employees";
import {AddEmployee} from "./components/views/Employees/AddEmployee";
import {EditEmployee} from "./components/views/Employees/EditEmployee";


import {AddSite} from "./components/views/Sites/AddSite";

import OrderDetail from "./components/views/PurchaseOrder/OrderDetail";

import {PurchaseOrders} from "./components/views/PurchaseOrders/PurchaseOrders";
import OrdersList from "./components/views/PurchaseOrder/OrderList";


function App() {
    return (
        <Router>
            <Upper />
            <Sidebar />
            <div>
                <Switch>
                    <Route path='/' exact component={LandingDashBoard} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/addItems' exact component={AddItems} />
                    <Route path='/orders' exact component={ViewSupplierOrders} />
                    <Route path='/order' exact component={ViewSupplyOrder} />
                    <Route path='/updateItem' exact component={updateItems} />


                    <Route path='/employees' exact component={Employees} />
                    <Route path='/employees/add-employee' exact component={AddEmployee} />
                    <Route path='/employees/edit-employee/:id' exact component={EditEmployee} />

                    <Route path='/sites/add-site' exact component={AddSite} />

                    <Route path="/purchaseOrderbyId/:id" exact component={OrderDetail} />


                    <Route path='/purchaseOrders' exact component={PurchaseOrders} />
                    <Route path='/OrderList' exact component={OrdersList} />


                </Switch>
            </div>
        </Router>
    );
}

export default App;
