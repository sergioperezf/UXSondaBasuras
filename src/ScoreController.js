import React, { Component } from 'react';

import firebase from './Firebase';

const Database = firebase.database();

window.Database = Database;

class ScoreController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      step: 1
    };
    this.scoreRef = Database.ref('currentScoreV2');
    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
    this.clearScore = this.clearScore.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.sendScore = this.sendScore.bind(this);
  }

  sendScore() {
    Database.ref().child('previousScores').push(this.state.currentScore)
    this.scoreRef.set({value:0, type:'none'})
    this.setState({
      currentScore: 0
    });
  }

  updateScore(newScore, type) {
    this.scoreRef.set({value:newScore, type:type});
    this.setState({currentScore:newScore});
  }

  increaseScore(type) {
    this.updateScore(this.state.currentScore + this.state.step, type);
  }
  decreaseScore() {
    this.updateScore(this.state.currentScore - this.state.step, 'none');
  }
  clearScore() {
    this.updateScore(0, 'none');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increaseScore('basura')}>Basura</button>
        <button onClick={() => this.increaseScore('abono')}>Abono</button>
        <button onClick={() => this.increaseScore('reciclaje')}>Reciclaje</button>
        <button onClick={this.decreaseScore}>Menos</button>
        <button onClick={this.sendScore}>Listo!</button>
        <button onClick={this.clearScore}>Borrar</button>

        <div>{this.state.currentScore}</div>
      </div>

    )
  }

  componentWillMount()  {
    this.scoreRef.on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({currentScore: data.value})
    });
  }
}


export default ScoreController;
