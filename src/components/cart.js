import React, { Component } from 'react';
import "./cart.css";
import gamesJson from '../assets/products.json';
import imgTab from '../calc/gameImgList.js'; 

class Cart extends Component {
  constructor(props){
    super(props);
    this.list = this.props.list;
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  render() {
      let gamesInCartListLocal = this.props.list;
      let itemsInCart = gamesInCartListLocal.length;
      let currentTotalPrice = 0;

      let cartRows = gamesJson.map((row) => {
        let title = function(){
          let result;
          if(row.title.length >28){
            result= row.title.substring(0, 25) + "...";
          }else{
            result= row.title;
          }
          return result;
        };
        let currentImgPath = function(){
          for(let i = 0; i< imgTab.length; i++){
            let str = row.img.slice(row.img.indexOf('images/'), row.img.indexOf('.jpg'));
            str = str.slice(str.indexOf('/')+1);
            if(imgTab[i].match(str) && row.img !== ''){                                
                return imgTab[i];
            }
          }
        }
        for(let i = 0; i< gamesInCartListLocal.length; i++){
          if(row.id === gamesInCartListLocal[i]){
            currentTotalPrice += row.price;
            return <div className="itemInCart">
              <img src={currentImgPath()} alt="" className="imgCartGame"/>
              <div className="cartItemCaption">
                <span className="cartButtonCaption">{title()}</span>
                  <span className="underLinedCaption" onClick={ () => this.removeFromCart(row.id)}>Remove</span>
              </div>
              <div className="itemPriceContainerInCart">
                <span className="cartButtonCaption" >$ {row.price}</span>
              </div>
          </div>
          }
        }

      });

      return (
          <div className={this.props.cartClass}>
            <div className="cartWrapper">
              <div className="cartBorderBox">
                <div className="cart">
                  <span className="itemsAmount">{itemsInCart} ITEMS IN CART</span>
                  <span className="currentTotalPrice">$ {currentTotalPrice}</span> 
                  <div className="fajnyButton cartButtonCaption" onClick={ this.changeCartItemsChild.bind(this) }>CLEAR CART</div>
                </div>
                {cartRows}  
              </div>
            </div>
          </div>
      )}
      changeCartItemsChild() {
        let emptyTab = [];
        this.props.updateCart(emptyTab);
      };
      removeFromCart(item){
        this.props.removeItemFromCart(item);
    }
}
export default Cart;

