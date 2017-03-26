import React, { Component } from 'react';
import './App.css';
import Score from './Score';
import LeaderBoard from './LeaderBoard';

import firebase from './Firebase';

const Database = firebase.database();

window.Database = Database;


/*var basuraDiv = $("#basura");
basuraDiv.on('webkitAnimationEnd', function () {
    this.style.webkitAnimationPlayState = "paused";
});
function animate() {
    basuraDiv.style.webkitAnimationPlayState = "running";
}


setTimeout(function(){
    animate();
}, 9000);*/




class App extends Component {
    constructor(props) {
        super(props);
        this.database = Database;

    };


  render() {

    return (
      <div className="mdl-typography--text-center ">
        <h1>Juega por el planeta.</h1>
        <div className="logo-font android-sub-slogan">Deposita la basura en las cestas correspondientes y gana puntos.</div>
        <Score database={this.database} />


      </div>
    );
  }


}

export default App;
