import React from 'react';
import ribolla from './../assets/img/ribolla.png';

export default function About() {

    return (
        <div className="about-container">
            <div className="about-img-container">
                <img src={ribolla} alt=""/>
            </div>
            <div className="about-text-container">
                <p>The sheer essence of wine inspires memory and emotion. Ever taste a wine that reminds you a newly mown grass in summer? Bread baking or bacon frying in a pan? Allison Robbins invites you to discover the impressions, tastes and smells conjured by wine. Her approach is equally instructive to the seasoned aficionado and the budding connoisseur. Allison holds a Certification in Vintage Wine from UCLA, Certificates from the UK’s Wine and Spirits Education Trust (both Intermediate and Advanced) and has a wine distributorship on both the East and West Coasts.</p>
                <p>Allison teaches custom-designed corporate and private wine seminars with a comprehensive list of all sensory components you will need for the tasting — everything from citrus to passion fruit to pieces of oak and cedar, and a collection of herbs and spices to identify the aromatics of wine on the nose and palate. And, of course, the vocabulary to talk about them.</p>
                <p>One wine might remind you of just-picked oranges. Another may suggest thoughts of new leather, or a forest floor, or of licorice ropes and freshly cut grass. Afterwards you might find yourself recalling your unspoken past and be inspired to write your memoirs!</p>
                <p>Email Allison and let the journey begin. Cheers!</p>
            </div>
            
        </div>
    )
}
