import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Keyboard />
        </div>
        <p className="App-intro">
          Coord generation
        </p>
      </div>
    );
  }
}

export default App;
