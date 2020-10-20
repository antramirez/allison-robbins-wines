import React from 'react';
import SeminarQA from './../components/SeminarQA';

export default function Seminars() {

    const questionsAnswers = [
        {
            question: 'Why sensory wine tastings?', 
            answers: [`Wine grapes have specific aromatic profiles, their sensory components. Allison’s wine tasting 
                        seminars are designed to build olfactory (smell) files about wine grape varietals. For example: 
                        Sauvignon Blanc’s sensory components: green grass, gooseberries, lime. Syrah’s sensory 
                        components – black pepper, bacon, allspice, olive, red and black fruits. Allison provides a list of 
                        sensory components to gather prior to the tasting, based on the seminar chosen. (In a 
                        non-pandemic setting, Allison would bring these components to you.) Why sniff and compare? 
                        To build an understanding of preferred wine profiles and have the vocabulary to discuss them 
                        with confidence. Cheeses will be suggested to understand the alchemy of wine and cheese 
                        pairing.`]
        },
        {
            question: 'How do custom-designed seminars work?',
            answers: [`You choose what you want to learn. For example: Spanish wines 101, secret bargains from 
            California, an Introduction to Basic Wine Grapes, A tour of Volcanic Wines from Sicily and the 
            Carnary Islands – it’s up to you.`]
        },
        {
            question: 'How do we get the wines?',
            answers: [`Allison chooses them from an array of wine stores in LA, New York or your chosen city, based 
            on a chosen wine budget. The wines can be picked up or delivered to each participant. (If the 	
            wine store is not legally allowed toship wine to a certain state, Allison will speak to a 
            participant’s local wine store to match what everyone else is tasting.)`]
        },
        {
            question: 'How long is the seminar?',
            answers: ['An hour and a half.']
        },
        {
            question: 'How much does it cost?',
            answers: [`You choose the wine budget. That cost is separate from Allison’s flat fee, no matter if you have 
            five people or 50.`]
        },
        {
            question: 'When do the wines get delivered to each participant?',
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
                'What are volcanic wines?', 
                'What does biodynamic winemaking mean and how does it influence winemaking vs traditional winemaking practices?',
                'How is sparkling wine is made?',
                'How is still wine is made?',
                'What does terroir mean and how does it influence how the wine tastes like?',
                'What does wine of place vs wine of man actually mean?',
                'Why are some wines so expensive?',
                'How do you navigate a wine list?',
                'Do wine glasses matter?',
                'How does the soil affect the wine?',
                'How does weather affect a vintage and why?',
                'Why are some vintages good and some bad?',
                'How do wine laws affect winemaking?',
                'What is the vocabulary to use when the wine first hits your mouth, then the mid-palate, then the finish?',
                'What is the Methode Champenoise?',
                'What is a bead?',
                'What does blanc de blanc and blanc de noir mean?',
                'What is dosage?',
                'What is riddling?',
                'What is remuage?',
                'Why do some wines do better is certain regions of the world?',
                'Does the US have any wine laws that are similar to those of Europe?',
                'What are the differences between the New World and Old World wine offerings?'
                ]
        },
        {
            question: 'An example of the types of wine that would be used in a wine seminar comparing sparkling wines from around the world:',
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

    return (
        <div className="seminars-container">
            <div className="seminars-faq-container">
                <ul className="seminars-faq">
                    {questionsAnswers.map((qa) => 
                        <li>
                            <SeminarQA question={qa.question} 
                                    answers={qa.answers}
                                    moreThanOne={qa.answers.length > 1}
                            /> 
                        </li>
                    )}
                </ul>
            </div>
            <div className="seminars-call-to-action-container">
                <h3>To book a seminar, please email <a href="mailto:ar4477@nyu.edu">allison@allisonrobbinswines.net</a>.</h3>
            </div>
        </div>
        
    )
}
