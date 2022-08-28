import React, { Component } from 'react'
import CartCard from './CartCard'

export default class Carts extends Component {
  render() {
    const {products}=this.props;
    return (
      <div style={{padding:"5px"}}>
        <h2 style={{marginBottom:"20px"}}>Shopping Cart -</h2>
        {products.map((product)=><CartCard product={product} key={product.id}/>)}
      </div>
    )
  }
}
