import { useState } from 'react'

const App = () => {
  const course = { // object course name and parts[array]
    name: 'Half stack application development',
    parts :[

      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 8
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    
    ]
  }
  

  return(
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <personApp />
    </div>
  )
}

const Header = ({course}) =>{
  return(  
  <div>
    <h1>{course.name}</h1>
  </div>)
}

const Content = ({parts}) => {
  return(
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
      </div>
  )
}
const Part = ({part}) => {
  return(
    <p>
        {part.name} {part.exercises}
      </p>
  )
}

const Total = ({parts}) =>{
  return(
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}
const personApp = () =>{
  class Person{
    constructor(name,age,description){
      this.name = name;
      this.age = age
      this.description = description;
    }
    greet(){
      return(
        <div>hello my name is  {this.name}</div>
      );
    }
  }
  const adam = new Person ('Adam Ondra', 29, "description")

  const janja = new Person('Janja Garnbet',23,"desc")
  
  return(
    <div>
      <h1>{adam.greet()}</h1>
      <h1>{janja.greet()}</h1>
    </div>
  )
}

export default App

