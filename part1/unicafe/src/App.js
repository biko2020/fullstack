import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  if (props.sum === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.sum} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const average = (good + neutral + bad) / 3;
  const sum = good + neutral + bad;

  return (
    <div>
      <h1>give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <div>
        <h1>Statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          sum={sum}
          average={average}
          positive={average * 100}
        />
      </div>
    </div>
  );
};

export default App;
