import { useState } from "react";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];
  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Parts parts={parts} />
    </div>
  );
};
const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </div>
  );
};

const Total = ({ parts }) => {
  // const calculateTotal = () => {
  //   const total = parts.map((part) => part.exercises);
  //   return total;
  // };
  // const totalNumber = calculateTotal();
  // let actualTotalNumber = totalNumber.reduce(
  //   (total, currentValue) => total + totalNumber.exercises
  // );
  // console.log(totalNumber);
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);
  return (
    <div>
      <p>Total number of exercises {total}</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default App;
