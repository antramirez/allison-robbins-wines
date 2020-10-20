import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header() {

    return (
        <header className="header-menu">
            <div className="header-logo">
                <a href="/"><h1>Allison Robines Wines</h1></a>
            </div>
            <div>
                <nav>
                    <ul className="nav-menu">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/seminars">Seminars</NavLink></li>
                        <li><NavLink to="/trade">Trade</NavLink></li>
                        <li><a href="mailto:ar4477@nyu.edu">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}