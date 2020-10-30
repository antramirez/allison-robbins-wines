import React, { useEffect, useRef } from 'react';
import './LandingPage.css';

export default function LandingPage({imgSrc='', imgSrcAlt=''}) {
    
    const imgContainer = useRef(null);
    const landingPageImg = useRef(null);
    const bannerText = useRef(null);
    const exploreContainer = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // hide everything
        document.querySelectorAll('.home-img-container').forEach((i) => i.classList.add('hidden'));
        document.querySelector('.home-bottom-call-to-action-container').classList.add('hidden');
        document.querySelector('footer').classList.add('hidden');


        setTimeout(function() {
            if (imgContainer.current) {
                imgContainer.current.classList.remove('no-opacity');
            }
            setTimeout(function() {
                if (landingPageImg.current) {
                    landingPageImg.current.classList.remove('no-opacity');
                }
                setTimeout(function() {
                    if (bannerText.current) {
                        bannerText.current.classList.add('opaque-transition');
                    }
                    setTimeout(function() {
                        if (exploreContainer.current) {
                            exploreContainer.current.classList.add('opaque-transition');
                        }
                    }, 400)
                }, 600)
            }, 400)
        }, 800)
        

        // TODO later: set cookie so explore hides

        document.querySelector('.header-logo').classList.add('no-opacity');

        return () => {
            document.querySelector('.header-logo').classList.remove('no-opacity');
            document.querySelector('body').classList.remove('no-scroll');
            document.querySelectorAll('.home-img-container').forEach((i) => i.classList.remove('hidden'));
            document.querySelector('.home-bottom-call-to-action-container').classList.remove('hidden');
            document.querySelector('footer').classList.remove('hidden');

        }
    }, [])

    const handleExploreClick = () => {
        const body = document.querySelector('body');

        // uhide everything
        document.querySelectorAll('.home-img-container').forEach((i) => i.classList.remove('hidden'));
        document.querySelector('.home-bottom-call-to-action-container').classList.remove('hidden');
        document.querySelector('footer').classList.remove('hidden');

        const imgContainer = document.querySelector('.landing-page-img-container');
        imgContainer.classList.add('landing-page-explore-clicked');

        // hide text as image expands
        document.querySelector('.banner-text-container').classList.add('no-opacity-transition');
        document.querySelector('.explore-button-container').classList.add('no-opacity-transition');

        setTimeout(function() {
            
            document.querySelector('.header-logo').classList.add('opaque-transition')
            imgContainer.classList.add('no-opacity-transition');

            setTimeout(function() {
                setTimeout(function() {
                    const placeholder = document.querySelector('.landing-page-placeholder');
                    placeholder.classList.add('hidden');
                    imgContainer.classList.add('landing-page-explore-clicked-done')
                    document.querySelectorAll('.home-img-text-container').forEach(c => c.classList.add('opaque-transition'));
                    body.classList.remove('no-scroll');

                }, 800)
            }, 1200)
        }, 1000);
    }

    return (
        <>
            <div className="landing-page-container full-screen-container fixed">
                <div ref={imgContainer} className="landing-page-img-container no-opacity">
                    <img ref={landingPageImg} className="no-opacity" src={imgSrc} alt={imgSrcAlt}/>
                    <div ref={bannerText} className="banner-text-container absolute-text no-opacity">
                        <h1 className="banner-text-main">Allison Robbins Wines</h1>
                        <h4 className="banner-text-sub">Custom-designed seminars & wine distribution</h4>
                    </div>
                    <div ref={exploreContainer} className="explore-button-container no-opacity">
                        <span className="explore-line"></span>
                        <button className="explore-button" onClick={() => handleExploreClick()}>explore</button>
                        {/* <button className="explore-button" onClick={() => handleExploreClick()}><div>explore</div></button> */}
                    </div>
                </div>
            </div>
            <div className="landing-page-placeholder full-screen-container black-bg"></div>
        </>
        
    )
}