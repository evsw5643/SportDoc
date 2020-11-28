import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";
import { withRouter } from 'react-router-dom';

function PlayerCharts(props) {

    let statname1 = ""
    let statname2 = ""
    let statname3 = ""
    let statname4 = ""
    let chartTitle = ""
    let playerstat1 = []
    let playerstat2 = []
    let playerstat3 = []
    let playerstat4 = []

    let xAxesLabel = []
    console.log(props.SeasonStats[0])
    switch (props.SeasonStats[0].sportname) {
        case "basketball":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
                statname1 = "Points"
                statname2 = "Assists"
                statname3 = "Offensive-Rebounds"
                statname4 = "Three Point Attempts"
                for (let i = 0; i < props.SeasonStats.length; i++) {
                    if (props.SeasonStats[i].index === "Career")
                        break;
                    playerstat1[i] = props.SeasonStats[i].points
                    playerstat2[i] = props.SeasonStats[i].assists
                    playerstat3[i] = props.SeasonStats[i].offensive_rebounds
                    playerstat4[i] = props.SeasonStats[i].three_point_attempts


                    xAxesLabel[i] = props.SeasonStats[i].index
                }
                xAxesLabel.sort()
                break
            }
            else {
                chartTitle = "Defensive Stats"
                statname1 = "Defensive-Rebounds"
                statname2 = "Blocks"
                for (let i = 0; i < props.SeasonStats.length; i++) {
                    if (props.SeasonStats[i].index === "Career")
                        break;
                    playerstat1[i] = props.SeasonStats[i].defensive_rebounds
                    playerstat2[i] = props.SeasonStats[i].blocks

                    xAxesLabel[i] = props.SeasonStats[i].index
                }
                xAxesLabel.sort()
                break
            }
        case "baseball":
            if (props.title == "offensive") {
                chartTitle = "Batting Stats"
            }
            else {
                chartTitle = "Pitching Stats"
            }
            statname1 = "Batting Average"
            statname2 = "On-Base Percentage"
            statname3 = "Slugging Percentage"
            statname4 = "Fielding Percentage"
            for (let i = 0; i < props.SeasonStats.length; i++) {
                if (props.SeasonStats[i].index === "Career")
                    break;
                playerstat1[i] = props.SeasonStats[i].batting_average
                playerstat2[i] = props.SeasonStats[i].on_base_percentage
                playerstat3[i] = props.SeasonStats[i].slugging_percentage
                playerstat4[i] = props.SeasonStats[i].fielding_percentage


                xAxesLabel[i] = props.SeasonStats[i].index
            }
            break
        case "football":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
            }
            else {
                chartTitle = "Defensive Stats"
            }
            statname1 = "Points"
            statname2 = "Assists"
            statname3 = "Rebounds"
            statname4 = "Blocks"
            for (let i = 0; i < props.SeasonStats.length; i++) {
                if (props.SeasonStats[i].index === "Career")
                    break;
                playerstat1[i] = props.SeasonStats[i].assists
                playerstat2[i] = props.SeasonStats[i].points
                playerstat3[i] = props.SeasonStats[i].total_rebounds
                playerstat4[i] = props.SeasonStats[i].blocks


                xAxesLabel[i] = props.SeasonStats[i].index
            }
            break
        case "hockey":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
            }
            else {
                chartTitle = "Defensive Stats"
            }
            statname1 = "Points"
            statname2 = "Assists"
            statname3 = "Rebounds"
            statname4 = "Blocks"
            for (let i = 0; i < props.SeasonStats.length; i++) {
                if (props.SeasonStats[i].index === "Career")
                    break;
                playerstat1[i] = props.SeasonStats[i].assists
                playerstat2[i] = props.SeasonStats[i].points
                playerstat3[i] = props.SeasonStats[i].total_rebounds
                playerstat4[i] = props.SeasonStats[i].blocks


                xAxesLabel[i] = props.SeasonStats[i].index
            }
            break
    }
    playerstat1 = [...new Set(playerstat1)]
    playerstat2 = [...new Set(playerstat2)]
    playerstat3 = [...new Set(playerstat3)]
    playerstat4 = [...new Set(playerstat4)]
    xAxesLabel = [...new Set(xAxesLabel)]
    console.log("CHART TITLE: " + chartTitle)
    const data = {
        labels: xAxesLabel,
        datasets: [
            {
                label: statname1,
                data: playerstat1,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#ff6361",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#2A9D8F",
            },
            {
                label: statname2,
                data: playerstat2,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#bc5090",
                indexLabelFontColor: "#005FB8",
                lineColor: "",
            },
            {
                label: statname3,
                data: playerstat3,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#58508d",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#FFFFF",
            },
            {
                label: statname4,
                data: playerstat4,
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
    )

}

export default PlayerCharts


