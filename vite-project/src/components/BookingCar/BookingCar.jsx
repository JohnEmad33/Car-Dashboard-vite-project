import { increment } from 'firebase/firestore';
import React, { Component }  from 'react';
import './BookingCar.scss';
import { useDispatch,useSelector } from 'react-redux';
import { Decrement,Increment } from '../../redux/counter';

function BookingCar(props) {
    const dispatch= useDispatch();
    return (
  
        <div className="col">
            <div className="card border border-0">
                <div className="card-body cardHeight">
                    <h3 className="carName">Porshe 718 Cayman S <button style={{border:'none', backgroundColor:'white'}} onClick={()=>dispatch(Increment())}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-heart heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${props.bookingCar.fill}`} className="bi bi-heart-fill heartBtn" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg> </span></button>
                    </h3>
                    <p className="card-text"><span className='coupe'>Coupe</span></p>
                    <img src={`src/assets/imgs/${props.bookingCar.carImage}.png`} alt="car" className={`${props.bookingCar.class}`}></img>
                    <p className='textInCard'><img src="src/assets/imgs\person.png" alt="person"></img><span className='four'>4</span> <img src="src/assets/imgs\purpleArrow.png" alt="repost" className='arrowsInCard'></img> <span className="manual"> Manual</span>  <span className="fourHundred">$400</span><span className="perDay">/d</span></p>
                </div>
            </div>
        </div>
    );
}
export default BookingCar;