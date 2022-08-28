import React, { Component } from 'react';
import FilterList from "./FilterList";
import Products from "./Products";
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    return (
      <>
      <div style={{display:"flex",justifyContent:"center"}}>
        <SearchBar/>
      </div>
      
      <div className='home'>
        <FilterList/>
        <Products/>
      </div>
      </>
    )
  }
}
