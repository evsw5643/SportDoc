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

    switch (props.SeasonStats[0].sportname) {
        case "basketball":
            if (props.title === "offensive") {
                chartTitle = "Offensive Stats"
                statname1 = "Points"
                statname2 = "Assist"
                statname3 = "Field Goals"
                statname4 = "Offensive-Rebounds"
                for (let i = 0; i < props.SeasonStats.length; i++) {
                    teamstat1[i] = props.SeasonStats[i].points
                    teamstat2[i] = props.SeasonStats[i].assists
                    teamstat3[i] = props.SeasonStats[i].field_goals
                    teamstat4[i] = props.SeasonStats[i].offensive_rebounds

                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }
            else {
                chartTitle = "Defensive Stats"
                statname1 = "Defensive Rebounds"
                statname2 = "Blocks"
                for (let i = 0; i < props.SeasonStats.length; i++) {
                    teamstat1[i] = props.SeasonStats[i].defensive_rebounds
                    teamstat2[i] = props.SeasonStats[i].blocks
                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }
            break
        case "baseball":
            if (props.title == "offensive") {
                chartTitle = "Batting Stats"
                statname1 = "Batting Average"
                statname2 = "On-Base Percentage"
                statname3 = "Slugging Percentage"
                statname4 = "Fielding Percentage"
                
                for (let i = 0; i < props.SeasonStats.length; i++) {
                    teamstat1[i] = props.SeasonStats[i].batting_average
                    teamstat2[i] = props.SeasonStats[i].on_base_percentage
                    teamstat3[i] = props.SeasonStats[i].slugging_percentage
                    teamstat4[i] = props.SeasonStats[i].fielding_percentage

                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }
            else {
                chartTitle = "Pitching Stats"
                statname1 = "Hits"
                statname2 = "Hits Allowed"
                statname3 = "Base on Balls"
                statname4 = "Strikeouts"

                for (let i = 0; i < props.SeasonStats.length; i++) {
                    teamstat1[i] = props.SeasonStats[i].hits
                    teamstat2[i] = props.SeasonStats[i].hits_allowed
                    teamstat3[i] = props.SeasonStats[i].bases_on_balls
                    teamstat4[i] = props.SeasonStats[i].strikeouts

                    xAxesLabel[i] = props.SeasonStats[i].year
                }
            }

            break
        case "hockey":
            break
    }
    teamstat1 = [...new Set(teamstat1)]
    teamstat2 = [...new Set(teamstat2)]
    teamstat3 = [...new Set(teamstat3)]
    teamstat4 = [...new Set(teamstat4)]
    xAxesLabel = [...new Set(xAxesLabel)].sort()
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
    

}

export default TeamCharts


