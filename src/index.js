import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScoreController from './ScoreController';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/admin" component={ScoreController}/>
    </div>
  </Router>,
  document.getElementById('root')
);
