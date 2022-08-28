import React from 'react'

const CartCard = () => {
  return (
    <div className='cart-card-container'>
      <img src='https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg' alt=''></img>
      <div className='cart-card-details'>
        <h4>Blck Widow</h4>
        <p>Rs. 500 </p>
      </div>
      <div>
      <select name="quantity" className="cart-card-select">
        <option value={1}>Qty 1</option>
        <option value={2}>Qty 2</option>
        <option value={3}>Qty 3</option>
        <option value={4}>Qty 4</option>
      </select>
      </div>
      <button className='cart-card-btn'>Delete</button>
    </div>
  )
}

export default CartCard;
