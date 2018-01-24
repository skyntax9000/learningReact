import React, { Component } from 'react'; //brings in react library and component module

class ProjectItem extends Component { //defines a class called ProjectItem

  render() { //renders the component
    return ( //return what shall be rendered

      <li className='Project'>
      {this.props.Project[0].title} - {this.props.Project[0].category}
      </li>
    );
  }
}

export default ProjectItem; //exports the component so it can be imported into other files
