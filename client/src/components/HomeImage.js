import React from 'react';

export default function HomeImage({imgSrc='', imgSrcAlt='', text=''}) {

    return (
        <div className="full-screen-container home-img-container">
            <img src={imgSrc} alt={imgSrcAlt}/>
            <div className="home-img-text-container">
                <h4>{text}</h4>
            </div>
        </div>
    )
}