import React, { useState, useEffect } from 'react';
import "./player_info.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Player(props) {

  const [loading, setloading] = useState(true);
  const [player, setplayer] = useState([])
  const [search, setsearch] = useState("")
  const [sport, setsport] = useState("")

  useEffect(() => {

    setsport(props.sport)
    api(props.player, props.sport)
  }, [])

  function api(apiPlayer, apiSport) {
    fetch(`/${apiSport}/getplayer/${apiPlayer}`)
      .then(res => res.json())
      .then(
        (result) => {
          setplayer(result)
          setloading(false)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )

  }
  function handleChange(event) {
    setsearch(event.target.value);
  }

  function handleChangeD(event) {
    setsport(event.target.value);
  }

  function reload() {
    setloading(true)
    api(search, sport)
  }

  //  window.onload = function () {
  //     var chart = new CanvasJS.Chart("chartContainer", {
  //         title: {
  //             text: "Shooting Percentage"
  //         },
  //         data: [
  //             {
  //                 type: "column",
  //                 name: "Preseason",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 49.3 },
  //                     { label: "Mid Range", y: 15 },
  //                     { label: "Three Point", y: 34.8 }
  //                 ]
  //             },

  //             {
  //                 type: "column",
  //                 name: "Regular Season",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 70 },
  //                     { label: "Mid Range", y: 20 },
  //                     { label: "Three Point", y: 20 }
  //                 ]
  //             },

  //             {
  //                 type: "column",
  //                 name: "Finals",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 90 },
  //                     { label: "Mid Range", y: 30 },
  //                     { label: "Three Point", y: 40 }
  //                 ]
  //             }
  //         ],

  //         axisY: {
  //             suffix: "%"
  //         }
  //     });
  //     chart.render();
  // }
  if (loading) {
    return (
      <div className="d-flex justify-content-center" style={{ marginTop: '5px' }}>
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (!loading) {
    return (
      <div className="content">
        <div className="search_box">
          <form>
            <label>
              <input type="text" onChange={handleChange} />
            </label>
            <select id="sports" onChange={handleChangeD}>
              <option value="" selected disabled hidden>Choose Sport</option>
              <option value="basketball">Basketball</option>
              <option value="baseball">Baseball</option>
              <option value="football">Football</option>
              <option value="soccer">Soccer</option>
              <option value="hockey">Hockey</option>
            </select>
            <Link to={"/player/" + sport + "/" + search}> <input className="submit_button" type="submit" value="Submit" onClick={reload} /> </Link>
          </form>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card player_stat_card">
              <h2 className="card-title player_stat_title"> {player[0].player_name} </h2>
              <div className="card-body player_stat_body">
                <img className="card-img-top player_stat_img"
                  src={`https://www.basketball-reference.com/req/202010061/images/players/${player[0].player_id}.jpg`}
                  alt="Sample Image" />
                <p className="card-text player_stat_text">
                  <h3>Career Points:</h3> {player[player.length - 1].points}
                  <br />
                  <h3>Career Assists:</h3> {player[player.length - 1].assists}
                  <br />
                  <h3>Career Rebounds: </h3> {player[player.length - 1].total_rebounds}
                  <br />
                  <h3>Career Blocks: </h3> {player[player.length - 1].blocks}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}


export default Player;