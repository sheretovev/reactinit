import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {
  
  
  render() {
    let projectItems;
    if(this.props.projects){
    projectItems = this.props.projects.map(project =>{
        return (
          <ProjectItem key={project.title} project={project} />
        )
    })
  }
    return (
      <ul className="Projects">
        {projectItems}
      </ul>
    );
  }
}
