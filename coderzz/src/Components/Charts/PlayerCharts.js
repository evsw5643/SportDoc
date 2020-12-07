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
    switch (props.player1[0].sportname) {
        case "basketball":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
                statname1 = "Points"
                statname2 = "Assists"
                statname3 = "Offensive-Rebounds"
                statname4 = "Field Goals"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    playerstat1[i] = props.player1[i].points
                    playerstat2[i] = props.player1[i].assists
                    playerstat3[i] = props.player1[i].offensive_rebounds
                    playerstat4[i] = props.player1[i].field_goals
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
                    playerstat1[i] = props.player1[i].defensive_rebounds
                    playerstat2[i] = props.player1[i].blocks
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
                playerstat1[i] = props.player1[i].batting_average
                playerstat2[i] = props.player1[i].on_base_percentage
                playerstat3[i] = props.player1[i].slugging_percentage
                playerstat4[i] = props.player1[i].fielding_percentage


                xAxesLabel[i] = props.player1[i].index
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
            for (let i = 0; i < props.player1.length; i++) {
                if (props.player1[i].index === "Career")
                    break;
                playerstat1[i] = props.player1[i].assists
                playerstat2[i] = props.player1[i].points
                playerstat3[i] = props.player1[i].total_rebounds
                playerstat4[i] = props.player1[i].blocks


                xAxesLabel[i] = props.player1[i].index
            }
            break
        case "hockey":
            if (props.title == "offensive") {
                chartTitle = "Offensive Stats"
                statname1 = "Goals"
                statname2 = "Assists"
                statname3 = "Offensive Point Shares"
                statname4 = "Goals Created"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    playerstat1[i] = props.player1[i].points
                    playerstat2[i] = props.player1[i].assists
                    playerstat3[i] = props.player1[i].offensive_point_shares
                    playerstat4[i] = props.player1[i].goals_created
                    xAxesLabel[i] = props.player1[i].index
                }
                xAxesLabel.sort()
                break
            }
            else {
                chartTitle = "Defensive Stats"
                statname1 = "Defensive Point Shares"
                statname2 = "Giveaways"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    playerstat1[i] = props.player1[i].defensive_point_shares
                    playerstat2[i] = props.player1[i].giveaways
                    xAxesLabel[i] = props.player1[i].index
                }
                xAxesLabel.sort()
                break
            }
    }
    playerstat1 = [...new Set(playerstat1)]
    playerstat2 = [...new Set(playerstat2)]
    playerstat3 = [...new Set(playerstat3)]
    playerstat4 = [...new Set(playerstat4)]
    xAxesLabel = [...new Set(xAxesLabel)]
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


