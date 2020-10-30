import React from 'react';
import './Wine.css';

export default function Wine({name='', headings=[], info=[], imgSrc=''}) {

    return (
        <div className="wine-container">
            <div className="wine-img-container">
                <img src={imgSrc} alt={name}/>
            </div>
            <div className="wine-info-container">
                <div className="wine-info-container-main">
                    <h2 className="wine-name">{name}</h2>
                </div>

                <div className="wine-aside">
                    <h3>For redistributors, resellers, and restaurants</h3>
                </div>
            </div>
        </div>
    )
}