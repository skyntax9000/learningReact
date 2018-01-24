import React, { Component } from 'react'; //brings in react
import projectItem from './ProjectItem'

class Projects extends Component { //sets a class of Projects

  render() { //renders the class
    let ProjectItems; //defines a variable for use below

    if (this.props.projects) { //always true in the syntax
      ProjectItems = this.props.Projects.map( //projectItems set to the for loop from map function to the var
        Project => { //arrow notation for function
          console.log(Project)
          return(
            <ProjectItem key = {Project.title} Project={Project} />
          )
        }

      );
    }

    console.log(this.props);
    return (
      <div className='Projects' >
        {ProjectItems}

      </div>
    );
  }
}

export default Projects;
