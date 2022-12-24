import React, { Component, Fragment }  from 'react';
import Chart from '../../components/Chart/Chart';
import CarCard from '../../components/CarCard/CarCard';
import Gauge from '../../components/GaugeChartDraw/GaugeChartDraw';
import ChartSmooth from '../../components/ChartSmooth/ChartSmooth';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.scss';

const CarArray = [{
    id:"car1",percent:"64% Recommend",
    carImage:"car",
    name:"Mini Cooper",
    repost:"132K",
    price:"$32/h"
  },
  {
    id:"car2",
    percent:"74% Recommend",
    carImage:"car2",
    name:"Porsche 911 Carrera",
    repost:"130K",
    price:"$28/h"
  },
  {
    id:"car3",
    percent:"74% Recommend",
    carImage:"car3",
    name:"Porsche 911 Carrera",
    repost:"130K",
    price:"$28/h"
  }];

const arrayGaugeChart=[{
    id:"energy",
    divId:"spark",
    image:"Component 1",
    class:"cardText",
    content:"Energy",
    value1:"45%",
    class2:"cardNumber",
    idgauge:"chartdiv",
    value:"45",
    color:"#FFFFFF",
    idName:"chartdiv"
  },{
    id:"range",
    divId:"arrow",
    image:"Frame 15",
    class:"cardText2",
    content:"Range",
    value1:"157k%",
    class2:"cardNumber2",
    idgauge:"chartdiv2",
    value:"57",
    color:"#FF7E86",
    idName:"chartdiv2", 
  },{
    id:"fluid",
    divId:"drop",
    image:"Frame 17",
    class:"cardText2",
    content:"Break fluid",
    value1:"9%",
    class2:"cardNumber2",
    idgauge:"chartdiv3",
    value:"9",
    color:"#A162F7",
    idName:"chartdiv3",
  },{
    id:"tireWear",
    divId:"tire",
    image:"Frame 16",
    class:"cardText2",
    content:"Tire Wear",
    value1:"25%",
    class2:"cardNumber2",
    idgauge:"chartdiv4",
    value:"25",
    color:"#F6CC0D",
    idName:"chartdiv4",
  }];

const ChartArrayType = [{
    id:"chartdiv5"
  }];

function Dashboard(){
    
    return(

      <Fragment>
            <Navbar/>
            <div className="container-fluid text-strat">
              <div className="row">
                    <Sidebar/>
                  <div id="main" className="container col-10 bg-light">
                      <div className="row row-cols-1 row-cols-md-4 g-4" id="cardSection">
                        {arrayGaugeChart.map((gaugeChartdata)=><Gauge key={gaugeChartdata.id} gaugeChartCard={gaugeChartdata}/>)}
                      </div>
                    <div className="row row-cols-1 row-cols-md-2 g-2" id="statistics">
                      {ChartArrayType.map((chartType)=><Chart key={chartType.id} charts={chartType}/>)}
                      <ChartSmooth/>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-3" id="cars">
                      {CarArray.map((car)=><CarCard key={car.id} carData={car}/>)}
                    </div>
                  </div>    
              </div>
            </div>
        </Fragment>

    );
}

export default Dashboard;