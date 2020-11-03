// import React, { useState, useEffect } from 'react';

// function Player(props) {

//     const [loading, setloading] = useState(true);
//     const [player, setplayer] = useState([])
//     const [search, setsearch] = useState("")
//     const [sport, setsport] = useState("")

//     useEffect(() => {
//         setloading(true)
//         setsport(props.sport)
//         api(props.player, props.sport)
//     }, [props.sport, props.player])

//     function api(apiPlayer, apiSport) {
//         fetch(`/${apiSport}/getplayer/${apiPlayer}`)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setplayer(result)
//                     setloading(false)
//                 },
//                 (error) => {
//                     console.log(error)
//                     setloading(false)
//                 }
//             )
//     }
//     function handleChange(event) {
//         setsearch(event.target.value);
//     }

//     function handleChangeD(event) {
//         setsport(event.target.value);
//     }

//     function linkGen(type, sport, id) {
//         if (type == "player") {
//             switch (sport) {
//                 case "basketball":
//                     return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
//                 case "football":
//                     return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_2019.jpg`)
//                 case "baseball":
//                     return (`https://www.baseball-reference.com/req/202007270/images/headshots/c/c755fefc_sabr.jpg`)
//                 case "hockey":
//                     return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2017.jpg`)
//                 case "soccer":
//                     return (`https://images-na.ssl-images-amazon.com/images/I/61Jigwd1kKL._AC_SL1500_.jpg`)
//             }
//         } else if (type == "team") {
//             switch (sport) {
//                 case "basketball":
//                     return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202010091/tlogo/bbr/${id}-2020.png`)
//                 case "football":
//                     return (Blank)
//                 case "baseball":
//                     return (Blank)
//                 case "hockey":
//                     return (Blank)
//                 case "soccer":
//                     return (Blank)
//             }
//         }
//     }

// export const GetPlayerData = [
//     {
//         player_img: 
//         career_points: {player[player.length - 1].points }
//         // career_assists: {player[player.length - 1].assists},
//         // career_blocks: {player[player.length - 1].blocks}
//     }
// ]