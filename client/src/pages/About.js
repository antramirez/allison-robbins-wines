import React, {useEffect, useRef} from 'react';
import './About.css';
import cosa from './../assets/img/cosa.png';

export default function About() {
    const aboutText = useRef(null);
    useEffect(() => {
        if (aboutText.current) {
            aboutText.current.classList.add('no-opacity');

        }

        setTimeout(function() {
            if (aboutText.current) {
                aboutText.current.classList.add('opaque-transition');
            }
        }, 1400)
        

        // return () => {
        //     cleanup
        // }
    })

    return (
        <>
        <div className="full-screen-container fixed z-index-back auto-overflow about-img-container">
            <img src={cosa} alt=""/>
        </div>
        <div ref={aboutText} className="about-text-container width-1200-container">
                <p>The sheer essence of wine inspires memory and emotion. Ever taste a wine that reminds you of freshly baked bread or bacon frying in a pan? Allison Robbins invites you to discover the impressions, tastes and smells conjured by wine. Her approach is equally instructive to the seasoned aficionado and the budding connoisseur. Allison holds a Certification in Vintage Wine from UCLA, both Intermediate and Advanced certificates from the UK’s Wine and Spirits Education Trust, and has a wine distributorship on the East and West Coasts.</p><br/>
                <p>Allison teaches custom-designed corporate and private wine seminars utilizing a comprehensive list of sensory components — everything from citrus and passion fruit, to oak and cedar, and herbs and spices to identify wines' aromatics. And the vocabulary to talk about them.</p><br/>
                <p>One wine might remind you of just-picked oranges. Another may suggest thoughts of new leather, or a forest floor, or licorice ropes, or freshly-cut grass. Afterwards, you might find yourself recalling your unspoken past and be inspired to write your memoirs!</p><br/>
                <p>Email Allison and let the journey begin. Cheers!</p>
            </div>
        </>
        
    )
}
