import React, { useState, useEffect } from 'react';
import "./team_info.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Team(props) {

  const [loading, setloading] = useState(true);
  const [team, setteam] = useState([])
  const [search, setsearch] = useState("")
  
  useEffect(() => {
    api(props.team)
  }, [])

  function api(apiTeam){
    fetch(`/getteam/${apiTeam}`)
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

  function reload(){
    setloading(true)
    console.log(search)
    api(search)
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
          <Link to={"/team/" + search}> <input className="submit_button" type="submit" value="Submit" onClick={reload}/> </Link>
        </form>
        </div>
        <div>
          <div className="row">
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
                          src={`https://d2p3bygnnzw9w3.cloudfront.net/req/202010091/tlogo/bbr/${team[0].abbreviation}-2020.png`}
                          alt="Sample Image" 
                          className="team_stat_img"/>
                        </div>
                      </div>
                    </div>
                    <h1>Year:</h1>  {team[team.length-1].year}  
                    <br />
                    <h1>Total Points:</h1>  {team[team.length-1].points} 
                    <br />
                    <h1>Total Assists:</h1> {team[team.length-1].assists} 
                    <br />
                    <h1>Total Rebounds:</h1> {team[team.length-1].total_rebounds} 
                    <br />
                    <h1>Total Steals:</h1> {team[team.length-1].steals} 
                    <br />
                    <h1>Total Blocks:</h1> {team[team.length-1].blocks} 
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