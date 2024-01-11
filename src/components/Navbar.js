import React, { useState } from 'react'
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import AmazonLogo from "../asset/amazon-logo.png"

function Navbar() {

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className='wrapper' id="navbar">
      <div style={{background:"brown", textAlign: "right", color:"white", padding: "5px"}}>
            <a className="social-media" href="https://www.facebook.com/profile.php?id=61555668352586"><i class="fa-brands fa-facebook"></i></a>
            <a className="social-media" href="https://www.youtube.com/@VietSellerSupport"><i class="fa-brands fa-youtube"></i></a>
            <a className="social-media" href="https://www.tiktok.com/@amazonfbahub"><i class="fa-brands fa-tiktok"></i></a>
      </div>

      <div className="book-now-wrapper">
        <a className='side-button' href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">
            <button style={{background: "rgb(230, 77, 0)"}} className="book-now">BOOK NOW</button>
        </a>
        <a className='side-button' href="https://www.facebook.com/profile.php?id=61555668352586">
            <button style={{background: "rgb(49, 67, 168)"}} className="book-now">FACEBOOK</button>
        </a>
        <a className='side-button' href="https://www.youtube.com/@VietSellerSupport">
            <button style={{background: "rgb(179, 0, 0)"}} className="book-now">YOUTUBE</button>
        </a>
        <a className='side-button' href="https://www.tiktok.com/@amazonfbahub">
            <button style={{background: "black"}} className="book-now">TIKTOK</button>
        </a>
      </div>
      

      <div style={{background:"brown", textAlign: "right", color:"white", padding: "5px"}}>
            <a className="arrow-up" href="#navbar"><i class="fa-sharp fa-solid fa-arrow-up"></i></a>
      </div>

      <div className='navbar-wrapper'>
       
      </div>
      <div className="menu">
        <div className='logo'>
            <a href="/"><img src={AmazonLogo} width="100" height="100" className="logo" /></a>
        </div>

        
        <div className='navbar-items'>
            <a className='menu-item' href="/">Home</a>
            <a className='menu-item' href="/#about-us">About Us</a>
            <a className='menu-item' href="/#amazon-fba">Amazon FBA</a>
            <a className='menu-item' href="/mission">Our Services</a>
            <a className='menu-item' href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">Contact</a>
        </div>

        {
          !openProfile && <FiAlignJustify className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
        }

        {
          openProfile && <FiXSquare className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
        }
        

        {
          openProfile && <div className='dropdown-menu'> 
          <ul>
            <a className='dropdown-menu-item' href="/">Home</a>
            <a className='dropdown-menu-item' href="/#about-us">About Us</a>
            <a className='dropdown-menu-item' href="/#amazon-fba">Amazon FBA</a>
            <a className='dropdown-menu-item' href="/mission">Our Services</a>
            <a className='dropdown-menu-item' href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">Contact</a>
          </ul>       
          </div>
        }
        
      </div>

      
      
    </div>
    
  )
}

export default Navbar


