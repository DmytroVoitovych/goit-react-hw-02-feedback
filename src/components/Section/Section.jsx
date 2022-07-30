import React from 'react';
import { FeedbackOptions } from 'components/ListButton/FeedbackOptions';
import { Statistics } from 'components/Stats/Statistics';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export class Section extends React.Component {

    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        title: PropTypes.string,
    };

    title = this.props.title; //записываю пропс //под копотом конструктор с со всеми наследованиями
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
        
    addFeedBackGood = (e) => {return this.setState((prevState) => ({ [e]: prevState[e] + 1 })) }; // не то 'е' о котором можно было подумать. 
        
     countTotalFeedback = ()=> Object.values(this.state).reduce((previousValue, currentValue) => previousValue + currentValue + 0);//тотал 
    
    countPositiveFeedbackPercentage = () =>  Math.round((this.state.good / this.countTotalFeedback()*100)) + "%" ; // процент

    
    
    render() {
           
        return (<section>
          
          <h1>{this.title}</h1>
            {<FeedbackOptions option={[...Object.keys(this.state)]} onLeaveFeedback={this.addFeedBackGood} />}
           {this.countTotalFeedback() === 0? <Notification message="There is no feedback" />:
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />}
           </section>
       );
    }
};

