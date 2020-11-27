import React from 'react'
import { Line, Bar, HorizontalBar } from "react-chartjs-2";

function PlayerCharts(props) {
    if (props.SeasonStats[0].sportname === "basketball") {
        let playerAssists = []
        let playerPoints = []
        let playerRebounds = []
        let playerBlocks = []
        let xAxesLabel = []
        for (let i = 0; i < props.SeasonStats.length; i++) {
            if (props.SeasonStats[i].index === "Career")
                break;
            playerAssists[i] = props.SeasonStats[i].assists
            playerPoints[i] = props.SeasonStats[i].points
            playerRebounds[i] = props.SeasonStats[i].total_rebounds
            playerBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].index
        }
        playerAssists = [...new Set(playerAssists)]
        playerPoints = [...new Set(playerPoints)]
        playerRebounds = [...new Set(playerRebounds)]
        playerBlocks = [...new Set(playerBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: playerPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: playerAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: playerRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: playerBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data} />
        );
    }
    else if (props.SeasonStats[0].sportname === "baseball") {
        let playerBattingAvg = []
        let playerOnBasePct = []
        let playerSluggingPct = []
        let playerFieldingPct = []
        let xAxesLabel = []
        for (let i = 0; i < props.SeasonStats.length; i++) {
            if (props.SeasonStats[i].index === "Career")
                break;
            playerBattingAvg[i] = props.SeasonStats[i].batting_average
            playerOnBasePct[i] = props.SeasonStats[i].on_base_percentage
            playerSluggingPct[i] = props.SeasonStats[i].slugging_percentage
            playerFieldingPct[i] = props.SeasonStats[i].fielding_percentage
            xAxesLabel[i] = props.SeasonStats[i].index
        }
        playerBattingAvg = [...new Set(playerBattingAvg)]
        playerOnBasePct = [...new Set(playerOnBasePct)]
        playerSluggingPct = [...new Set(playerSluggingPct)]
        playerFieldingPct = [...new Set(playerFieldingPct)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Batting Average",
                    data: playerBattingAvg,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "On-Base Percentage",
                    data: playerOnBasePct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Slugging Percentage",
                    data: playerSluggingPct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Fielding Percentage",
                    data: playerFieldingPct,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data} />
        );
    }
    else if (props.SeasonStats[0].sportname === "football") {
        let playerAssists = []
        let playerPoints = []
        let playerRebounds = []
        let playerBlocks = []
        let xAxesLabel = []
        for (let i = 0; i < props.SeasonStats.length; i++) {
            if (props.SeasonStats[i].index === "Career")
                break;
            playerAssists[i] = props.SeasonStats[i].assists
            playerPoints[i] = props.SeasonStats[i].points
            playerRebounds[i] = props.SeasonStats[i].total_rebounds
            playerBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].index
        }
        playerAssists = [...new Set(playerAssists)]
        playerPoints = [...new Set(playerPoints)]
        playerRebounds = [...new Set(playerRebounds)]
        playerBlocks = [...new Set(playerBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: playerPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: playerAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: playerRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: playerBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data} />
        );
    }
    else if (props.SeasonStats[0].sportname === "hockey") {
        let playerAssists = []
        let playerPoints = []
        let playerRebounds = []
        let playerBlocks = []
        let xAxesLabel = []
        for (let i = 0; i < props.SeasonStats.length; i++) {
            if (props.SeasonStats[i].index === "Career")
                break;
            playerAssists[i] = props.SeasonStats[i].assists
            playerPoints[i] = props.SeasonStats[i].points
            playerRebounds[i] = props.SeasonStats[i].total_rebounds
            playerBlocks[i] = props.SeasonStats[i].blocks
            xAxesLabel[i] = props.SeasonStats[i].index
        }
        playerAssists = [...new Set(playerAssists)]
        playerPoints = [...new Set(playerPoints)]
        playerRebounds = [...new Set(playerRebounds)]
        playerBlocks = [...new Set(playerBlocks)]
        xAxesLabel = [...new Set(xAxesLabel)]
        const data = {
            labels: xAxesLabel,
            datasets: [
                {
                    label: "Points",
                    data: playerPoints,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#ff6361",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#2A9D8F",
                },
                {
                    label: "Assists",
                    data: playerAssists,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#bc5090",
                    indexLabelFontColor: "#005FB8",
                    lineColor: "",
                },
                {
                    label: "Rebounds",
                    data: playerRebounds,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#58508d",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                },
                {
                    label: "Blocks",
                    data: playerBlocks,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: "#003f5c",
                    indexLabelFontColor: "#2A9D8F",
                    lineColor: "#FFFFF",
                }
            ]
        };
        return (
            <Line data={data} />
        );
    }

}

export default PlayerCharts


