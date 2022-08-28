import React from 'react'

const ProductCard = (props) => {
  const {product} =props;
  return (
    <div className='product-card'>
      <div className='card-img'>
        <img src={product.imageURL} alt=''></img>
      </div>
      <div className='card-bottom'>
        <p>Rs. {product.price}</p>
        <button onClick={()=>props.addtocart(props.product)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
