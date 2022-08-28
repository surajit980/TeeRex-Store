import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <h2>TeeRex Store</h2>
        </div>
        <div className='nav-right'>
            <button><Link to='/' style={{ textDecoration: 'none',color:"white" }}>Products</Link></button>
            <div className='cart-logo'>
            <Link to='/carts'> <i className="fa-solid fa-cart-shopping"></i></Link>
            <span>99</span>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
