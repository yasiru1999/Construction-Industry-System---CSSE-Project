import './App.css';
import {Upper} from './components/views/upper/Upper'
import Sidebar from './components/views/SideNav/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {LandingDashBoard} from "./components/views/LandingDashBoard/LandingDashBoard";
import Login from "./components/views/LoginPage/LoginPage";
import Register from "./components/views/RegisterPage/RegisterPage"
import {AddItems} from "./components/views/Suppliers/AddItems"
import {Halls} from "./components/views/Halls/Halls";
import {AddHall} from "./components/views/Halls/AddHall";
import {Rooms} from "./components/views/Rooms/Rooms";
import {AddRoom} from "./components/views/Rooms/AddRoom";
import {EditRoom} from "./components/views/Rooms/EditRoom";
import {Employees} from "./components/views/Employees/Employees";
import {AddEmployee} from "./components/views/Employees/AddEmployee";
import {EditEmployee} from "./components/views/Employees/EditEmployee";
import {RoomReservation} from "./components/views/Reservations/RoomReservations";
import {HallReservation} from "./components/views/Reservations/HallReservations";
import {Menus} from "./components/views/Restaurant/Menus";
import {Restaurants} from "./components/views/Restaurant/Restaurants";
import {AddRestaurant} from "./components/views/Restaurant/AddRestaurant";
import {AddMenu} from "./components/views/Restaurant/AddMenu";
import {EditRoomReservations} from "./components/views/Reservations/EditRoomReservations";
import {EditHallReservations} from "./components/views/Reservations/EditHallReservations";
import {EditMenu} from "./components/views/Restaurant/EditMenu";
import {EditRestaurant} from "./components/views/Restaurant/EditRestaurant";
import {EditHall} from "./components/views/Halls/EditHall";


import {AddSite} from "./components/views/Sites/AddSite";
import {PurchaseOrders} from "./components/views/PurchaseOrders/PurchaseOrders";


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

                    <Route path='/RoomReservation' exact component={RoomReservation} />
                    <Route path='/halls' exact component={Halls} />
                    <Route path='/halls/add-hall' exact component={AddHall} />
                    <Route path='/halls/edit-hall/:id' exact component={EditHall} />
                    <Route path='/rooms' exact component={Rooms}/>
                    <Route path='/rooms/add-room' exact component={AddRoom} />
                    <Route path='/rooms/edit-room/:id' exact component={EditRoom} />
                    <Route path='/roomReservations/edit-roomReservations/:id' exact component={EditRoomReservations} />
                    <Route path='/hallReservations/edit-hallReservations/:id' exact component={EditHallReservations} />
                    <Route path='/reservations/rooms' exact component={RoomReservation} />
                    <Route path='/reservations/halls' exact component={HallReservation} />
                    <Route path='/restaurant/menus' exact component={Menus} />
                    <Route path='/restaurant/menus/add-menus' exact component={AddMenu} />
                    <Route path='/restaurants/edit-menu/:id' exact component={EditMenu} />
                    <Route path='/restaurant/restaurants' exact component={Restaurants} />
                    <Route path='/restaurants/add-restaurant' exact component={AddRestaurant} />
                    <Route path='/restaurants/edit-restaurant/:id' exact component={EditRestaurant} />


                    <Route path='/employees' exact component={Employees} />
                    <Route path='/employees/add-employee' exact component={AddEmployee} />
                    <Route path='/employees/edit-employee/:id' exact component={EditEmployee} />

                    <Route path='/sites/add-site' exact component={AddSite} />

                    <Route path='/purchaseOrders' exact component={PurchaseOrders} />


                </Switch>
            </div>
        </Router>
    );
}

export default App;
