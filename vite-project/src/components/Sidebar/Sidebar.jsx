import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import {BoxArrowInRight} from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import {logOut} from '../../redux/userAuth'
import "./Sidebar.scss"
function Sidebar() {
    const dispatch = useDispatch();
    return (
                <div id="sidebar" className="side container col-2">
                    <ul className="list-group border-white text-muted">
                        <li className="list-group-item border-0 text-muted" aria-current="true"> <Link to="/" className='links'><img className="icons" src="src/assets/imgs\dashboard icon.png" alt="icon"></img><span className='spanText'> Dashboard</span></Link></li>
                        <li className="list-group-item border-0 text-muted"> <img className="icons" src="src/assets/imgs\Shape.png" alt="icon"></img><span className='spanText'> Assets</span></li>
                        <li className="list-group-item border-0 text-muted"> <Link to="/booking" className='links'><img className="icons" src="src/assets/imgs\Line.png" alt="icon"></img><span className='spanText'> Booking</span></Link></li>
                        <li className="list-group-item border-0 text-muted"> <img  className="icons" src="src/assets/imgs\Line2.png" alt="icon"></img><span className='spanText'> Sell Cars</span></li>
                        <li className="list-group-item border-0 text-muted"> <img  className="icons" src="src/assets/imgs\Line3.png" alt="icon"></img><span className='spanText'> Buy Cars</span></li>
                        <li className="list-group-item border-0 text-muted"> <img  className="icons" src="src/assets/imgs\Line4.png" alt="icon"></img><span className='spanText'> Services</span></li>
                        <li className="list-group-item border-0 text-muted"> <img  className="icons" src="src/assets/imgs\Line5.png" alt="icon"></img><span className='spanText'> Calender</span></li>
                        <li className="list-group-item border-0 text-muted" id="lowerSection"> <img  className="icons" src="src/assets/imgs\Line6.png" alt="icon"></img><span className='spanText'> Messages</span></li>
                        <li className="list-group-item border-0 text-muted"> <Link to="/signIn" className='links'><BoxArrowInRight style={{marginRight:"18px"}}/><span className='spanText'> Sign in</span></Link></li>
                        <li className="list-group-item border-0 text-muted"> <img className="icons" src="src/assets/imgs\Line8.png" alt="icon"></img><span className='spanText'> Settings</span></li>
                        <li className="list-group-item border-0 text-muted" onClick={()=>dispatch(logOut())}> <img className="icons" src="src/assets/imgs\Line9.png" alt="icon"></img><span className='spanText'> Log out</span></li>
                    </ul>
                </div>
    );
}
export default Sidebar;