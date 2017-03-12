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
      <div className="mdl-typography--text-center">
        <h1>Juega por el planeta.</h1>
        <div className="logo-font android-sub-slogan">Deposita la basura en las cestas correspondientes y gana puntos.</div>
        <Score database={this.database} />
        <div className="flexbox-class default-margin">
            <div className="basura_img"></div>
            <div className="abono_img"></div>
            <div className="reciclaje_img"></div>
        </div>
        <div>
            <LeaderBoard database={this.database}/>
       </div>
      </div>
    );
  }


}

export default App;
