import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <div className="site-credits">
                    <p>photography by <a href="#">Nina Gofur</a></p>
                    <p>site designed and developed by <a href="#">Anthony Ramirez</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="menu-links divider-right">
                    <ul>
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/seminars">seminars</NavLink></li>
                        <li><NavLink to="/trade">trade</NavLink></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <span className="bold">email:</span><a className="allison-email" href="mailto:ar4477@nyu.edu">allison@allisonrobbinswines.net</a>
                    <span className="bold">tel:</span><a href="#">(310) 310-0080</a>
                    <p>529 palisades drive #105 <br/> pacific palisades, ca 90272</p>
                </div>
            </div>
        </footer>
    )
}
