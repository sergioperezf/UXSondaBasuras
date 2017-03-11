import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class SelectFaculty extends Component {
  render() {
    return (
      <div>
        <h2>Selecciona tu facultad</h2>
        <Link to="leaderboard">Artes</Link>
        <Link to="leaderboard">Ingeniería</Link>
        <Link to="leaderboard">Humanas</Link>
      </div>
    )
  }
}

export default SelectFaculty;