import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";
// import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// function PlayerCharts(props) {
//     let points = props.CareerPoints;
//     let assists = props.CareerAssists;
//     let blocks = props.CareerBlocks;
//     let rebounds = props.CareerRebounds;
//     CanvasJS.addColorSet("NeonGreon",
//     [
//         "#2A9D8F"
//     ]);
//     const options = {
//         colorSet: "NeonGreon",
//         animationEnabled: true,
//         exportEnabled: true,
//         // theme: "dark2", //"light1", "dark1", "dark2"
//         backgroundColor: "#002A52",
//         title:{
//             text: "Career Overview",
//             fontColor: "#2A9D8F"},
//         axisY: {
//             includeZero: true,
//             labelFontColor: "#2A9D8F",
//             gridColor: "#2A9D8F",
//             lineColor: "#2A9D8F",
//             text: "Season"
//         },
//         axisX: {
//             labelFontColor: "#2A9D8F",
//             lineColor: "#2A9D8F"
//         },
//         data: [{
//             type: "line", //change type to bar, line, area, pie, etc
//             //indexLabel: "{y}", //Shows y value on all Data Points
//             indexLabelFontColor: "#2A9D8F",
//             indexLabelPlacement: "outside",
//             dataPoints: [
//                 { y: points, label: "2008-2009" },
//                 { y: assists, label: "2009-2010" },
//                 { y: blocks, label: "2010-2011" },
//                 { y: rebounds, label: "2011-2012" }
//             ]
//         }]
//     }
//     return (
//     <div>
//         <CanvasJSChart options = {options}/>
//         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//     </div>
//     );
// }



// export default PlayerCharts



function PlayerCharts(props) {
    var playerAssists = []
    var playerPoints = []
    var xAxesLabel = []
    for(let i = 0; i < props.SeasonStats.length; i++){
        if(props.SeasonStats[i].index == "Career")
            break;
        playerAssists[i] = props.SeasonStats[i].assists
        playerPoints[i] = props.SeasonStats[i].points
        xAxesLabel[i] = props.SeasonStats[i].index
    }
    const data = {
        labels: xAxesLabel,
        datasets: [
            {
                label: "Assists",
                data: playerAssists,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "crimson",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#2A9D8F",
            },
            {
                label: "Points",
                data: playerPoints,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "white",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#FFFFF",
            }
        ]
    };
    return (
        <Line data={data}/>
    );
}

export default PlayerCharts


