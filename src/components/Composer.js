import AutoComposerJS from 'autocomposer-js';
import React, { Component } from 'react';

class Composer extends Component {

  test(){
    const chordProgression = ['Gm', 'Em', 'C', 'D'];
    var allTheMelodies = AutoComposerJS.melody.buildSimpleMelodies(chordProgression)
    console.log(allTheMelodies);
  }

  render(){
    return (<button onClick={this.test}>make</button>)

  }
}

export default Composer;
