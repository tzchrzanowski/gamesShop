import React, { Component } from 'react';
import "./navBar.css";

import gogLogo from '../assets/gogLogo.png';
import cartIcon from '../assets/cartPng.png';

import gamesInCartList from '../calc/cartList.js';
import './cart.css';

class Navbar extends Component {
    constructor(props){
      super(props);
    }
    
    updateCartClass(){
      if(this.props.cartClass === 'cartBox'){
        this.props.updateCartClass('hidden');
        this.props.updateCartButtonClass('cartButton')        
      }else{
        this.props.updateCartClass('cartBox');
        this.props.updateCartButtonClass('cartButton cartOn')
      }
    }
    render() {
      return (
        <div className="nav_Box">
          <div className="navWrapper">
            <div className="logoGog">
              <img src={gogLogo} alt="" className="imgGog"/>              
            </div>
            <div className={this.props.cartButtonClass} onClick={this.updateCartClass.bind(this)}>
              <img src={cartIcon} alt="" className="imgCart"/>
              { this.props.list.length}
            </div>
          </div>
        </div>
      )}
}
export default Navbar;