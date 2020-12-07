import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";
import { withRouter } from 'react-router-dom';

function CompareCharts(props) {

    let statname1 = ""
    let statname2 = ""
    let statname3 = ""
    let statname4 = ""
    let statnameC1 = ""
    let statnameC2 = ""
    let statnameC3 = ""
    let statnameC4 = ""

    let chartTitle = ""
    let playerOneStat1 = []
    let playerOneStat2 = []
    let playerOneStat3 = []
    let playerOneStat4 = []
    let playerTwoStat1 = []
    let playerTwoStat2 = []
    let playerTwoStat3 = []
    let playerTwoStat4 = []

    let xAxesLabel = []

    switch (props.player1[0].sportname) {
        case "basketball":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
                statname1 = "Points"
                statname2 = "Assists"
                statname3 = "Offensive-Rebounds"
                statname4 = "Three Point Attempts"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    playerOneStat1[i] = props.player1[i].points
                    playerOneStat2[i] = props.player1[i].assists
                    playerOneStat3[i] = props.player1[i].offensive_rebounds
                    playerOneStat4[i] = props.player1[i].three_point_attempts
                    xAxesLabel[i] = props.player1[i].index
                }
                xAxesLabel.sort()
                break
            }
            else {
                chartTitle = "Defensive Stats"
                statname1 = "Defensive-Rebounds"
                statname2 = "Blocks"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    playerOneStat1[i] = props.player1[i].defensive_rebounds
                    playerOneStat2[i] = props.player1[i].blocks

                    xAxesLabel[i] = props.player1[i].index
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
            for (let i = 0; i < props.player1.length; i++) {
                if (props.player1[i].index === "Career")
                    break;
                playerOneStat1[i] = props.player1[i].batting_average
                playerOneStat2[i] = props.player1[i].on_base_percentage
                playerOneStat3[i] = props.player1[i].slugging_percentage
                playerOneStat4[i] = props.player1[i].fielding_percentage


                xAxesLabel[i] = props.player1[i].index
            }
            break
        case "football":
            //!MASSIVE CASE STATEMENT FOR EVERY POSITION IN FOOTBALL INCOMING
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
            for (let i = 0; i < props.player1.length; i++) {
                if (props.player1[i].index === "Career")
                    break;
                playerOneStat1[i] = props.player1[i].assists
                playerOneStat2[i] = props.player1[i].points
                playerOneStat3[i] = props.player1[i].total_rebounds
                playerOneStat4[i] = props.player1[i].blocks


                xAxesLabel[i] = props.player1[i].index
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
            for (let i = 0; i < props.player1.length; i++) {
                if (props.player1[i].index === "Career")
                    break;
                playerOneStat1[i] = props.player1[i].assists
                playerOneStat2[i] = props.player1[i].points
                playerOneStat3[i] = props.player1[i].total_rebounds
                playerOneStat4[i] = props.player1[i].blocks


                xAxesLabel[i] = props.player1[i].index
            }
            break
    }
    playerOneStat1 = [...new Set(playerOneStat1)]
    playerOneStat2 = [...new Set(playerOneStat2)]
    playerOneStat3 = [...new Set(playerOneStat3)]
    playerOneStat4 = [...new Set(playerOneStat4)]
    xAxesLabel = [...new Set(xAxesLabel)]
    const data = {
        labels: xAxesLabel,
        datasets: [
            {
                label: statname1,
                data: playerOneStat1,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#ff6361",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#2A9D8F",
            },
            {
                label: statname2,
                data: playerOneStat2,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#bc5090",
                indexLabelFontColor: "#005FB8",
                lineColor: "",
            },
            {
                label: statname3,
                data: playerOneStat3,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: "#58508d",
                indexLabelFontColor: "#2A9D8F",
                lineColor: "#FFFFF",
            },
            {
                label: statname4,
                data: playerOneStat4,
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

export default CompareCharts


