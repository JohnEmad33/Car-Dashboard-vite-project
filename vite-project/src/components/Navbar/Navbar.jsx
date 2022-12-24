import React, { Component }  from 'react';
import { CircleFill} from 'react-bootstrap-icons';
import {Bell} from 'react-bootstrap-icons';
import{Search} from 'react-bootstrap-icons';
import { useDispatch,useSelector } from 'react-redux';
// import { Decrement,Increment } from '../../redux/counter';
import './Navbar.scss'
function Navbar() {
  const {count}=useSelector((state)=>state.counter);
  const{displayName}= useSelector((state)=>state.user);
  // const dispatch= useDispatch();
    return (
        <nav className="navbar" id="navbar-up">
            <div className="container-fluid">
                <div  className="col-4" id="motiv">
                <img id="profilePicture" src="src/assets/imgs/Vector 1.png" alt="Motiv"/>
                </div>
              <a className="navbar-brand" id="company" href="#">Motiv.</a>
              <form className="d-flex" role="search" id="search">
                <div className=" container-fluid col-4 input-group">
                    <button  id="searchButton" className="btn btn-light" type="button"><Search/></button>
                    <input id="searchInput" type="text" className="form-control bg-light" placeholder="Search or type" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                </div>
              </form>
            <div className="container-fluid col-4">
               <CircleFill id='circle'/>
               <Bell id='bell'/>
               <div id='user'>
               {/* <h4>Likes count: {count}</h4> */}
               <span>{displayName}</span>
               </div>
               <div id='counter'>
               {/* <h4>Likes count: {count}</h4> */}
               <span>Likes: {count}</span>
               </div>

               <img  className="profile" src="src/assets/imgs\portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png" alt="profile picture"/>
            </div>
            </div>
          </nav>

    );
}
export default Navbar;