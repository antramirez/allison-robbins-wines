import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import LandingPage from './../components/LandingPage';
import HomeImage from './../components/HomeImage';
import './Home.css';
import fig from './../assets/img/fig.png';
import sauv from './../assets/img/sauv.png';
import cosa from './../assets/img/cosa.png';
// import ribolla from './../assets/img/ribolla.png';
import glass from './../assets/img/glass.png'
import strawberry from './../assets/img/strawberries.png';


export default function Home() {

    useEffect(() => {
        // window.scroll(0, 0);
        
        const body = document.querySelector('body');
        body.classList.add('black-bg');
        body.classList.add('no-scroll');
        const footer = document.querySelector('footer');
        footer.classList.add('black-bg');

        document.querySelector('.main').classList.add('normal-top');



        return () => {
            body.classList.remove('black-bg');
            footer.classList.remove('black-bg');
            document.querySelector('.main').classList.remove('normal-top');

        }
        
    })

    return (
        <div>
            <LandingPage imgSrc={fig} imgSrcAlt= 'Fig'/>
            <HomeImage id='home-img-1' imgSrc={glass} imgSrcAlt='Fig' text='You never know what a glass of wine will call to mind' top={15} right={40} align={'right'}/>
            <HomeImage id='home-img-2' imgSrc={strawberry} imgSrcAlt='Sauvignon' text='your first french kiss on the ferris wheel at a strawberry festival...' bottom={20} left={40} align={'left'}/>
            <HomeImage id='home-img-3' imgSrc={cosa} imgSrcAlt='Cosa Obra' text='...hot cherry pie at the truckstop on a misguided trip to Vegas' top={25} right={85} align={'right'}/>
            <HomeImage id='home-img-4' imgSrc={sauv} imgSrcAlt='Cosa Obra' text='...or freshly cut grass at your first getaway weekend' top={15} right={50} align={'left'}/>
            <div className=" home-bottom-call-to-action-container black-bg">
                <div className="width-1200-container black-bg">
                    <h3>Looking to enhance your wine knowledge? Check out these <NavLink to="/seminars" className="underline underline-6">custom-designed sensory wine seminars</NavLink> now available on Zoom.</h3>
                    <h3>Are you a wine shop or restaurant owner? Check out our <NavLink to="/trade" className="underline underline-6">wines</NavLink> available for sale (trade only) in California and New York.</h3>
                </div>
            </div>
            
        </div>
    )
}
