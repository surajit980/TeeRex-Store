import React, { Component } from 'react';
import ProductCard from "./ProductCard";

export default class Products extends Component {
  render() {
    return (
      <div className='products-container'>
        {
          this.props.products.map((product)=>{
            return <ProductCard product={product} key={product.id} addtocart={this.props.addtocart}/>
          })
        }
      </div>
    )
  }
}
