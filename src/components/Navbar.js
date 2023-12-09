import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";
import AmazonLogo from "../asset/amazon-logo.png"

function Navbar() {
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar-items'>
            <img src={AmazonLogo} width="100" height="100" className="logo"/>
        </div>
        <div className='navbar-items'>
            <a className='menu-item' href="/">Home</a>
            <a className='menu-item' href="/about">About Us</a>
            <a className='menu-item' href="/about">Amazon FBA</a>
            <a className='menu-item' href="/mission">Our Service</a>
            <a className='menu-item' href="/contact">Contact</a>
        </div>
      </div>
      
    </>
    
  )
}

export default Navbar


