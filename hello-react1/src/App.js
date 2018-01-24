import React, { Component } from 'react';

import Projects from './components/projects';
import './App.css';

class App extends Component {

  constructor(){

    super();

    this.state = {
      projects: [
        {
          title: 'Learn Some React',
          category: 'School'
        },
        {
          title: 'Catch up On Code',
          category: 'School'
        },
        {
          title: 'Clown some more',
          category: 'Art'
        }
      ]
    }
  }

  render() { //required to make this work. Asks the browser, which component will you display? inside the render function you can only return one parent tag
    return (
      <div className = 'App'>
        My App
        <Projects projects={this.state.Projects} />
      </div>
    );
  }
}

export default App;
