import React from 'react';
import PropTypes from "prop-types";
import {Button} from "./FeedBackOptins.styled"


const FeedBackOptions = ({option, onLeaveFeedback}) => (
    <div>
        {option.map((option) => (
            <Button type="button" onClick={onLeaveFeedback} key={option} name={option}>{ option }</Button>
          ))}
    </div>

)

FeedBackOptions.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedBackOptions;
