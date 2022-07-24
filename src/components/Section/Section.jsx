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
        
    addFeedBackGood = (value) => this.setState((prevState) => ({good: prevState.good +value}));
    addFeedBackNeutral = (value) => this.setState(prevState => ({ neutral: prevState.neutral + value, }));
    addFeedBackBad = (value) => this.setState(prevState => ({ bad: prevState.bad + value, }));

     countTotalFeedback = ()=> Object.values(this.state).reduce(
         (previousValue, currentValue) => previousValue + currentValue + 0);
    
    countPositiveFeedbackPercentage = (total) =>  Math.round((this.state.good / this.countTotalFeedback()*100)) + "%" ;

    eventsAddFeed = {
        good: this.addFeedBackGood,
        neutral: this.addFeedBackNeutral,
        bad: this.addFeedBackBad,
    };
    
    
    render() {
           
        return (<section>
          
          <h1>{this.title}</h1>
            {<FeedbackOptions option={1} onLeaveFeedback={this.eventsAddFeed} />}
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

