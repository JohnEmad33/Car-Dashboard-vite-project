import React, { Component }  from 'react';
import './CarCard.scss';
function CarCard (props){
    return(
            <div className="col">
                <div className="card" id={`${props.carData.id}`}>
                    <div className="card-body">
                        <p className="card-text carsText" ><img src="src/assets/imgs\Vector2.png" alt="arrows"/> <span className='cardTextStyling2'>{props.carData.percent}</span></p>
                        <img src={`src/assets/imgs/${props.carData.carImage}.png`} alt="car" className="graphCar"/>
                        <h3 className="carName">{props.carData.name}</h3>
                        <p className='cardTextStyling'><img src="src/assets/imgs\vectors.png" alt="repost"/><span className='cardTextStyling3'>{props.carData.repost}</span> <img src="src/assets/imgs\Vector (1).png" alt="gear" className='cardTextStyling4'/> <img src="src/assets/imgs\Vector (2).png" alt="electric" className='cardTextStyling4'/> <span className='cardTextStyling5'>{props.carData.price}</span></p>
                    </div>
                </div>
            </div>
    );
}
export default CarCard;
