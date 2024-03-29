import "./Mission.css"
import General from "../asset/General.png" 
import Walmart from "../asset/Walmart.png" 
import Wholesale from "../asset/Wholesale.png" 
import Privatelabel from "../asset/PrivateLabel.png" 


const Mission = () => {
    return (
      <>
        <div style={{color: "black"}} className="servicer-wrapper">
            <h1 className="service">FOR BEGINNER</h1>
            <div className='service-item'>
              <img src={General} width="500vh" height="400vh" className="amazon-step-item"/>
            </div>
            <hr style={{width: "50%"}}/>
            <h1 className="service">WALMART COURSE</h1>
            <div className='service-item'>
              <img src={Walmart} width="500vh" height="400vh" className="amazon-step-item"/>
            </div>
            <hr style={{width: "50%"}}/>
            <h1 className="service">WHOLESALE COURSE</h1>
            <div className='service-item'>
              <img src={Wholesale} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
            <hr style={{width: "50%"}}/>
            <h1 className="service">PRIVATE LABEL COURSE</h1>
            <div className='service-item'>
              <img src={Privatelabel} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
            
        </div>
      </>
    )
   
  };
  
  export default Mission;