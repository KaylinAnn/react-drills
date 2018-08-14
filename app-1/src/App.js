import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      str: '',
      
    }
  }

  handleChange(val){
    this.setState({str: value})
  }


  render() {
    return (
      <div>
        <input type= 'text' className= 'textBox' onChange= {(e) => this.handleChange(e.target.value)}/>  
        <p>{this.state.str}</p>
      </div>
    );
  }
}

export default App;
