import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Search.css"

function Search() {
    const [terms, setterms] = useState([])
    const [dropdown, setdropdown] = useState(false)
    const [dropp, setdropp] = useState([])

    useEffect(() => {
        playerGet("basketball")
    }, [])

    function playerGet(apiSport) {
        fetch(`/${apiSport}/getplayers`)
            .then(res => res.json())
            .then(
                (result) => {
                    setterms(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    function handleChange(event) {
        createDropdown(event.target.value)
        if (event.target.value == "") {
            setdropdown(false)
        } else {
            setdropdown(true)

        }
        //setsearch(event.target.value.toUpperCase());
    }

    function createDropdown(stro) {
        let jsx = []
        console.log(stro)
        let len = stro.length
        for (let i = 0; i < terms.length; i++) {
            if (terms[i].player_name.substr(0, len).toUpperCase() == stro.toUpperCase()) {

                jsx.push(<li key={i} className="list-group-item"><Link className="search_term" to={`/player/basketball/${terms[i].player_id}`}><strong>{terms[i].player_name.substr(0, len)}</strong>{terms[i].player_name.substr(len)} - {terms[i].team}</Link></li>)
            }
        }
        setdropp(jsx)
    }

    return (
        <div>
            <form className="form-inline my-4 my-lg-0">
                <input style={{ width: 300 }} className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                {dropdown &&
                    <ul className="list-group search_list">{dropp}</ul>
                }
            </form>
        </div>
    )
}

export default Search;