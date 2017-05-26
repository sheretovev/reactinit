import React, { Component } from 'react';

export default class ProjectItem extends Component {
 
  render() {
    return (
      <li className="project-item">
        <h3>{this.props.project.title}</h3>
        <span>{this.props.project.category}</span>
      </li>
    );
  }
}
