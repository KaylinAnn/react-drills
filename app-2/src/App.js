import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
  
  this.state = {
    shoppingList: ['bacon', 'eggs', 'milk', 'bread']
  }
  }
  render() {
    let showGroceryList = this.state.shoppingList.map((e,i) => {
      return (
        <h2 key = {e}> {e}</h2>
      )
    })
    return (
      <div className="App">
        {showGroceryList}
      </div>
    );
  }
}

export default App;
