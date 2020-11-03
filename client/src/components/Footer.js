import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <div className="site-credits">
                    <p>photography by <a href="https://ninagofur.com" target="_blank" rel="noopener noreferrer" className="underline">Nina Gofur</a></p>
                    <p>site designed and developed by <a href="mailto:ramireza1910@gmail.com" className="underline">Anthony Ramirez</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="menu-links align-right footer-padding-right">
                    <ul className="plain-list">
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/seminars">seminars</NavLink></li>
                        <li><NavLink to="/trade">trade</NavLink></li>
                    </ul>
                </div>
                <div className="contact-info align-right divider-left footer-padding-left">
                    <div className="contact-email">
                        <span className="bold">email: </span><a className="allison-email underline underline-16" href="mailto:allison@allisonrobbinswines.net">allison@allisonrobbinswines.net</a>
                    </div>
                    <div className="contact-telephone">
                        <span className="bold">tel: </span><a href="tel:310-310-0080" className="underline underline-16">(310) 310-0080</a>
                    </div>
                    <div className="contact-address">
                        <p>528 palisades drive #105 <br/> pacific palisades, ca 90272</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
