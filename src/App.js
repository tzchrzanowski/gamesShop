import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navBar.js";
import GameOfWeek from './components/gameOfWeek.js';
import GamesList from './components/gamesList.js';
import Cart from './components/cart.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      list: ["gameId_3", "gameId_5"],
      cartClass: 'hidden',
      cartButtonClass: 'cartButton'
    };
    this.changeCartItems = this.changeCartItems.bind(this);
  }
  changeCartItems = (newList) => {
      this.setState({ list: newList })
  }
  addItemToCart = (newItem) =>{
    let newList = this.state.list;
    let isNew = true;
    for(let i = 0; i<newList.length; i++){
      if(newItem === newList[i]){
        isNew = false;
      }
    }
    if(isNew){
      newList.push(newItem);
      this.setState({list: newList}) 
    }
  }
  removeItemFromCart = (item) => {
    let oldList = this.state.list;
    let newList = [];
    for(let i = 0; i< oldList.length; i++){
      if(oldList[i] !== item){
        newList.push(oldList[i]);
      }
    }
    this.setState({list: newList});
  }
  updateCartClass = (newClass) =>{
    this.setState({ cartClass: newClass})
  }
  updateCartButtonClass = (newClass) =>{
    this.setState({ cartButtonClass: newClass})
  }
  
  render() {
    return (
      <div className="App gradient">
        <header className="App-header">
          <Navbar list={this.state.list} cartClass={this.state.cartClass} updateCartClass={this.updateCartClass} cartButtonClass={this.state.cartButtonClass} updateCartButtonClass={this.updateCartButtonClass}/>
          <Cart  list={this.state.list} updateCart={this.changeCartItems} cartClass={this.state.cartClass} removeItemFromCart={this.removeItemFromCart}/>
        </header>
        <GameOfWeek/>
        <GamesList list={this.state.list} updateCart={this.changeCartItems} addItemToCart={this.addItemToCart} />
      </div>
    );
  }
}

export default App;
