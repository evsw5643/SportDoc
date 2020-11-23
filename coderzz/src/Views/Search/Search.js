import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../../Components/Sidebar/Sidebar.css"

function Search() {




    const [baplayers, setbaplayers] = useState([])
    const [bsplayers, setbsplayers] = useState([])
    const [fplayers, setfplayers] = useState([])
    const [hplayers, sethplayers] = useState([])
    const [bateams, setbateams] = useState([])
    const [bsteams, setbsteams] = useState([])
    const [fteams, setfteams] = useState([])
    const [hteams, sethteams] = useState([])
    const [terms, setterms] = useState([])
    const [dropdown, setdropdown] = useState(false)
    const [dropp, setdropp] = useState([])

    useEffect(() => {
        bigApi()
    }, [])

    function baplayerGet() {
        fetch(`/basketball/getplayers`)
            .then(res => res.json())
            .then(
                (result) => {
                    setbaplayers(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function bsplayerGet() {
        fetch(`/baseball/getplayers`)
            .then(res => res.json())
            .then(
                (result) => {
                    setbsplayers(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function fplayerGet() {
        fetch(`/football/getplayers`)
            .then(res => res.json())
            .then(
                (result) => {
                    setfplayers(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function hplayerGet() {
        fetch(`/hockey/getplayers`)
            .then(res => res.json())
            .then(
                (result) => {
                    sethplayers(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function bateamGet() {
        fetch(`/basketball/getteams`)
            .then(res => res.json())
            .then(
                (result) => {
                    setbateams(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function bsteamGet() {
        fetch(`/baseball/getteams`)
            .then(res => res.json())
            .then(
                (result) => {
                    setbsteams(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function fteamGet() {
        fetch(`/football/getteams`)
            .then(res => res.json())
            .then(
                (result) => {
                    setfteams(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function hteamGet() {
        fetch(`/hockey/getteams`)
            .then(res => res.json())
            .then(
                (result) => {
                    sethteams(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function bigApi() {
        baplayerGet()
        bsplayerGet()
        fplayerGet()
        hplayerGet()
        bateamGet()
        bsteamGet()
        fteamGet()
        hteamGet()
    }

    function handleChange(event) {
        setterms(baplayers.concat(bsplayers, fplayers, hplayers, bateams, bsteams, fteams, hteams))
        createDropdown(event.target.value)
    }

    function createDropdown(stro) {
        let jsx = []
        let len = stro.length
        if (len >= 3) {
            let found = false
            for (let i = 0; i < terms.length; i++) {
                switch (terms[i].sportname) {
                    case "basketball":
                        terms[i].icon = "basketball-ball"
                        break;
                    case "hockey":
                        terms[i].icon = "hockey-puck"
                        break;
                    case "baseball":
                        terms[i].icon = "baseball-ball"
                        break;
                    case "football":
                        terms[i].icon = "football-ball"
                        break;
                    default:
                        terms[i].icon = "table-tennis"
                        break;
                }
                if (terms[i].player_name) {
                    let newName = terms[i].player_name.split(" ")
                    if (newName[0].substr(0, len).toUpperCase() === stro.toUpperCase()) {
                        jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}><i className="fas fa-user"></i> <i className={`fas fa-${terms[i].icon}`}></i> <strong>{newName[0].substr(0, len)}</strong>{newName[0].substr(len)} {newName[1]} </Link></div>)
                        found = true
                    } else if (newName[1] && newName[1].substr(0, len).toUpperCase() === stro.toUpperCase()) {
                        jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}><i className="fas fa-user"></i> <i className={`fas fa-${terms[i].icon}`}></i> {newName[0]} <strong>{newName[1].substr(0, len)}</strong>{newName[1].substr(len)} </Link></div>)
                        found = true
                    } else if (terms[i].player_name.substr(0, len).toUpperCase() === stro.toUpperCase()) {
                        jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}><i className="fas fa-user"></i> <i className={`fas fa-${terms[i].icon}`}></i> <strong>{terms[i].player_name.substr(0, len)}</strong>{terms[i].player_name.substr(len)} </Link></div>)
                        found = true
                    }
                } else if (terms[i].abbreviation) {
                    // let newName = terms[i].name.split(" ")
                    // if (newName[0].substr(0, len).toUpperCase() === stro.toUpperCase()) {
                    //     jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/team/${terms[i].sportname}/${terms[i].abbreviation}`}><i className="fas fa-users"></i> <i className={`fas fa-${terms[i].icon}`}></i> <strong>{newName[0].substr(0, len)}</strong>{newName[0].substr(len)} {newName[1]} </Link></div>)
                    //     found = true
                    // } else if (newName[1] && newName[1].substr(0, len).toUpperCase() === stro.toUpperCase()) {
                    //     jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/team/${terms[i].sportname}/${terms[i].abbreviation}`}><i className="fas fa-users"></i> <i className={`fas fa-${terms[i].icon}`}></i> {newName[0]} <strong>{newName[1].substr(0, len)}</strong>{newName[1].substr(len)} </Link></div>)
                    //     found = true
                    // } else
                    if (terms[i].name.substr(0, len).toUpperCase() === stro.toUpperCase()) {
                        jsx.push(<div key={i} className="search-box" ><Link className="search_term" to={`/team/${terms[i].sportname}/${terms[i].abbreviation}`}><i className="fas fa-users"></i> <i className={`fas fa-${terms[i].icon}`}></i> <strong>{terms[i].name.substr(0, len)}</strong>{terms[i].name.substr(len)} </Link></div>)
                        found = true
                    }
                }
            }
            if (found) {
                setdropdown(true)
                setdropp(jsx)
            } else {
                setdropdown(false)
            }
        } else {
            setdropdown(false)
        }
    }

    return (
        <div>
            <form className="search_group">
                <input id="SearchBar" type="search" placeholder="Search" aria-label="Search" autocomplete="off" onChange={handleChange} />
                {dropdown &&
                    <div className="search_list">{dropp}</div>
                }
            </form>
        </div>
    )
}

export default Search;