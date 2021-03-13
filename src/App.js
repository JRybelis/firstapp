import React, {Component } from 'react';
import ManillaFighters from './Manilla.js';
import AddFighter from './AddFighter.js';
import NavBar from './components/NavBar.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Post from './components/Post.js';

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
  componentDidMount(){
    console.log('Component mounted!');
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Component updated');
    console.log(prevProps, prevState);
  }
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path = '/' component={Home}/>
          <Route path = '/about' component={About}/>
          <Route path = '/contact' component={Contact}/>
          <Route path = '/:post_id' component={Post}/>
          <ManillaFighters deleteFighter={this.deleteFighter} manillaFighters={this.state.manillaFighters}/>
          <AddFighter addFighter={this.addFighter}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
