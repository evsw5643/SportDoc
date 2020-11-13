import React from 'react'
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

import { Line } from "react-chartjs-2";

function PlayerCharts(props){
    const data = {
    labels: ["2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017"],
    data: [
        {
        label: "Blocks",
        //text: "Blocks",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
        indexLabelFontColor: "#2A9D8F",
        gridColor: "#2A9D8F",
        lineColor: "#2A9D8F",
        }
    ]
    };
    return (
        <div className="App">
          <Line data={data} />
        </div>
      );
}

export default PlayerCharts


