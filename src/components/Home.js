import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import Container from 'react-bootstrap/Container'; 
import "./Home.css";
import AmazonGuide from "../asset/amazon-guide.jpg" 
import AmazonProcess from "../asset/amazon-process.png" 
import Step1 from "../asset/step1.png" 
import Step2 from "../asset/step2.png" 
import Step3 from "../asset/step3.png" 
import Step4 from "../asset/step4.png" 
import Step5 from "../asset/step5.png" 
import Step6 from "../asset/step6.png" 

const Home = () => {
    return (
      <>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">
          <button className="book-now">BOOK NOW</button>
        </a>
        
        <div className="who-we-are-wrapper" id="about-us">
          <div style={{color: "black"}} className="who-we-are">
              <h2>Who We Are</h2>
              <h4>Welcome to our online course, your gateway to success in the dynamic world of e-commerce through Amazon FBA (Fulfillment by Amazon) coaching. 
                In the ever-evolving landscape of online retail, mastering the intricacies of Amazon FBA is the key to unlocking unparalleled growth 
                and profitability for your business.</h4>
              <h4>We understand that navigating the complexities of Amazon FBA can be a daunting task. Whether you're a seasoned entrepreneur looking to optimize 
                your strategy or a newcomer eager to embark on a lucrative e-commerce journey, our comprehensive coaching services are tailored to meet your specific needs.</h4>
              <h4>Our team of seasoned experts brings a wealth of experience in the Amazon marketplace, having successfully navigated the challenges and harnessed the 
                opportunities it presents. We are dedicated to empowering you with the knowledge, tools, and strategies needed to thrive in the highly competitive world of online retail.</h4>
              <h4>What sets us apart is our commitment to providing personalized, results-driven coaching. We go beyond the basics, offering in-depth insights, actionable strategies, 
                and ongoing support to ensure your success. From product sourcing and listing optimization to inventory management and marketing, our coaching encompasses every facet of the Amazon 
                FBA ecosystem.</h4>
              <h4>Embark on a transformative journey with Your Pathway to Amazon FBA, where your ambitions meet expertise. Join us, and let's unlock the full potential of your Amazon FBA business together. 
                Success awaits – are you ready to seize it?</h4>
          </div>
          <div className="who-we-are">
              <img src={AmazonGuide} width="500vh" height="500vh" className="amazon-guide"/>
          </div>
        </div>
       

        <div className='what-is-amazon-fba' id='amazon-fba'>
          <div style={{width:"50%", textAlign:"center", margin: "0 auto"}}>
            <h1>What is Amazon FBA</h1>
            <h4>Fulfillment by Amazon (FBA) is a program that lets you to outsource order fulfillment to Amazon. This ecommerce fulfillment option
              is part of a fully automated set services we call Supply Chain by Amazon.
                With FBA, Amazon stores, picks, packs, ships, and delivers the products to customers.
            </h4>
          </div>
          <div>
              {/* <img src={AmazonProcess} width="auto" height="auto" className="logo"/> */}
          </div>
        </div>

        <div className="statistics-wrapper">
          <h1>Our Services</h1>
          <div>
            <div className='statistics'>
              <i class="fa-solid fa-building" style={{color: "#000000", fontSize: "15vh"}}></i>
              <h4>500+ Businesses Join Our Course</h4>
            </div>
            <div className='statistics'>
              <i class="fa-solid fa-money-bill" style={{color: "#000000", fontSize: "15vh"}}></i>
              <h4>30%+ Profit Margin</h4>
            </div>
            <div className='statistics'>
              <i class="fa-solid fa-shop" style={{color: "#000000", fontSize: "15vh"}}></i>
              <h4>Multiple Leads per Day</h4>
            </div>
          </div>
            
          {/* <div style={{display:"flex"}}>
            <div className='statistics'>
              <h2>Don't have a LLC for your Amazon business yet?</h2>
              <h5>We'll set you a new one</h5>
            </div>
            <hr style={{width: "1px", height: "200px", display: "inline-block"}}></hr>
            <div className='statistics'>
              <h2>Not sure how to apply for sales tax certificate?</h2>
              <h5>We'll help you</h5>
            </div>
            <hr style={{width: "1px", height: "200px", display: "inline-block"}}></hr>
            <div className='statistics'>
              <h2>Don't know which vendor to deal with?</h2>
              <h5>We got the connection you need</h5>
            </div>
          </div> */}

          
          {/* <div style={{padding: "2vh"}}>
            <iframe width="30%" height="315" src="https://www.youtube.com/embed/77UmQ5x1ENg?si=p16cGd9BtDIAhvb6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen="true"></iframe>
          </div> */}

          <div className='amazon-step-wrapper' style={{padding: "10px"}}>
            <div className='amazon-step'>
              <img src={Step1} width="500vh" height="400vh" className="amazon-step-item"/>
            </div>
            <div className='amazon-step'>
              <img src={Step2} width="500vh" height="400vh" className="amazon-step-item"/>
            </div>
            <div className='amazon-step'>
              <img src={Step3} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
            <div className='amazon-step'>
              <img src={Step4} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
            <div className='amazon-step'>
              <img src={Step5} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
            <div className='amazon-step'>
              <img src={Step6} width="500vh" height="400vh" className="amazon-step-item"/>  
            </div>
          </div>

        </div>
      </>
      
  
    )
    
  };
  
  export default Home;