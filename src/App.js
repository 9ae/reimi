import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import Composer from './components/Composer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Keyboard />
        </div>
        <Composer />
      </div>
    );
  }
}

export default App;
