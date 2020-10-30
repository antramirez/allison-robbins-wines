import React, { useEffect, useRef } from 'react';
import './HomeImage.css';

export default function HomeImage({id='', imgSrc='', imgSrcAlt='', text='', top='', bottom='', left='', right='', align=''}) {

    const txtContainer = useRef(null)
    const ref = useRef(null)

    useEffect(() => {
        txtContainer.current.classList.add('no-opacity');
    })

    const scrollToNext = () => {
        ref.current.nextSibling.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div ref={ref} id={id} className="full-screen-container home-img-container black-bg">
            <img src={imgSrc} alt={imgSrcAlt}/>
            <div ref={txtContainer} className="home-img-text-container" style={{top:`${top}%`, bottom:`${bottom}%`, left:`${left}px`, right:`${right}px`, textAlign:`${align}`}}>
                <h3>{text}</h3>
            </div>
            {/* <div className="scroll-down-container" onClick={() => window.scroll({top:window.innerHeight + {offset}, behavior:'smooth'})}> */}
            <div className="scroll-down-container" onClick={() => scrollToNext()}>
                <div className="arrow-container"><span className="scroll-arrow"></span></div>
            </div>
        </div>
    )
}