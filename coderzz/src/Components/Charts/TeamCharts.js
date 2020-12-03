import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";

function TeamCharts(props) {

    let statname1 = ""
    let statname2 = ""
    let statname3 = ""
    let statname4 = ""
    let chartTitle = ""
    let teamstat1 = []
    let teamstat2 = []
    let teamstat3 = []
    let teamstat4 = []

    let xAxesLabel = []
    console.log("SPORTNAME:")
    console.log(props.SeasonStats[0])
    switch(props.SeasonStats[0].sportname){
        case "basketball":
            if(props.title === "offensive"){
                chartTitle = "Offensive Stats"
                statname1 = "Points"
                statname2 = "Assist"
                statname3 = "Field Goals"
                statname4 = "Offensive-Rebounds"
                for(let i = 0; i < props.SeasonStats.length; i++){
                    teamstat1[i] = props.SeasonStats[i].points
                    teamstat2[i] = props.SeasonStats[i].assists
                    teamstat3[i] = props.SeasonStats[i].field_goals
                    teamstat4[i] = props.SeasonStats[i].offensive_rebounds
                     
                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }
            else{
                chartTitle = "Defensive Stats"
                statname1 = "Defensive Rebounds"
                statname2 = "Blocks"
                for(let i = 0; i < props.SeasonStats.length; i++){
                    teamstat1[i] = props.SeasonStats[i].defensive_rebounds
                    teamstat2[i] = props.SeasonStats[i].blocks
                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }
            break
        case "baseball":
            break
        case "hockey":
            break
    }
    teamstat1 = [...new Set(teamstat1)]
    teamstat2 = [...new Set(teamstat2)]
    teamstat3 = [...new Set(teamstat3)]
    teamstat4 = [...new Set(teamstat4)]
    xAxesLabel = [...new Set(xAxesLabel)]
    const data = {
        labels: xAxesLabel,
        datasets: [
            {
                label: statname1,
                data: teamstat1,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#ff6361",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#2A9D8F",
            },
            {
                label: statname2,
                data: teamstat2,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#bc5090",
                indexLabelFontColor: "#005FB8",
                lineColor: "",
            },
            {
                label: statname3,
                data: teamstat3,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#58508d",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#FFFFF",
            },
            {
                label: statname4,
                data: teamstat4,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#003f5c",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#FFFFF",
            }
        ]
    };
    return (
        <Line data={data} options={{
            title: {
                display: true,
                text: chartTitle,
                fontSize: 25,
                fontColor: "#2A9D8F"
            }
        }} />
    );
    // if (props.SeasonStats[0].sportname === "basketball") {
    //     let teamAssists = []
    //     let teamPoints = []
    //     let teamRebounds = []
    //     let teamBlocks = []
    //     let xAxesLabel = []
    //     for (let i = 0; i < props.SeasonStats.length; i++) {
    //         teamAssists[i] = props.SeasonStats[i].assists
    //         teamPoints[i] = props.SeasonStats[i].points
    //         teamRebounds[i] = props.SeasonStats[i].total_rebounds
    //         teamBlocks[i] = props.SeasonStats[i].blocks
    //         xAxesLabel[i] = props.SeasonStats[i].year
    //     }
    //     teamAssists = [...new Set(teamAssists)]
    //     teamPoints = [...new Set(teamPoints)]
    //     teamRebounds = [...new Set(teamRebounds)]
    //     teamBlocks = [...new Set(teamBlocks)]
    //     xAxesLabel = [...new Set(xAxesLabel)].sort()

    // }
    // else if (props.SeasonStats[0].sportname === "baseball") {
    //     let teamBattingAvg = []
    //     let teamOnBasePct = []
    //     let teamSluggingPct = []
    //     let teamFieldingPct = []
    //     let xAxesLabel = []
    //     for (let i = 0; i < props.SeasonStats.length; i++) {
    //         if (props.SeasonStats[i].index === "Career")
    //             break;
    //         teamBattingAvg[i] = props.SeasonStats[i].batting_average
    //         teamOnBasePct[i] = props.SeasonStats[i].on_base_percentage
    //         teamSluggingPct[i] = props.SeasonStats[i].slugging_percentage
    //         teamFieldingPct[i] = props.SeasonStats[i].fielding_percentage
    //         xAxesLabel[i] = props.SeasonStats[i].index
    //     }
    //     teamBattingAvg = [...new Set(teamBattingAvg)]
    //     teamOnBasePct = [...new Set(teamOnBasePct)]
    //     teamSluggingPct = [...new Set(teamSluggingPct)]
    //     teamFieldingPct = [...new Set(teamFieldingPct)]
    //     xAxesLabel = [...new Set(xAxesLabel)]
    //     const data = {
    //         labels: xAxesLabel,
    //         datasets: [
    //             {
    //                 label: "Batting Average",
    //                 data: teamBattingAvg,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#ff6361",
    //                 indexLabelFontColor: "#005FB8",
    //                 lineColor: "",
    //             },
    //             {
    //                 label: "On-Base Percentage",
    //                 data: teamOnBasePct,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#bc5090",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#2A9D8F",
    //             },
    //             {
    //                 label: "Slugging Percentage",
    //                 data: teamSluggingPct,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#58508d",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             },
    //             {
    //                 label: "Fielding Percentage",
    //                 data: teamFieldingPct,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#003f5c",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             }
    //         ]
    //     };
    //     return (
    //         <Line data={data} />
    //     );
    // }
    // else if (props.SeasonStats[0].sportname === "football") {
    //     let teamAssists = []
    //     let teamPoints = []
    //     let teamRebounds = []
    //     let teamBlocks = []
    //     let xAxesLabel = []
    //     for (let i = 0; i < props.SeasonStats.length; i++) {
    //         if (props.SeasonStats[i].index === "Career")
    //             break;
    //         teamAssists[i] = props.SeasonStats[i].assists
    //         teamPoints[i] = props.SeasonStats[i].points
    //         teamRebounds[i] = props.SeasonStats[i].total_rebounds
    //         teamBlocks[i] = props.SeasonStats[i].blocks
    //         xAxesLabel[i] = props.SeasonStats[i].index
    //     }
    //     teamAssists = [...new Set(teamAssists)]
    //     teamPoints = [...new Set(teamPoints)]
    //     teamRebounds = [...new Set(teamRebounds)]
    //     teamBlocks = [...new Set(teamBlocks)]
    //     xAxesLabel = [...new Set(xAxesLabel)]
    //     const data = {
    //         labels: xAxesLabel,
    //         datasets: [
    //             {
    //                 label: "Points",
    //                 data: teamPoints,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#ff6361",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#2A9D8F",
    //             },
    //             {
    //                 label: "Assists",
    //                 data: teamAssists,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#bc5090",
    //                 indexLabelFontColor: "#005FB8",
    //                 lineColor: "",
    //             },
    //             {
    //                 label: "Rebounds",
    //                 data: teamRebounds,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#58508d",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             },
    //             {
    //                 label: "Blocks",
    //                 data: teamBlocks,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#003f5c",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             }
    //         ]
    //     };
    //     return (
    //         <Line data={data} />
    //     );
    // }
    // else if (props.SeasonStats[0].sportname === "hockey") {
    //     let teamAssists = []
    //     let teamPoints = []
    //     let teamRebounds = []
    //     let teamBlocks = []
    //     let xAxesLabel = []
    //     for (let i = 0; i < props.SeasonStats.length; i++) {
    //         if (props.SeasonStats[i].index === "Career")
    //             break;
    //         teamAssists[i] = props.SeasonStats[i].assists
    //         teamPoints[i] = props.SeasonStats[i].points
    //         teamRebounds[i] = props.SeasonStats[i].total_rebounds
    //         teamBlocks[i] = props.SeasonStats[i].blocks
    //         xAxesLabel[i] = props.SeasonStats[i].index
    //     }
    //     teamAssists = [...new Set(teamAssists)]
    //     teamPoints = [...new Set(teamPoints)]
    //     teamRebounds = [...new Set(teamRebounds)]
    //     teamBlocks = [...new Set(teamBlocks)]
    //     xAxesLabel = [...new Set(xAxesLabel)]
    //     const data = {
    //         labels: xAxesLabel,
    //         datasets: [
    //             {
    //                 label: "Points",
    //                 data: teamPoints,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#ff6361",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#2A9D8F",
    //             },
    //             {
    //                 label: "Assists",
    //                 data: teamAssists,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#bc5090",
    //                 indexLabelFontColor: "#005FB8",
    //                 lineColor: "",
    //             },
    //             {
    //                 label: "Rebounds",
    //                 data: teamRebounds,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#58508d",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             },
    //             {
    //                 label: "Blocks",
    //                 data: teamBlocks,
    //                 fill: false,
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: "#003f5c",
    //                 indexLabelFontColor: "#2A9D8F",
    //                 lineColor: "#FFFFF",
    //             }
    //         ]
    //     };
    //     return (
    //         <Line data={data} />
    //     );
    // }

}

export default TeamCharts


