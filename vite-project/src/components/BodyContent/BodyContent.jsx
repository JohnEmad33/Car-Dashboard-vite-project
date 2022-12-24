import React, { Component }  from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Route,Routes } from "react-router-dom";
import Dashboard from '../../pages/Dashboard/Dashboard';
import Booking from '../../pages/Booking/Booking';
import SignIn from '../../pages/SignIn/SignIn';
import Navbar from '../Navbar/Navbar';
function BodyContent(){
    return(
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/Booking' element={<Booking/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
          </Routes>
    );
}

export default BodyContent;