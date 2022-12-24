import React, { Component, Fragment }  from 'react';
import Filter from "../../components/Filter/Filter";
import CarSection from '../../components/CarSection/CarSection';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Booking.scss';
function Booking(){
    return(
        <Fragment>
            <Navbar/>
            <div className="container-fluid text-strat">
                <div className="row">
                    <Sidebar/>
                    <div id="main" className="container col-10 bg-light">
                        <h3 id="bookingTitle">Booking</h3>
                        <Filter/>
                        <CarSection/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Booking;

