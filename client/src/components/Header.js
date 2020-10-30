import React, { useState, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export default function Header() {

    const [toggle, updateToggle] = useState(false);
    const navMenuContainer = useRef(null);

    useEffect(() => {
        if (window.location.pathname !== '/') {
            navMenuContainer.current.classList.remove('no-opacity');
        } else {
            setTimeout(function() {
                navMenuContainer.current.classList.add('opaque-transition');
            }, 2500)
        }
        
        //TODO: remove hidden class from header if it carries over from about page (may have to do on every page)

        const handleResize = () => {
            if (window.innerWidth > 900) {
                if( navMenuContainer.current.classList.contains('mobile-menu-visible')) {
                    navMenuContainer.current.classList.remove('mobile-menu-visible')
                    updateToggle(!toggle)
                }        
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // effect to handle toggle
    useEffect(() => {
        const navButtonTop = document.querySelector('.nav-menu-button').firstElementChild
        const navButtonBottom = document.querySelector('.nav-menu-button').lastElementChild
        // const navMenuContainer = document.querySelector('.nav-menu-container')
        // const navMenuContainer = document.querySelector('.logo-container').nextElementSibling
        let transitionTimer

        navButtonTop.classList.toggle('top-bar-clicked', toggle)
        navButtonBottom.classList.toggle('bottom-bar-clicked', toggle)

        if (!toggle) {
            if (window.innerWidth <= 900) {
                document.querySelector('.header-logo').classList.remove('header-logo-mobile-menu');

                // set transition to hide/remove mobile menu and prevent transition when normal menu is visible
                navMenuContainer.current.style.transition = '.3s all ease-in-out .2s'
                transitionTimer = setTimeout(() => {
                    // remove transition depending on browser compatibility
                    (navMenuContainer.current.style.removeProperty) ? navMenuContainer.current.style.removeProperty('transition') : navMenuContainer.style.removeAttribute('transition');
                }, 500)
            }
        }
        else {
            if (window.innerWidth <= 900) {
                document.querySelector('.header-logo').classList.add('header-logo-mobile-menu');
            }
        }
        
        navMenuContainer.current.classList.toggle('mobile-menu-visible', toggle)

        return () => {
            clearTimeout(transitionTimer)
        }
    }, [toggle])

    const handleClick = (e, homeLinkClicked=false) => {
        const notAlreadyHome = window.location.pathname !== '' && window.location.pathname !== '/'

        if (toggle) {
            updateToggle(!toggle);
        }
        // if home link clicked from page other than home, or if click on other page link that isn't current page path, scroll
        if ((homeLinkClicked && notAlreadyHome) || (!homeLinkClicked && `/${e.target.text.toLowerCase()}` !== window.location.pathname.toLowerCase())) {
            window.scrollTo(0,0);
        }
    }

    return (
        <header className="header-menu">
            <div className="header-logo">
                <a href="/" onClick={(e) => handleClick(e, true)}><h1>Allison Robbins Wines</h1></a>
            </div>
            <div ref={navMenuContainer} className="nav-menu-container no-opacity">
                <nav>
                    <ul className="nav-links plain-list">
                        <li><NavLink to="/about" onClick={(e) => handleClick(e)}>About</NavLink></li>
                        <li><NavLink to="/seminars" onClick={(e) => handleClick(e)}>Seminars</NavLink></li>
                        <li><NavLink to="/trade" onClick={(e) => handleClick(e)}>Trade</NavLink></li>
                        <li><a href="mailto:allison@allisonrobbinswines.net">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="nav-menu-button" onClick={() => updateToggle(!toggle)}>
                    <div className="bar top-bar" id="top-bar"></div>
                    <div className="bar bottom-bar" id="bottom-bar"></div>
                </div> 
        </header>
    )
}