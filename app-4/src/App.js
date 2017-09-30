import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }
  }

  add = () => {
    this.setState({
      result: Number(this.state.result) + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.result}</p>
        <input className="App-button" type="button" onClick={this.add} value="1を加える"/>
      </div>
    );
  }
}

export default App;
