import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const cliCkGood = () => {
    const setToGood = (newValue) => {
      setGood(newValue);
    };
    return setToGood(good + 1);
  };

  const cliCkNuetral = () => {
    const setToNeutral = (newValue) => {
      setNeutral(newValue);
    };
    return setNeutral(neutral + 1);
  };

  const cliClkBad = () => {
    const setToBad = (newValue) => {
      setBad(newValue);
    };
    return setToBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback </h1>
      <Button handleClick={() => cliCkGood()} text="good" />
      <Button handleClick={() => cliCkNuetral()} text="neutral" />
      <Button handleClick={() => cliClkBad()} text="Bad" />

      <div>
        <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
