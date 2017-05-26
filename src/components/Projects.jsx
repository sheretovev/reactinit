import React, { Component } from 'react';

export default class Projects extends Component {
 
  render() {
    return (
      <div className="Projects">
        My Projects {this.props.text}
      </div>
    );
  }
}
