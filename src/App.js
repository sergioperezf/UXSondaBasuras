import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

var Database = firebase.database();
var Storage = Database.ref();

window.Database = Database;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Has ganar a tu facultad</h1>
        <sub>Deposita la basura en las cestas correspondientes y gana puntos.</sub>
        <div className="content">

        </div>
      </div>
    );
  }

  componentWillMount()  {
    Storage.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }
}

export default App;
