import React, { Component }  from 'react';
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useRef, useLayoutEffect } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './ChartSmooth.scss'
const ChartSmooth = () => {
  useLayoutEffect(() => {

    var root = am5.Root.new("chartdiv6");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    
    
    // Generate random data
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;
    
    function generateData() {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }
    
    function generateDatas(count) {
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }
    
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
      pan:"zoom"
    }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation:1,
      visible:false,
      renderer: am5xy.AxisRendererY.new(root, {
      pan:"zoom"
    })
    }));
    
    var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tension:0.05,
      stroke:am5.color(0xff764c),
      color:am5.color(0xff764c),
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
    
    series.fills.template.setAll({
      visible: true,
      color:am5.color(0xff764c),
      fillOpacity: 0.2
    });
    
    series.fills.template.set("fillGradient",am5.LinearGradient.new(root,{stops:[
      {
        color:am5.color(0xff764c),
        opacity:0.24,
      },
      {
        color:am5.color(0xff7e07),
        opacity:0
      },
    ],
    rotation:90,
    }));    
    var data = generateDatas(50);
    series.data.setAll(data);
    
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="col">
    <div className="card" id="stats2">
      <div className="card-body">
        <h5 className="card-title"><span className="chartCardTitle">Cars</span> Statistics</h5>
        <div className="graphButtonContent">
        <span className='chartCardText2'>20 February 2020</span>
        <div className="rounded-pill divGrey" role="group" aria-label="Basic example">
          <button type="button" className="active chartButtons2 rounded-pill">Day</button>
          <button type="button" className="chartButtons2 rounded-pill">Week</button>
          <button type="button" className="chartButtons2 rounded-pill">Month</button>
        </div>
      </div>
        <div id="chartdiv6"></div>
      </div>
    </div>
  </div>
    );
}
export default ChartSmooth;
