
import React, { useState } from 'react';

import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu,setMenu]= useState("shop");
  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Voltrium</p>
        </div>
        <ul className="nav-menu">
            <li onClick ={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop" ? <hr/>: <></>}</li>
            <li onClick ={()=>{setMenu("arduino")}}> <Link to='/arduino'>Arduino</Link>{menu==="arduino" ? <hr/>: <></>}</li>
            <li onClick ={()=>{setMenu("supplier")}}><Link to='/suppliers'>Suppliers</Link> {menu==="supplier" ? <hr/>: <></>} </li>
            <li onClick ={()=>{setMenu("component")}}><Link to='/components'>Components</Link> {menu==="component" ? <hr/>: <></>} </li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
