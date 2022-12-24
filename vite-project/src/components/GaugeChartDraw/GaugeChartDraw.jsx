import { useEffect } from "react";
import React, { Component }  from 'react';
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import { useRef, useLayoutEffect } from 'react';
import './GaugeChartDraw.scss';
const Gauge=(props)=>{
    useLayoutEffect(() => {
    
        var root = am5.Root.new(props.gaugeChartCard.idgauge); 
    
    root.setThemes([am5themes_Animated.new(root)]);
    
    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: -200,
        endAngle: 20,
        innerRadius: -10,
        
      })
    );
    
    var axisRenderer = am5radar.AxisRendererCircular.new(root, {
      strokeOpacity: 0.1,
      minGridDistance: 0,
      cornerRadius: 20
    });
    
      
    axisRenderer.ticks.template.setAll({
      visible: false,
      strokeOpacity: 0.5,
      cornerRadius: 20
    
    });
    
    axisRenderer.grid.template.setAll({
      visible: false,
      cornerRadius: 20
    });
    
    var axis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer,
        cornerRadius: 20
      })
    );
    
    function createRange(start, end, color, label) {
      
      var rangeDataItem = axis.makeDataItem({
        value: start,
        endValue: end
      });
    
      var range = axis.createAxisRange(rangeDataItem);
      
      rangeDataItem.get("axisFill").setAll({
        visible: true,
        fill: color,
        fillOpacity: 0.8
      });
      
      rangeDataItem.get("tick").setAll({
        visible: false
      });
      
      rangeDataItem.get("label").setAll({
        text: label,
        inside: true,
        radius: 5,
        fontSize: "0.9em",
        fill: am5.color(0xF6CC0D)
      });
    
    }
    createRange(0, parseInt(props.gaugeChartCard.value), am5.color(props.gaugeChartCard.color), );
    if(props.gaugeChartCard.color==="#FFFFFF")
    {
      createRange(parseInt(props.gaugeChartCard.value), 100, am5.color(0xB37EFC), );
    }
    else{
      createRange(parseInt(props.gaugeChartCard.value), 100, am5.color(0xF4F5F9), );
    }
        return () => {
          root.dispose();
        };
      }, []);
    
      return (
              <div className="col">
                    <div className="card" id={`${props.gaugeChartCard.id}`}>
                      <div id={`${props.gaugeChartCard.divId}`}>
                          <img src={`src/assets/imgs/${props.gaugeChartCard.image}.png`} alt="spark"/>
                      </div>
                      <p className={`${props.gaugeChartCard.class}`}>{props.gaugeChartCard.content}</p>
                      <p className={`${props.gaugeChartCard.class2}`}>{props.gaugeChartCard.value1}</p>
                      <div id={`${props.gaugeChartCard.idName}`}></div>
                    </div>
              </div>        
      );



}
export default Gauge;
