import {useState} from 'react'

const NumberBtn = ({number}) => {

    return (
        <input type='button' value={number} className="feedback-btn" onClick={(e) => {
            console.log(e.target.value)
        }}/>
        
        )
}

const Feedback = ({number}) => {
    return(
        <div className="feedback-container">
            <NumberBtn number={1} />
            <NumberBtn number={2} />
            <NumberBtn number={3} />
            <NumberBtn number={4} />
            <NumberBtn number={5} />
        </div>
    )
}

export default Feedback