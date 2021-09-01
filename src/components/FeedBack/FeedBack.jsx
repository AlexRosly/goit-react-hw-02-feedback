import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

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
            total:  prevState.bad + prevState.good+ prevState.neutral,
        }));
    };
    

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            positive: Math.round((prevState.good / prevState.total) * 100),
        }));
    };

    render() {
        return (
            <div>
                <Section Section title="Please leave feedback">
                {/* <h1>Please leave feedback</h1> */}
                <FeedbackOptions
                    positive={this.positiveFeebBBack}
                    neutral={this.neutralFeedBack}
                    negative={this.negativeFeedBack}
                />
                {/* <div>
                    <Button type="button" onClick={this.positiveFeebBBack}>Good</Button>
                    <Button type="button" onClick={this.neutralFeedBack}>Neutral</Button>
                    <Button type="button" onClick={this.negativeFeedBack}>Bad</Button>
                </div> */}
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                    positivePercentage={this.state.positive}
                    />
                    </Section>
                {/* <div>
                    <h2>Statistics</h2>
                    <p>Good:<span>{this.state.good}</span></p>
                    <p>Neutral:<span>{this.state.neutral}</span></p>
                    <p>Bad:<span>{this.state.bad}</span></p>
                    <p>Total:<span>{this.state.total}</span></p>
                    <p>Positive feedback:<span>{this.state.positive}%</span></p>
                </div> */}
            </div>
        );
    }
}

export default FeedBack;