import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import config from './config';
import Score from './Score';

firebase.initializeApp(config);

const Database = firebase.database();
const Storage = Database.ref();

window.Database = Database;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Haz ganar a tu facultad</h1>
        <sub>Deposita la basura en las cestas correspondientes y gana puntos.</sub>
        <Score storage={Storage} />
      </div>
    );
  }
}

export default App;
