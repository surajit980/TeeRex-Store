import React from 'react'

const CartCard = (props) => {
  const {product} = props;
  return (
    <div className='cart-card-container'>
      <img src={product.imageURL} alt=''></img>
      <div className='cart-card-details'>
        <h4>{product.name}</h4>
        <p>Rs. {product.price}</p>
      </div>
      <div>
      <select name="quantity" className="cart-card-select">
        <option value={1}>Qty 1</option>
        <option value={2}>Qty 2</option>
        <option value={3}>Qty 3</option>
        <option value={4}>Qty 4</option>
      </select>
      </div>
      <button className='cart-card-btn' >Delete</button>
    </div>
  )
}

export default CartCard;
