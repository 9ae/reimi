import React, { Component } from 'react';
import Soundfont from 'soundfont-player';
import tonal from 'tonal';

import Note from './Note';

class Keyboard extends Component {

  constructor(props){
    super(props);

    this.instrument = Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano');
  }

  render(){
    let allNotes = Array(88).fill().map( (_,i) => tonal.note.fromMidi(i+21) );

    return(
      <div>
        {allNotes.map((value, index) => <Note key={index} note={value} player={this.instrument} /> )}
      </div>)
  }

}

export default Keyboard;
