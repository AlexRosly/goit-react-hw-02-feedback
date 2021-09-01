import React from 'react';
import {Button} from "./FeedBack.styled"


const FeedbackOptions = ({ positive, neutral, negative }) => (
    <div>
        <Button type="button" onClick={positive}>Good</Button>
        <Button type="button" onClick={neutral}>Neutral</Button>
        <Button type="button" onClick={negative}>Bad</Button>
    </div>

)

export default FeedbackOptions;