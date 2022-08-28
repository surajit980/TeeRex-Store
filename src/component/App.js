import Navbar from "./Navbar";
import Home from './Home'
import { Routes, Route } from "react-router-dom";
import Carts from "./Carts";
import React, { Component } from 'react'
import {data} from '../data'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      productList:data,
      cartList:[]
    }
  }
  addToCartList(product){
    this.setState({
      cartList:[product,...this.state.cartList]
    })
  }
  render() {
    return (
      <div>
        <Navbar cartCount={this.state.cartList.length}/>
      <Routes>
        <Route path="/" element={<Home products={this.state.productList} addtocart={this.addToCartList}/>} />
        <Route path="/carts" element={<Carts products={this.state.cartList}/>}/>
      </Routes>
      </div>
    )
  }
}
