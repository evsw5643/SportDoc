import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../../Components/Sidebar/Sidebar.css"

function Search() {




    const [baterms, basetterms] = useState([])
    const [bsterms, bssetterms] = useState([])
    const [fterms, fsetterms] = useState([])
    const [hterms, hsetterms] = useState([])
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
                    basetterms(result)
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
                    bssetterms(result)
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
                    fsetterms(result)
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
                    hsetterms(result)
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
    }

    function handleChange(event) {
        if (!terms[0]) {
            console.log("pp")
            console.log(baterms)
            console.log(bsterms)
            console.log(fterms)
            console.log(hterms)
            setterms(baterms.concat(bsterms, fterms, hterms))
        }
        createDropdown(event.target.value)
        if (event.target.value == "") {
            setdropdown(false)
        } else {
            setdropdown(true)

        }
        //setsearch(event.target.value.toUpperCase());
    }

    function createDropdown(stro) {
        console.log(terms)
        let jsx = []
        let len = stro.length
        for (let i = 0; i < terms.length; i++) {
            let newName = terms[i].player_name.split(" ")
            if (newName[0].substr(0, len).toUpperCase() == stro.toUpperCase()) {
                jsx.push(<li key={i} className="list-group-item SearchText"><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}><strong>{newName[0].substr(0, len)}</strong>{newName[0].substr(len)} {newName[1]} - {terms[i].team}</Link></li>)
            } else if (newName[1].substr(0, len).toUpperCase() == stro.toUpperCase()) {
                jsx.push(<li key={i} className="list-group-item SearchText"><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}>{newName[0]} <strong>{newName[1].substr(0, len)}</strong>{newName[1].substr(len)} - {terms[i].team}</Link></li>)
            } else if (terms[i].player_name.substr(0, len).toUpperCase() == stro.toUpperCase()) {
                jsx.push(<li key={i} className="list-group-item SearchText"><Link className="search_term" to={`/player/${terms[i].sportname}/${terms[i].player_id}`}><strong>{terms[i].player_name.substr(0, len)}</strong>{terms[i].player_name.substr(len)} - {terms[i].team}</Link></li>)
            }
        }
        setdropp(jsx)
    }

    return (
        <div>
            <form className="form-inline my-4 my-lg-0">
                <input style={{ width: 300 }} id="SearchBar" className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                {dropdown &&
                    <ul className="list-group search_list">{dropp}</ul>
                }
            </form>
        </div>
    )
}

export default Search;