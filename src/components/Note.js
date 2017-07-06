import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {

  constructor(props){
    super(props)

    this.play = this.play.bind(this);
  }

  play(){
    if(!this.props.player) return;
    this.props.player.then((player) => player.play(this.props.note));
  }

  render(){
    return(<button onClick={this.play}>{this.props.note}</button>)
  }
}

Note.defaultProps = {
  note: 'C3'
}

Note.propTypes = {
  note: PropTypes.string
}

export default Note;
