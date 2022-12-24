import React, { Component }  from 'react';
import { useEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useRef, useLayoutEffect } from 'react';
import './Chart.scss';
const Chart = (props) => {
  useLayoutEffect(() => {

var root = am5.Root.new(props.charts.id); 

var chart = root.container.children.push( 
  am5xy.XYChart.new(root, {
    panY: false,
    wheelY: "zoomX",
    layout: root.verticalLayout
  }) 
);

// Define data
var data = [{ 
  category: "1 PM", 
  value1: 130, 
}, { 
  category: "2 PM", 
  value1: 120, 
}, { 
  category: "3 PM", 
  value1: 157, 
}, { 
  category: "4 PM", 
  value1: 100, 
}, { 
  category: "5 PM", 
  value1: 130, 
}, { 
  category: "6 PM", 
  value1: 80, 
}, { 
  category: "7 PM", 
  value1: 120, 
}];

// Craete Y-axis
let yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    visible:false,
    renderer: am5xy.AxisRendererY.new(root, {
    })
  })
);
yAxis.get("renderer").grid.template.setAll({
  visible:false
})
// Create X-Axis
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.5,
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance:1
    }),
    categoryField: "category"
  })
);
xAxis.data.setAll(data);

// Create series
var series1 = chart.series.push( 
  am5xy.ColumnSeries.new(root, { 
    name: "Series", 
    xAxis: xAxis, 
    yAxis: yAxis, 
    valueYField: "value1", 
    categoryXField: "category",
    tooltip: am5.Tooltip.new(root, {})
  }) 
);
xAxis.data.setAll(data);
series1.data.setAll(data);

// Add legend
var legend = chart.children.push(am5.Legend.new(root, {})); 
legend.data.setAll(chart.series.values);

    return () => {
      root.dispose();
    };
  }, []);

  return (
        <div className="col">
            <div className="card" id="stats">
                <div className="card-body">
                    <h5 className="card-title"><span className="chartCardTitle">Miles</span> Statistics</h5>
                    <div className="graphButtonContent">
                        <div className="btn-group rounded-pill" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-sm btn-outline-primary border-0 active chartButtons rounded-pill">Day</button>
                            <button type="button" className="btn btn-sm btn-outline-primary border-0 text-dark chartButtons rounded-pill">Week</button>
                            <button type="button" className="btn btn-sm btn-outline-primary border-0 text-dark chartButtons rounded-pill">Month</button>
                        </div>
                        <span className='chartCardText'>265 Miles</span>
                    </div>
                    <div id={`${props.charts.id}`}></div>
                </div>
            </div>
        </div>
    );
}
export default Chart;
