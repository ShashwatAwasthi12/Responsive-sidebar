import React from 'react'
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { sideBarData } from "./sideBarData"
import './Side.css';
import { IconContext } from 'react-icons'

function Sidebar() {
    return (
        <>
            <IconContext.Provider value={{ color: '#000000' }}>
                <nav className="nav-menu">
                    <ul className="nav-menu-items">

                        {sideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cname} >
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;
