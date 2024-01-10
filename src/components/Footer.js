import './Footer.css'

const Footer = () => {
    return (
      <div className='footer-wrapper'>
        <div className="social-media-wrapper">
            <a className="social-media" href="https://www.facebook.com/profile.php?id=61555668352586"><i class="fa-brands fa-facebook"></i></a>
            <a className="social-media" href="https://www.youtube.com/@VietSellerSupport"><i class="fa-brands fa-youtube"></i></a>
            <a className="social-media" ><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <hr style={{width: "50%"}}/>
        <div className="row">
            <div className="col">
                    <a className="footer-item" style={{color:"white"}} href="/">Home</a>
            </div>
            <div className="col">
                    <a className="footer-item" style={{color:"white"}} href="/#about-us">About Us</a>
            </div>
            <div className="col">
                    <a className="footer-item" style={{color:"white"}} href="/#amazon-fba">Amazon FBA</a>
            </div>
            <div className="col">
                    <a className="footer-item" style={{color:"white"}} href="/mission">Our Services</a>
            </div>
            <div className="col">
                    <a className="footer-item" style={{color:"white"}} href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">Contact</a>
            </div>
        </div>
        <hr style={{width: "80%"}}/>
        <div className="row">Copyright © 2023 by YOUR PATHWAY TO AMAZON FBA. All Rights Reserved.</div>
      </div>
  
    )
    
  };
  
  export default Footer;