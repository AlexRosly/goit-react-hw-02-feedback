import React from 'react';
import FeedbackOptions from '../FeedBackOptions/FeedBackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class FeedBack extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
		const total = good + neutral + bad;
		return total;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        const percentage = Math.round((good / total) * 100);
        return percentage;
    };

    countFeedBack = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        option={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.countFeedBack}
                    />
                    {total === 0 ? <Notification message="No feedback given"></Notification> : <Statistics
                        title="Statistics"
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positive}
                    />}
                </Section>
            </>
        );
    }
}

export default FeedBack;