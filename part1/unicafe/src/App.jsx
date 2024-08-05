import { useState } from "react";
import "./App.css";
import mixpanel from "mixpanel-browser";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAllClicks = (incrementBy, setState, currentState) => {
    console.log("Setting state");
    return () => {
      {
        setState(currentState + incrementBy);
      }
    };
  };
  const calculateAll = () => good + neutral + bad;
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleAllClicks(1, setGood, good)} text="Positive feedback" />
        <Button handleClick={handleAllClicks(1, setNeutral, neutral)} text="Neutral feedback" />
        <Button handleClick={handleAllClicks(1, setBad, bad)} text="Negative feedback" />
        {console.log("reload state")}
        <br />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} calculateAll={calculateAll} />
      </div>
    </div>
  );
};

const Statistics = ({ good, neutral, bad, calculateAll }) => {
  const total = calculateAll();

  const averageScore = () => {
    return (good - bad) / total;
  };
  const positivePercentage = () => {
    return (good / total) * 100 + "%";
  };
  return total !== 0 ? (
    <div>
      <h1>statistics</h1>

      <table className="statistics-table">
        <tbody className="statistics-table">
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={total} />
          <StatisticLine text={"average score"} value={averageScore()} />
          <StatisticLine text={"positive percentage"} value={positivePercentage()} />
        </tbody>
      </table>
    </div>
  ) : (
    <h1>No info yet</h1>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr className="statistics-row">
      <td className="statistics-data">{text}</td>
      <td className="statistics-data">{value}</td>
    </tr>
  );
};
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

export default App;
