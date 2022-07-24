import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({option, onLeaveFeedback }) => {
                    
              return  < List >
            <li><Button type='button' onClick={()=>onLeaveFeedback.good(option)}>Good</Button></li>
            <li><Button type='button' onClick={()=>onLeaveFeedback.neutral(option)}>Neutral</Button></li>
            <li><Button type='button' onClick={()=>onLeaveFeedback.bad(option)} >Bad</Button></li>
        
        </List> 
};

 FeedbackOptions.propTypes = {
     onLeaveFeedback: PropTypes.objectOf(PropTypes.func).isRequired,
     option: PropTypes.number.isRequired
    };