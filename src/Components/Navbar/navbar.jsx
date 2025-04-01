import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
      <div className="nav">
        <div className="logo"> <img src={logo} alt="" /></div>
        <nav className='navbarr'>
          <Link className='LKKu' to='/'>HOME</Link>
          <Link className='LKKu' to='/'>ABOUT</Link>
          <Link className='LKKu' to='/'>FACTORY</Link>
          <Link className='LKKu' to='/'>PRODUCT</Link>
          <Link className='LKKu' to='/'>CONTACT</Link>
        </nav>
      </div> 
  )
}

export default navbar
