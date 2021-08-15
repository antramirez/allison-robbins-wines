import React, { useEffect, useRef } from 'react';
import SeminarQA from './../components/SeminarQA';
import './Seminars.css';

import fig from './../assets/img/fig.png';
import sauv from './../assets/img/sauv.png';
import cosa from './../assets/img/cosa.png';
import ribolla from './../assets/img/ribolla.png';
import pinot from './../assets/img/pinot.png';

export default function Seminars() {
    
    const seminarList = useRef(null);

    const questionsAnswers = [
        {
            question: 'Why sensory wine tastings?', 
            answers: [`Wine grapes have specific aromatic profiles–in other words, their sensory components. Allison’s wine tasting 
                        seminars are designed to build olfactory files about wine grape varietals. For example: 
                        Sauvignon Blanc’s sensory components: green grass, gooseberries, lime. Syrah’s sensory 
                        components: black pepper, bacon, allspice, olive, red and black fruits. Allison provides a list of the 
                        sensory components to gather prior to the tasting, based on the seminar chosen. (In a 
                        non-pandemic setting, Allison would bring these components to you.) Why sniff and compare? 
                        To build an understanding of wine profiles you prefer and have the vocabulary to discuss them 
                        with confidence. Cheese pairings will be suggested to accompany the wines.`]
        },
        {
            question: 'How do custom-designed seminars work?',
            answers: [`You choose what you want to learn–anything you like. For example: Spanish Wines 101, Secret Bargains from 
            California, an Introduction to Basic Wine Grapes, A Tour of Wines Grown in Volcanic Soils from Sicily and the 
            Canary Islands – it’s up to you.`]
        },
        {
            question: 'Who chooses the wines and how do we get them?',
            answers: [`Allison chooses them from an array of wine stores in LA, New York or your chosen city, based 
            on a chosen wine budget. The wines can be picked up or delivered to each participant. (If the 	
            wine store is not legally allowed to ship wine to a certain state, Allison will speak to a 
            participant’s local wine store to match what everyone else is tasting.)`]
        },
        {
            question: 'How long is the seminar?',
            answers: ['An hour and a half.']
        },
        {
            question: 'How much does it cost?',
            answers: [`You choose the wine budget. That cost is separate from Allison’s flat fee, no matter if you have 
            five people or 100.`]
        },
        {
            question: 'When are the wines delivered to each participant?',
            answers: ['Two weeks prior to the wine seminar']
        },
        {
            question: 'How does one log on to the seminar?',
            answers: ['Allison will send a Zoom invite.']
        },
        {
            question: 'What questions will be covered in the seminar?',
            answers: [
                'What is pet-nat?', 
                'What is natural wine?', 
                'What is organic wine?', 
                'What is orange wine?',  
                'What is biodynamic winemaking?',
                'How is sparkling wine made?',
                'How is still wine made?',
                'What does terroir mean and how does it influence how a wine tastes?',
                'What does wine of place vs wine of man actually mean?',
                'Why are some wines so expensive?',
                'How do you navigate a restaurant wine list?',
                'Does the shape of a wine glass matter?',
                'How does soil affect wine?',
                'How does weather affect a vintage and why?',
                'Why are some vintages good and some bad?',
                'How do wine laws inform winemaking?',
                'What is the vocabulary for when the wine first hits your mouth, then the mid-palate, then the finish?',
                'What is the Methode Champenoise?',
                'What does blanc de blanc and blanc de noir mean?',
                'What is dosage?',
                'What is riddling?',
                'What is remuage?',
                'Does the US have any wine laws that are similar to those of Europe?',
                'What is the difference between the New World and Old World regarding wine?'
                ]
        },
        {
            question: 'An example of a wine seminar comparing sparkling wines from around the world:',
            answers: [
                'Champagne (Montagne de Reims, Vallee de la Marne) / Bereche et Fils',
                'France (Vouvray) / Francois Pinon Vouvray Brut',
                'France (Alsace) /Allimant Laugner Cremant d’Alsace Rose',
                'South Africa (Western Cape) / Graham Beck Brut Methode Cap Classique',
                'Germany (Upper Mosel) / Weingut Matthias Hild Elbling Sekt Brut NV',
                'Cava (Alt Penedes, Catalonia, Spain) / Raventos I Blanc Rose'
                ]
        }

    ]

    useEffect(() => {
        if (seminarList.current) {
            seminarList.current.classList.add('no-opacity');
        }

        setTimeout(function() {
            if (seminarList.current) {
                seminarList.current.classList.add('opaque-transition');
            }
        }, 500)
        // return () => {
        //     cleanup
        // }
    })

    return (
        <div className="seminars-container width-1200-container">
            <div className="seminars-faq-container">
                <ul ref={seminarList} className="seminars-faq plain-list">
                    {questionsAnswers.map((qa) => 
                        <li>
                            <SeminarQA question={qa.question} 
                                    answers={qa.answers}
                                    moreThanOne={qa.answers.length > 1}
                            /> 
                        </li>
                    )}
                </ul>
                <img className="seminar-img" id="seminar-img-1" width="650" src={pinot} alt=""/>
                <img className="seminar-img" id="seminar-img-2"  width="800" src={fig} alt=""/>
                <img className="seminar-img" id="seminar-img-3"  width="850" src={sauv} alt=""/>
                <img className="seminar-img" id="seminar-img-4"  width="650" src={cosa} alt=""/>
                <img className="seminar-img" id="seminar-img-5"  width="700" src={fig} alt=""/>
                <img className="seminar-img" id="seminar-img-6"  width="800" src={ribolla} alt=""/>
            </div>
            <div className="seminars-call-to-action-container">
                <h3>To book a seminar, please email <a className="underline" href="mailto:allison@allisonrobbinswines.com">allison@allisonrobbinswines.com</a></h3>
            </div>
        </div>
        
    )
}
