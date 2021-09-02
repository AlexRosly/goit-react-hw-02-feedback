import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

class FeedBack extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    positiveFeebBBack = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.showMarkUp();
    };

    neutralFeedBack = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    negativeFeedBack = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.bad + prevState.good + prevState.neutral,
        }));
    };
    

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            positive: Math.round((prevState.good / prevState.total) * 100),
        }));
    };

    // hideMarkUp = () => {
    //     this.setState(prevState => ({
    //         visible: prevState.visible = false,
    //     }));
    // }

    showMarkUp = () => {
        this.setState(prevState => ({
            visible: prevState.visible = true,
        }))
    }

    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        // option={this.showMarkUp}
                        positive={this.positiveFeebBBack}
                        neutral={this.neutralFeedBack}
                        negative={this.negativeFeedBack}
                    />
                    {this.state.visible && <Statistics
                        title="Statistics"
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.state.total}
                        positivePercentage={this.state.positive}
                    />}
                </Section>
                {!this.state.visible && <Notification message="No feedback given"></Notification>}
            </div>
        );
    }
}

export default FeedBack;