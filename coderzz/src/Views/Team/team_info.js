import React, { useState, useEffect } from 'react';
import "./team_info.css"
import Blank from '../blank.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Team(props) {

  const [loading, setloading] = useState(true);
  const [team, setteam] = useState([])
  const [search, setsearch] = useState("")
  const [sport, setsport] = useState("")

  useEffect(() => {
    setloading(true)
    setsport(props.sport)
    api(props.team, props.sport)
  }, [props.sport, props.team])

  function api(apiTeam, apiSport) {
    fetch(`/${apiSport}/getteam/${apiTeam}`)
      .then(res => res.json())
      .then(
        (result) => {
          setteam(result)
          setloading(false)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }

  function handleChange(event) {
    setsearch(event.target.value.toUpperCase());
  }

  function handleChangeD(event) {
    setsport(event.target.value);
  }

  function linkGen(type, sport, id) {
    if (type == "player") {
      switch (sport) {
        case "basketball":
          return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
        case "football":
          return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_2019.jpg`)
        case "baseball":
          return (`https://www.baseball-reference.com/req/202007270/images/headshots/c/c755fefc_sabr.jpg`)
        case "hockey":
          return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2017.jpg`)
        case "soccer":
          return (`https://images-na.ssl-images-amazon.com/images/I/61Jigwd1kKL._AC_SL1500_.jpg`)
      }
    } else if (type == "team") {
      switch (sport) {
        case "basketball":
          return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202010091/tlogo/bbr/${id}-2020.png`)
        case "football":
          return (Blank)
        case "baseball":
          return (Blank)
        case "hockey":
          return (Blank)
        case "soccer":
          return (Blank)
      }
    }
  }

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
            <Link to={"/team/" + sport + "/" + search}> <input className="submit_button" type="submit" value="Submit" /> </Link>
          </form>
        </div>
        <div>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <div className="card team-card">
                <div className="card-body team_stat_card">
                  <p className="card-text team_stat_text">
                    <div className="container team_stat_title_container">
                      <div className="row">
                        <div className="col">
                          <h2 className="card-title team_stat_title"> {team[0].name} </h2>
                        </div>
                        <div className="col">
                          <img className="card-img-top"
                            src={linkGen("team", sport, team[0].abbreviation)}
                            alt="Sample Image"
                            className="team_stat_img" />
                        </div>
                      </div>
                    </div>
                    <h1>Year:</h1>  {team[team.length - 1].year}
                    <br />
                    <h1>Total Points:</h1>  {team[team.length - 1].points}
                    <br />
                    <h1>Total Assists:</h1> {team[team.length - 1].assists}
                    <br />
                    <h1>Total Rebounds:</h1> {team[team.length - 1].total_rebounds}
                    <br />
                    <h1>Total Steals:</h1> {team[team.length - 1].steals}
                    <br />
                    <h1>Total Blocks:</h1> {team[team.length - 1].blocks}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}


export default Team;