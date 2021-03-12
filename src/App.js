import React, {Component } from 'react';
import ManillaFighters from './Manilla.js';

class App extends Component {
  state = {
    manillaFighters : [
      { name: 'Iko', age: 37, belt: 'black', id: 1},
      { name: 'Oka', age: 39, belt: 'black', id: 2},
      { name: 'Yayan', age: 53, belt: 'black', id: 3},
      { name: 'Joe', age: 39, belt: 'black', id: 4}
    ]
  }
  render () {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <ManillaFighters manillaFighters={this.state.manillaFighters}/>        
      </div>
    );
  }
}

export default App;
