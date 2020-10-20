import React from 'react';

export default function LandingPage({imgSrc='', imgSrcAlt=''}) {

    return (
        <div className="landing-page-container">
            <div className="landing-page-img-container ">
                <img src={imgSrc} alt={imgSrcAlt}/>
                <div className="banner-text-container absolute-text">
                    <h1 className="banner-text-main">Allison Robbins Wines</h1>
                    <h4 className="banner-text-sub">Custom-designed seminars & wine distribution</h4>
                </div>
                <div className="explore-button-container">
                    <span className="explore-line"></span>
                    <button className="explore-button">explore</button>
                </div>
            </div>
        </div>
    )
}