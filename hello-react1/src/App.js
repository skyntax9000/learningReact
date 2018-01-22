import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello'

class App extends Component {
  render() { //required to make this work. Asks the browser, which component will you display? inside the render function you can only return one parent tag
    return (
      <div>
        <h1>Howdy yall</h1>
        <h2>Later yall</h2>
      </div>
    );
  }
}

export default App;
