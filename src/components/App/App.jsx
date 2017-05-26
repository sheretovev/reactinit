import React, { Component } from 'react';
import Projects from '../Projects'
export default class App extends Component {
  /*
   * Component render()
   * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   */
  render() {
    return (
      <div>
        <h1>Hello, React changed {this.props.name}!</h1>
        <span>Hui</span>
        <Projects text="Hui from Projects"></Projects>
      </div>
    );
  }
}
