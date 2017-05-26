import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
export default class App extends Component {
  /*
   * Component render()
   * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   */
   constructor(){
     super();
    this.state = {
      projects:[]
    }
  }
  componentWillMount(){
    this.setState({projects: [
      {
          title: 'Material',
          category: 'WebDesign'
        },
        {
          title: 'Epam',
          category: 'WebDevelopment'
        },
        {
          title: 'Ocassions',
          category: 'MobileDevelopment'
        },
    ]})
  }
  handleAddProject(project){
    console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div>
        <h1>Hello, React {this.props.name}!</h1>
        <span>Projects</span>
         <AddProject addProject={this.handleAddProject.bind(this)} categories={['WebDesign', 'WebDevelopment', 'MobileDevelopment' ]}/>
        <Projects projects={this.state.projects} ></Projects>
      </div>
    );
  }
}
