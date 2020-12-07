import React from 'react'
import './Sidebar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import Search from '../../Views/Search/Search'

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <li className="SidebarSearch">
                    <Search />
                </li>
                {SidebarData.map((val, key) => {
                    return (
                        //onClick={ () => {window.location.pathname = val.link} }
                        <li key={key} className="row" >
                            <Link to={`${val.link}`}>
                                <div id="icon"> {val.icon} </div>
                                <div id="title"> {val.title} </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
