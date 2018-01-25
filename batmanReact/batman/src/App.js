import React, { Component } from 'react';
import './App.css';
import {MovieList} from './components/movieList'


class App extends Component {
  render() {
    return (
      <div className="movieList">
        <h1>List</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
