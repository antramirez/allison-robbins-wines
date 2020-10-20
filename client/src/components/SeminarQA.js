import React from 'react';

export default function SeminarQA({question ='', answers=[], moreThanOne=false}) {

    return (
        <>
        <h4 className="seminar-question">{question}</h4>
        {moreThanOne ?
            <ul>
                {answers.map(a => 
                    <li>{a}</li>
                )}
            </ul>
        :
            <p>{answers[0]}</p>
        }

        </>
    )

}