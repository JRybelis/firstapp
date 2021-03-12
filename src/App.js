import React, {Component } from 'react';
import ManillaFighters from './Manilla.js';
import AddFighter from './AddFighter.js';


//container class-based components
class App extends Component {
  state = {
    manillaFighters : [
      { name: 'Iko', age: 37, belt: 'black', id: 1},
      { name: 'Oka', age: 39, belt: 'black', id: 2},
      { name: 'Yayan', age: 53, belt: 'black', id: 3},
      { name: 'Joe', age: 39, belt: 'black', id: 4}
    ]
  }
  addFighter = (manillaFighter) => {
    manillaFighter.id = Math.random();
    let manillaFighters = [...this.state.manillaFighters, manillaFighter] // spread operator creates a new array and adding the objects copied from the original into it. Then, it adds a new element, which comes in via the function.
    this.setState({
       manillaFighters: manillaFighters // new property is equal to the new array created.
    })
  }
  deleteFighter = (id) => {
    let manillaFighters = this.state.manillaFighters.filter(manillaFighter => {
      return manillaFighter.id !== id;
    });
    this.setState({
      manillaFighters: manillaFighters
    })
  }
  render () {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <ManillaFighters deleteFighter={this.deleteFighter} manillaFighters={this.state.manillaFighters}/>
        <AddFighter addFighter={this.addFighter}/>        
      </div>
    );
  }
}

export default App;
