import React, { Component } from 'react';

import firebase from './Firebase';

const Database = firebase.database();

window.Database = Database;

class ScoreController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      step: 100
    };
    this.scoreRef = Database.ref('currentScore');
    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
    this.clearScore = this.clearScore.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(newScore) {
    this.scoreRef.set(newScore);
    this.setState({currentScore:newScore});
  }

  increaseScore() {
    this.updateScore(this.state.currentScore + this.state.step);
  }
  decreaseScore() {
    this.updateScore(this.state.currentScore - this.state.step);
  }
  clearScore() {
    this.updateScore(0);
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseScore}>Más</button>
        <button onClick={this.decreaseScore}>Menos</button>
        <button onClick={this.clearScore}>Borrar</button>
        <div>{this.state.currentScore}</div>
      </div>

    )
  }
}


export default ScoreController;