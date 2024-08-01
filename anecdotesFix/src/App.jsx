import { useState, useMemo } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well."
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

  const getAnecdoteWithMostVotes = useMemo(() => {
    let anecdoteWithMostVotesIndex = 0;
    for (let key in votes) {
      if (votes[key] > votes[anecdoteWithMostVotesIndex]) {
        anecdoteWithMostVotesIndex = key;
      }
    }
    return anecdoteWithMostVotesIndex;
  }, [votes]);

  getAnecdoteWithMostVotes();
  const getRandom = () => {
    return Math.floor(Math.random() * 7);
  };
  const actionOnClickNextAnecdote = () => {
    const randomNumber = getRandom();
    console.log(randomNumber);
    let copy = selected;
    copy = randomNumber;
    setSelected(copy);
  };
  const actionOnClickVoteForAnecdote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy);
  };
  console.log(selected);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <div>
        <Button actionOnClick={actionOnClickNextAnecdote} text={"next anecdote"} />
        <Button actionOnClick={actionOnClickVoteForAnecdote} text={"vote"} />
        <AnecdoteMostVotes
          getAnecdoteWithMostVotes={getAnecdoteWithMostVotes}
          votes={votes}
          anecdotes={anecdotes}
        />
      </div>
      <h1>AmEN</h1>
    </div>
  );
};

const Button = ({ actionOnClick, text }) => {
  return <button onClick={actionOnClick}>{text}</button>;
};
export default App;

const AnecdoteMostVotes = ({ getAnecdoteWithMostVotes, votes, anecdotes }) => {
  return (
    <div>
      <h1>Anecdote With most votes</h1>
      <p>{anecdotes[getAnecdoteWithMostVotes()]}</p>
    </div>
  );
};
