import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";

function TeamCharts(props) {

    if(props.SeasonStats[0].sportname === "basketball"){
        let teamAssists = []
        let teamPoints = []
        let teamRebounds = []
        let teamBlocks = []
        let xAxesLabel = []
        for(let i = 0; i < props.SeasonStats.length; i++){
            teamAssists[i] = props.SeasonStats[i].assists
            teamPoints[i] = props.SeasonStats[i].points
            teamRebounds[i] = props.SeasonStats[i].total_rebounds
            teamBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].year       
        }
        teamAssists = [...new Set(teamAssists)]
        teamPoints = [...new Set(teamPoints)]
        teamRebounds = [...new Set(teamRebounds)]
        teamBlocks = [...new Set(teamBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)].sort()
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: teamPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: teamAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: teamRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: teamBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        for(let i = 0; i < xAxesLabel.length; i++){
            console.log(xAxesLabel)
        }
        return (
            <Line data={data}/>
        );

    }
    else if(props.SeasonStats[0].sportname === "baseball"){
        let teamBattingAvg = []
        let teamOnBasePct = []
        let teamSluggingPct = []
        let teamFieldingPct = []
        let xAxesLabel = []
        for(let i = 0; i < props.SeasonStats.length; i++){
            if(props.SeasonStats[i].index === "Career")
                break;
            teamBattingAvg[i] = props.SeasonStats[i].batting_average
            teamOnBasePct[i] = props.SeasonStats[i].on_base_percentage
            teamSluggingPct[i] = props.SeasonStats[i].slugging_percentage
            teamFieldingPct[i] = props.SeasonStats[i].fielding_percentage
            xAxesLabel[i] = props.SeasonStats[i].index       
        }
        teamBattingAvg = [...new Set(teamBattingAvg)]
        teamOnBasePct = [...new Set(teamOnBasePct)]
        teamSluggingPct = [...new Set(teamSluggingPct)]
        teamFieldingPct = [...new Set(teamFieldingPct)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Batting Average",
                    data: teamBattingAvg,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "On-Base Percentage",
                    data: teamOnBasePct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Slugging Percentage",
                    data: teamSluggingPct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Fielding Percentage",
                    data: teamFieldingPct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data}/>
        );
    }
    else if(props.SeasonStats[0].sportname === "football"){
        let teamAssists = []
        let teamPoints = []
        let teamRebounds = []
        let teamBlocks = []
        let xAxesLabel = []
        for(let i = 0; i < props.SeasonStats.length; i++){
            if(props.SeasonStats[i].index === "Career")
                break;
            teamAssists[i] = props.SeasonStats[i].assists
            teamPoints[i] = props.SeasonStats[i].points
            teamRebounds[i] = props.SeasonStats[i].total_rebounds
            teamBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].index       
        }
        teamAssists = [...new Set(teamAssists)]
        teamPoints = [...new Set(teamPoints)]
        teamRebounds = [...new Set(teamRebounds)]
        teamBlocks = [...new Set(teamBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: teamPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: teamAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: teamRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: teamBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data}/>
        );
    }
    else if(props.SeasonStats[0].sportname === "hockey"){
        let teamAssists = []
        let teamPoints = []
        let teamRebounds = []
        let teamBlocks = []
        let xAxesLabel = []
        for(let i = 0; i < props.SeasonStats.length; i++){
            if(props.SeasonStats[i].index === "Career")
                break;
            teamAssists[i] = props.SeasonStats[i].assists
            teamPoints[i] = props.SeasonStats[i].points
            teamRebounds[i] = props.SeasonStats[i].total_rebounds
            teamBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].index       
        }
        teamAssists = [...new Set(teamAssists)]
        teamPoints = [...new Set(teamPoints)]
        teamRebounds = [...new Set(teamRebounds)]
        teamBlocks = [...new Set(teamBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: teamPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: teamAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: teamRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: teamBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data}/>
        );
    }
    
}

export default TeamCharts


