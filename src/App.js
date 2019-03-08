import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function FirstButtonSet() {
  return (
    <div>
      <button onClick={() => {
        alert('I said leave me alone.');
      }}>
        Don't click me
          </button>
      <button onClick={() => {
        window.location.href="/second";
      }}>
        Click me
      </button>
    </div>
  );
}

function SecondButtonSet() {
  return (
    <div>
      <h2>Congratulations</h2>
      <button>
        Click Twice
          </button>
      <button>
        Click Thrice
          </button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
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
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
