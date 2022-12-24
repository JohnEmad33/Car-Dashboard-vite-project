import React, { Component, useEffect, useState }  from 'react';
import BookingCar from '../BookingCar/BookingCar';
import {getFirestore,doc,getDoc,setDoc,addDoc,collection,getDocs} from "firebase/firestore";
import { arrayBookingCar } from '../../utils/Firebase/FirebaseUtils';
import { addCarsData,fetchCars } from '../../utils/Firebase/FirebaseUtils';
import { async } from '@firebase/util';

// await addCarsData();
const Cars = await fetchCars();
console.log(Cars);
const CarsAscending = [...Cars].sort((a, b) => a.id - b.id);
  console.log(CarsAscending);

const  CarSection=()=>{
  
    return( 
    <div className="row row-cols-1 row-cols-lg-3 g-4 m-2">
        {CarsAscending.map((bookingCarData)=><BookingCar key={bookingCarData.id} bookingCar={bookingCarData}/>)}
    </div>
    );
}
export default CarSection;