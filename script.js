import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

/*
    We can check React in the console 
    to see all the methods and properties
    it contains
 */
console.log(React);

/*
    Oriented Object Programming. 

    We can create multiples objects like this. 
    In this case, the objects have the same properties and method. 
    So we are breaking the DRY rule of web development. 
 */

const studentObj = {
  name: 'Bob',
  age: 30,
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const student2Obj = {
  name: 'Janes',
  age: 45,
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

/*
    We can create a constructor function. 
    A constructor function is a function that will generate objects for us. 

    This way we don't have to recreate objects over and over. 
*/
function createStudent(name, age) {
  const output = {};
  output.name = name;
  output.age = age;
  output.sayHello = function () {
    console.log(`hello, I'm ${this.name}`);
  };
  return output;
}

const myStudent1 = createStudent('Bob', 24); // Here you can see how shorter it is
const myStudent2 = createStudent('John', 33); // Here you can see how shorter it is

/*
    Using the keyword new, we don't have to create and return the object.
*/

function Student1(name, age) {
  /* 
    We use Capital letter to indicate that this 
    function need to be used with new
*/
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`hello, I'm ${this.name}`);
  };
}

const myStudent3 = new Student1('Ryan', 30);

/* 
    We can attach function to the prototype so that the function is not
    recreated all the time
*/
Student1.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

/* 
    Using the keyword class we can do both: 
    - Create the constructor function 
    - Attach function to the prototype 
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/* 
    A class can inherit methods and properties from parents' 
    constructor using extends
    Super is used to call the parents' constructor. 
*/

class CreateStudent extends Person {
  constructor(name, age, school) {
    super(name, age);
    school = this.school;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const student1 = new CreateStudent('bob', 30);
console.log(student1);

console.log(MyComponent);

// this is the way to create element in react without JSX
React.createElement('h1', { id: 'title' }, 'Hello, world');

// Here is a Class component in React with JSX
class App extends React.Component {
  render() {
    return <MyComponent name='Bob' />;
  }
}

// ReactDOM.render creates a virtual DOM and allows us to render the element
ReactDOM.render(<App />, document.getElementById('app'));
