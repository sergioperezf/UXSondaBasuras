import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.database = props.database;
    this.state = {
      currentScore: null
    }
    this.sendScore = this.sendScore.bind(this);
  }

  sendScore() {
    this.database.ref().child('previousScores').push(this.state.currentScore)
  }

  render() {
    return (
      <div>
        <div className="score">{this.state.currentScore}</div>
        <button onClick={this.sendScore}>Listo!</button>
      </div>
    );
  }

  componentWillMount()  {
    this.database.ref().on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({currentScore: data.currentScore})
    });
  }
}

export default Score;