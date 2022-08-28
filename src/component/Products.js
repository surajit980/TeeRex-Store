import React, { Component } from 'react';
import ProductCard from "./ProductCard";

export default class Products extends Component {
  render() {
    return (
      <div className='products-container'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    )
  }
}
