import React from 'react';

class FeedBack extends React.Component {
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good:<span></span></p>
                    <p>Neutral:<span></span></p>
                    <p>Bad:<span></span></p>
                    <p>Total:<span></span></p>
                    <p>Positive feedback:<span></span></p>
                </div>
            </div>
        );
    }
}

export default FeedBack;