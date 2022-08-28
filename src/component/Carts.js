import React, { Component } from 'react'
import CartCard from './CartCard'

export default class Carts extends Component {
  render() {
    return (
      <div style={{padding:"5px"}}>
        <h2 style={{marginBottom:"20px"}}>Shopping Cart -</h2>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
      </div>
    )
  }
}
