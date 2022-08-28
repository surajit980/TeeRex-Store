import React from 'react'

const FilterList = () => {
  return (
    <div className='filter-container'>

      <div>
      <h5 className='filter-heading'>Colour</h5>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Red</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Blue</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Green</label>
      </div>
      </div>
      
      <div>
      <h5 className='filter-heading'>Gender</h5>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Men</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Women</label>
      </div>
      </div>

      <div><h5 className='filter-heading'>Price</h5>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">0-Rs.250</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Rs.251-450</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Rs.451-above</label>
      </div></div>

      <div>
      <h5 className='filter-heading'>Type</h5>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Polo</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Hoodie</label>
      </div>
      <div className='check-inp'>
        <input type="checkbox" name="" value=""/>
        <label htmlFor="">Basic</label>
      </div>
      </div>
      
    </div>
  )
}

export default FilterList
