import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProjet:{}
    }
  }
  // static defaultProps = {
  //   categories: ['WebDesign', 'WebDevelopment', 'MobileDevelopment' ]
  // }

  handleSubmit(e){
    //console.log(this.refs.title.value);
    if(this.refs.title.value === ''){
      alert('title is required');
    }else{
      this.setState({newProject:
        {
          title: this.refs.title.value,
          category: this.refs.category.value
        }}, function(){
        //console.log(this.state)
        this.props.addProject(this.state.newProject)
      })
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>;
    });
    
    return (
      <div>
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
            </div>
            <div>
            <label>Category</label>
            <select ref="category" >
              {categoryOptions}
            </select>  
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default AddProject;