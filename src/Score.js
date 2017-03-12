import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.database = props.database;
    this.state = {
      currentScore: null
    }

  }



  render() {
    return (
      <div className="score_height">
        <div className="score_font">Puntaje: {this.state.currentScore}</div>
      </div>
    );
  }

  componentWillMount()  {
    this.database.ref('currentScore').on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({currentScore: data})
    });
  }
}

export default Score;
