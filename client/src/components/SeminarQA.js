import React from 'react';
import './SeminarQA.css';

export default function SeminarQA({question ='', answers=[], moreThanOne=false}) {

    return (
        <>
        <h3 className="seminar-question">{question}</h3>
        {moreThanOne ?
            <ul className="seminar-answer-ul">
                {answers.map(a => 
                    <li className="seminar-answer-li">{a}</li>
                )}
            </ul>
        :
            <p className="seminar-answer-p">{answers[0]}</p>
        }

        </>
    )

}