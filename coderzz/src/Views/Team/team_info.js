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
    setsearch(event.target.value);
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
                {<h4 className="card-title"> {team[0].name} </h4>}
                <div className="card-body">
                  <p className="card-text" style={{ marginTop: 'auto', color: 'crimson' }}>
                    Season: {team[team.length-1].year}  <br />
                    Points:  {team[team.length-1].points} <br />
                    Assists: {team[team.length-1].assists} <br />
                    Rebounds: {team[team.length-1].total_rebounds} <br />
                    Steals: {team[team.length-1].steals} <br />
                    Blocks: {team[team.length-1].blocks} <br />
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