import React from 'react'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='card-img'>
        <img src='https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg' alt=''></img>
      </div>
      <div className='card-bottom'>
        <p>Rs. 500</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
