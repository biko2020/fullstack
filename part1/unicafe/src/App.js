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
      <table >
        <tbody>
        <tr>
          <td>good</td>
          <td>
            <StatisticLine value={props.good} />
          </td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>
            <StatisticLine value={props.neural} />
          </td>
        </tr>
        <tr>
          <td>bad</td>
          <td>
            <StatisticLine value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>all</td>
          <td>
            <StatisticLine value={props.sum} />
          </td>
        </tr>
        <tr>
          <td>average</td>
          <td>
            <StatisticLine value={props.average} />
          </td>
        </tr>
        <tr>
          <td>positive</td>
          <td>
            <StatisticLine value={props.positive} />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}
        {value}
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
        <h1>statistics</h1>
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
