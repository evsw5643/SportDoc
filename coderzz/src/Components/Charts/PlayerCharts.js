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
            console.log(props.player1)
            if (props.title == "offensive") {
                chartTitle = "Batting Stats"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    statname1 = "Batting Average"
                    statname2 = "On-Base Percentage"
                    statname3 = "Slugging Percentage"
                    statname4 = "Fielding Percentage"
                    playerstat1[i] = props.player1[i].batting_average
                    playerstat2[i] = props.player1[i].on_base_percentage
                    playerstat3[i] = props.player1[i].slugging_percentage
                    playerstat4[i] = props.player1[i].fielding_percentage


                    xAxesLabel[i] = props.player1[i].index
                }
                xAxesLabel.sort()
            }
            else {
                chartTitle = "Pitching Stats"
                for (let i = 0; i < props.player1.length; i++) {
                    if (props.player1[i].index === "Career")
                        break;
                    statname1 = "Hits"
                    statname2 = "Runs"
                    statname3 = "Base on Balls"
                    statname4 = "Putouts"
                    playerstat1[i] = props.player1[i].hits
                    playerstat2[i] = props.player1[i].runs
                    playerstat3[i] = props.player1[i].bases_on_balls
                    playerstat4[i] = props.player1[i].putouts


                    xAxesLabel[i] = props.player1[i].index
                }
                xAxesLabel.sort()
            }
            break
        case "football":
            console.log(props.player1)
            for (let i = 0; i < props.player1.length; i++) {
                if (props.player1[i].index === "Career" || props.player1[i].index === undefined)
                    break
                switch (props.player1[i].position.toUpperCase()) {
                    case "C":
                        if (props.title === "offensive") {
                            chartTitle = "Approx Player Value (APR)"
                            statname1 = "APR"
                            playerstat1[i] = (props.player1[i].approximate_value)
                        }
                        else {
                            chartTitle = "Fumbles"
                            statname1 = ("Fumbles")
                            statname2 = ("Touchdowns")
                            playerstat1[i] = (props.player1[i].fumbles)
                            playerstat2[i] = (parseInt(props.player1[i].rushing_and_receiving_touchdowns) + parseInt(props.player1[i].passing_touchdowns))
                            statname3 = ("Quarterback Rating")
                            playerstat3[i] = props.player1[i].espn_qbr
                        }
                        break
                    case "QB":
                        if (props.title === "offensive") {
                            chartTitle = "Passing Stats"
                            statname1 = "Passing Yards"
                            playerstat1[i] = (props.player1[i].passing_yards)
                        }
                        else {
                            chartTitle = "Rushing Stats"
                            statname1 = ("Rushing Yards")
                            statname2 = ("Touchdowns")
                            playerstat1[i] = (props.player1[i].rush_yards)
                            playerstat2[i] = (parseInt(props.player1[i].rushing_and_receiving_touchdowns) + parseInt(props.player1[i].passing_touchdowns))
                            statname3 = ("Quarterback Rating")
                            playerstat3[i] = props.player1[i].espn_qbr
                        }
                        break
                    case "TE":
                        if (props.title === "offensive") {
                            chartTitle = "Passing Stats"
                            statname1 = "Passing Yards"
                            playerstat1[i] = (props.player1[i].passing_yards)
                        }
                        else {
                            chartTitle = "Rushing Stats"
                            statname1 = ("Rushing Yards")
                            statname2 = ("Touchdowns")
                            playerstat1[i] = (props.player1[i].rush_yards)
                            playerstat2[i] = (parseInt(props.player1[i].rushing_and_receiving_touchdowns) + parseInt(props.player1[i].passing_touchdowns))
                            statname3 = ("Quarterback Rating")
                            playerstat3[i] = props.player1[i].espn_qbr
                        }
                        break
                    case "DE":
                        statname1 = ("Tackles")
                        statname2 = ("Interceptions")
                        statname3 = ("Sacks")
                        statname4 = ("Fumbles Forced")
                        playerstat1[i] = (props.player1[i].tackles)
                        playerstat2[i] = (props.player1[i].interceptions)
                        playerstat3[i] = (props.player1[i].sacks)
                        playerstat4[i] = (props.player1[i].fumbles_forced)
                        break
                    case "LDE":
                        statname1 = ("Tackles")
                        statname2 = ("Interceptions")
                        statname3 = ("Sacks")
                        statname4 = ("Fumbles Forced")
                        playerstat1[i] = (props.player1[i].tackles)
                        playerstat2[i] = (props.player1[i].interceptions)
                        playerstat3[i] = (props.player1[i].sacks)
                        playerstat4[i] = (props.player1[i].fumbles_forced)
                        break
                    case "RDE":
                        statname1 = ("Tackles")
                        statname2 = ("Interceptions")
                        statname3 = ("Sacks")
                        statname4 = ("Fumbles Forced")
                        playerstat1[i] = (props.player1[i].tackles)
                        playerstat2[i] = (props.player1[i].interceptions)
                        playerstat3[i] = (props.player1[i].sacks)
                        playerstat4[i] = (props.player1[i].fumbles_forced)
                        break
                    default:
                        if (props.title === "offensive") {
                            chartTitle = "Passing Stats"
                            statname1 = "Passing Yards"
                            playerstat1[i] = (props.player1[i].passing_yards)
                        }
                        else {
                            chartTitle = "Rushing Stats"
                            statname1 = ("Rushing Yards")
                            statname2 = ("Touchdowns")
                            playerstat1[i] = (props.player1[i].rush_yards)
                            playerstat2[i] = (parseInt(props.player1[i].rushing_and_receiving_touchdowns) + parseInt(props.player1[i].passing_touchdowns))
                            statname3 = ("Quarterback Rating")
                            playerstat3[i] = props.player1[i].espn_qbr
                        }
                        break
                }
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
                    playerstat1[i] = props.player1[i].goals
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


