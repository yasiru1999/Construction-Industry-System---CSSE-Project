import './App.css';
import {Upper} from './components/views/upper/Upper'
import Sidebar from './components/views/SideNav/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {LandingDashBoard} from "./components/views/LandingDashBoard/LandingDashBoard";
import Login from "./components/views/LoginPage/LoginPage";
import Register from "./components/views/RegisterPage/RegisterPage"
import AddItems from "./components/views/Suppliers/AddItems"
import {Employees} from "./components/views/Employees/Employees";
import {AddEmployee} from "./components/views/Employees/AddEmployee";
import {EditEmployee} from "./components/views/Employees/EditEmployee";


import {AddSite} from "./components/views/Sites/AddSite";
import {PurchaseOrder} from "./components/views/PurchaseOrders/PurchaseOrders";


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

                    <Route path='/employees' exact component={Employees} />
                    <Route path='/employees/add-employee' exact component={AddEmployee} />
                    <Route path='/employees/edit-employee/:id' exact component={EditEmployee} />

                    <Route path='/sites/add-site' exact component={AddSite} />

                    <Route path='/purchaseOrder' exact component={PurchaseOrder} />


                </Switch>
            </div>
        </Router>
    );
}

export default App;
