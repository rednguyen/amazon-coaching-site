import './Footer.css'

const Footer = () => {
    return (
      <div className='footer-wrapper'>
        <div>
            <a className="social-media"><i class="fa-brands fa-facebook"></i></a>
            <a className="social-media"><i class="fa-brands fa-youtube"></i></a>
            <a className="social-media"><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <hr style={{width: "50%"}}/>
        <div className="row">
            <div className="col">
                <ul className="footer-item">
                    <a> Title 1 </a>
                </ul>
            </div>
            <div className="col">
                <ul className="footer-item">
                    <a>Title 2</a>
                    
                </ul>
            </div>
            <div className="col">
                <ul className="footer-item">
                    <a>Title 3</a>
                </ul>
            </div>
        </div>
        <hr style={{width: "80%"}}/>
        <div className="row">Copyright © 2023 by YOUR PATHWAY TO AMAZON FBA. All Rights Reserved.</div>
      </div>
  
    )
    
  };
  
  export default Footer;