import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 88
    }
  }

  render() {
    return (
      <div className="score">{this.state.currentScore}</div>
    );
  }

  componentWillMount()  {
    this.props.storage.on('value', (snapshot) => {
      let data = snapshot.val();
      this.setState({currentScore: data.currentScore})
    });
  }
}

export default Score;