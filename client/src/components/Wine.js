import React from 'react';

export default function Wine({name='', headings=[], info=[], imgSrc=''}) {

    return (
        <div className="wine-container">
            <div className="wine-img-container">
                <img src={''} alt={name}/>
            </div>
            <div className="wine-info-conatiner">
                <h2 className="wine-name">{name}</h2>
            </div>
        </div>
    )
}