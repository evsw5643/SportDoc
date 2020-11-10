import React from 'react'
import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function PlayerCharts(props) {
    let points = props.CareerPoints;
    let assists = props.CareerAssists;
    let blocks = props.CareerBlocks;
    let rebounds = props.CareerRebounds;
    CanvasJS.addColorSet("NeonGreon",
    [
        "#2A9D8F"
    ]);
    const options = {
        colorSet: "NeonGreon",
        animationEnabled: true,
        exportEnabled: true,
        // theme: "dark2", //"light1", "dark1", "dark2"
        backgroundColor: "#002A52",
        title:{
            text: "Career Overview",
            fontColor: "#2A9D8F"},
        axisY: {
            includeZero: true,
            labelFontColor: "#2A9D8F",
            gridColor: "#2A9D8F",
            lineColor: "#2A9D8F"
        },
        axisX: {
            labelFontColor: "#2A9D8F",
            lineColor: "#2A9D8F"
        },
        data: [{
            type: "bar", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#2A9D8F",
            indexLabelPlacement: "outside",
            dataPoints: [
                { y: points, label: "Career Points" },
                { y: assists, label: "Career Assists" },
                { y: blocks, label: "Career Blocks" },
                { y: rebounds, label: "Career Rebounds" }
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options}/>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}



export default PlayerCharts
