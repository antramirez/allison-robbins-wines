import React from 'react';
import LandingPage from './../components/LandingPage';
import HomeImage from './../components/HomeImage';
import fig from './../assets/img/fig.png';
import sauv from './../assets/img/sauv.png';
import cosa from './../assets/img/cosa.png';


export default function Home() {

    return (
        <div>
            <LandingPage imgSrc={fig} imgSrcAlt= 'Fig'/>
            <HomeImage imgSrc={fig} imgSrcAlt='Fig' text='You never know what a glass of wine will call to mind' />
            <HomeImage imgSrc={sauv} imgSrcAlt='Sauvignon' text='your first french kiss on the ferris wheel at a strawberry festival...' />
            <HomeImage imgSrc={cosa} imgSrcAlt='Cosa Obra' text='...or hot cherry pie at the truckstop on a misguided trip to Vegas' />
            <div className="home-bottom-call-to-action-container">
                <h3>Looking to enhance your wine palette or knowledge? Check out these custom-Designed wine seminars now available through Zoom.</h3>
                <h3>Are you a wine redistributor, reseller, or restaurant owner? Check out our wines avAilable for sale (trade only) in California and New York.</h3>
            </div>
        </div>
    )
}
