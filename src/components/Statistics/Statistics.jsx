import React from 'react';
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => (
    <div>
        <h2>{title}</h2>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total: <span>{total}</span></p>
        <p>Positive feedback: <span>{positivePercentage}%</span></p>
    </div>

);

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,   
}

export default Statistics;
