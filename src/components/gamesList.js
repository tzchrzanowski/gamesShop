import React, { Component } from 'react';
import "./gamesList.css";
import {Col, Row} from 'react-materialize';
import gamesJson from '../assets/products.json';

import gamesInCartList from '../calc/cartList.js';
import ownedGamesList from '../calc/ownedGamesList.js';
import imgTab from '../calc/gameImgList.js'; 

class GamesList extends Component {
    constructor(props){
        super(props);
        this.list = this.props.list;
        this.addGameToCart = this.addGameToCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.state = {someState: 'whazup'}
    }
    addGameToCart(){
        let emptyTab = [];
        this.props.updateCart(emptyTab);
    }
    render() {
        let value;
        let rows = gamesJson.map((row) => {

            let currentImgPath = function(){
                for(let i = 0; i< imgTab.length; i++){
                        let str = row.img.slice(row.img.indexOf('images/'), row.img.indexOf('.jpg'));
                        str = str.slice(str.indexOf('/')+1);
                        if(imgTab[i].match(str) && row.img !== ''){                            
                            return <img src={imgTab[i]} alt="" className="img"/>
                        }
                }
            }
            let currentDiscount = function(){
                if (row.discount === true){
                    return <div className="discountBox">
                                <span className="discountAmount">-{row.discountAmount}%</span>
                        </div>
                }
            }
            let currentPrice = () => {
                return  <div className="priceBox" onClick={ () => this.addToCart(row.id)}>
                <span className="priceValue">$ {row.price}</span>  
            </div>
            }
            let gameInCart = function(){
                return <div className="inCartBox">
                    <span className="inCartCaption">IN CART</span>
                </div>
            }
            let isGameInCart = () => {
                let result = currentPrice();;
                for(let i =0; i<this.props.list.length; i++){
                    if(this.props.list[i] === row.id) {
                        result = gameInCart();
                    }
                }
                return result;
            }
            let doesNotOwnGame = function(){

                return <div className="gameCaptions">
                        <Row>
                            <span className="gameTitle">{row.title}</span>
                        </Row>
                        <Row/>
                        <Row>
                            <Col s={10} m={5} l={2} offset="l5 m5 s5">  
                                {currentDiscount()}
                            </Col>
                            <Col s={10} m={5} l={2} offset="l1 m1 s1">
                                {isGameInCart()}
                            </Col>
                        </Row>
                    </div>
            }
            let ownGame = function(){
                console.log(ownedGamesList.length);
                for(let i =0; i<ownedGamesList.length; i++){
                    if(ownedGamesList[i].match(row.id)){
                        return <div className="gameCaptions">
                        <Row>
                            <span className="gameTitleOwned">{row.title}</span>
                        </Row>
                        <Row/>
                        <Row>
                            <Col s={10} m={5} l={2} offset="l5 m5 s5"/>
                            <Col s={10} m={5} l={2} offset="l1 m1 s1">
                                <div className="ownedCaptionBox">
                                    <span className="ownedCaption">Owned</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    }else{
                        return doesNotOwnGame();
                    }
                }
            }
            let gameStatus = function(){  
                if (ownedGamesList.length > 0){
                    return ownGame();
                }else{
                    return doesNotOwnGame();
                }
            }
        
            return <div>
                    {currentImgPath()}
                    {gameStatus()}                 
                </div>
        });

        return (
            <div className="gamesDiv">
                    <div className="wrapperList">
                        <div className="box" >
                            {rows}
                        </div>
                    </div>
            </div>
        )}
        addToCart(item){
            this.props.addItemToCart(item);
        }
}
export default GamesList;