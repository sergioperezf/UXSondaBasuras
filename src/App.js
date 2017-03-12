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
      <div className="android-be-together-section mdl-typography--text-center">
        <h1>Haz ganar a tu facultad</h1>
        <div className="logo-font android-slogan">Juega por el planeta.</div>
        <div className="logo-font android-sub-slogan">Deposita la basura en las cestas correspondientes y gana puntos.</div>
        <Score database={this.database} />
        <div className="logo-font android-create-character">
            <LeaderBoard database={this.database}/>
       </div>
      </div>
    );
  }


}

export default App;
