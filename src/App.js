import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { names } from './names';
import logo from './logo.svg';
import './App.css';

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function FirstButtonSet() {
  return (
    <div>
      <button id="ignore-me" onClick={() => {
        alert('I said leave me alone.');
      }}>
        Don't click me
          </button>
      <button id="click-me" onClick={() => {
        window.location.href=process.env.PUBLIC_URL + "/second";
      }}>
        Click me
      </button>
    </div>
  );
}

function TestClicks(firstCounter, secondCounter){
  return firstCounter >= 1 && secondCounter >= 2;
}

function SecondButtonSet() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  return (
    <div>
      <h2>Congratulations</h2>
      <button data-testid="two-clicks" className="double-click" onClick={() => {
        if(TestClicks(firstCounter, secondCounter)){
          window.location.href=process.env.PUBLIC_URL + "/third";
        }
        else{
          setFirstCounter(firstCounter + 1);
        }
      }}>
        Click Twice
          </button>
      <button data-testid="three-clicks" className="triple-click" onClick={() => {
        if(TestClicks(firstCounter, secondCounter)){
          window.location.href=process.env.PUBLIC_URL + "/third";
        }
        else{
          setSecondCounter(secondCounter + 1);
        }
      }}>
        Click Thrice
      </button>
    </div>
  );
}

function FiftyClicks(){
  const [counter, setCounter] = useState(0);
  const randomString = makeid();
  const randomNum = Math.floor(Math.random() * names.length);
  return(
    <div>
      <button className={randomString} onClick={() => {
        if(counter >= 49){
          window.location.href=process.env.PUBLIC_URL + "/done";
        }
        else{
          setCounter(counter + 1);
        }
      }}>
        Hello, {names[randomNum]}
      </button>
    </div>
  );
}

function Completed(){
  return (
    <div>
      <h1>
        CONGRATULATIONS
      </h1>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <main>
            <Route path="/" exact component={FirstButtonSet} />
            <Route path="/second" component={SecondButtonSet} />
            <Route path="/third" component={FiftyClicks} />
            <Route path="/done" component={Completed} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
