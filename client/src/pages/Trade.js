import React from 'react';
import Wine from '../components/Wine';

export default function Trade() {
    
    const wines = [
        {
            name: 'Gard Freja 2019',
        },
        {
            name: 'Gard 2015 The Don',
        },
        {
            name: 'Gard 2015 Cabernet Sauvignon',
        },
        {
            name: 'Silver 2013 Pinot Noir SBC',
        },
        {
            name: 'Silver 2018 Rose of Pinot Noir',
        },
        {
            name: 'Silver NV Reddick Street Red Blend',
        },
        {
            name: 'Silver 2010 Trentotto File Syrah',
        },
        {
            name: 'Silver 2013 Cabernet Sauvignon',
        },
        {
            name: 'Silver 2013 Sangiovese',
        },
        {
            name: 'Silver 2014 Coteau Palmer Pinot Noir',
        },
        {
            name: 'Grassi 2015 Cabernet Sauvignon',
        },
        {
            name: 'Grassi Sangiovese',
        },
        {
            name: 'Grassi 2016 Ribolla Gialla',
        },
        {
            name: 'Grassi 2016 Ribolla Gialla BTG',
        },
        {
            name: '2019 Cosa Obra Sauvignon Blanc',
        },
        {
            name: '2016 Cosa Obra Pinot Noir',
        },
        


    ]

    return (
        <div className="trade-container">
            <div className="trade-description-container">
                <h3 className="trade-description">Are you a wine redistributor, reseller, or restaurant owner? If so, see below for our wide range of wines available for sale in California and New York. Please note our selection of wine for trade only and not for sale to the general public.</h3>
            </div>
            <div className="wine-list-container">
                <ul className="wine-list">
                    {wines.map((w) => 
                        <li>
                            <Wine name={w.name}/>
                        </li>
                    )}
                </ul>
            </div>        
        </div>
    )
}
