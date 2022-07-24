import React from 'react';
import PropTypes from 'prop-types';
import { List } from './Stats.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage})=>    
       <List>
        <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Posive feedback: {positivePercentage}</li>
        </List>


;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
}