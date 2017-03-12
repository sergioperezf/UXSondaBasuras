import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.database = props.database;
    this.state = {
      previousScores: []
    }
    this.database.ref('previousScores').orderByValue().limitToLast(5).on('value', (data) => {
      this.state.previousScores = [];
      data.forEach(data => {
        this.state.previousScores.push(data.val());
      })
      this.setState({previousScores:this.state.previousScores.reverse()}); // setState is the method that actually
      // triggers the refreshing. I'm pretty sure this is quite dirty but fuck it.
    });
  }

  render() {
    return (
      <div>
        <div>Previous Scores:</div>
        <ul>
          {this.state.previousScores.map((x, i) =>
            <li style={{ listStyleType: 'none' }}>{x}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default LeaderBoard;
