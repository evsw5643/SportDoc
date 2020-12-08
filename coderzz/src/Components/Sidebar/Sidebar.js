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
                        <Link to={`${val.link}`} className="row">
                            <li key={key} className="row" >

                                <div id="icon"> {val.icon}  </div>
                                <div id="title"> {val.title}</div>

                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
