import React, { Component } from 'react';
import './App.css';
import Score from './Score';
import LeaderBoard from './LeaderBoard';

import firebase from './Firebase';

const Database = firebase.database();

window.Database = Database;

class App extends Component {
  constructor(props) {
    super(props);
    this.database = Database;
  };

  render() {
    return (
      <div>
        <h1>Haz ganar a tu facultad</h1>
        <sub>Deposita la basura en las cestas correspondientes y gana puntos.</sub>
        <Score database={this.database} />
        <LeaderBoard database={this.database}/>
      </div>
    );
  }


}

export default App;
