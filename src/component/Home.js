import React from 'react';
import landing from '../landing.png';
import '../App.css';

const Home = () => {
  return (
    <div className='container'>
      <div className="text-center">
        <img 
          src={landing} 
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            width: '1000px', 
            height: '400px',
            marginTop: '50px'
          }} 
          alt="Landing" 
        />
        <h1 className="display-4 mt-5">Invest in everything</h1>
        <h5 className="font-weight-light">Online platform to invest in stocks, derivatives, mutual funds, and more</h5>
        <button className="font-weight-light btn btn-lg btn-info my-5" style={{ width: "200px" }} id="zerodha-btn">Sign up now</button>
      </div>
      
      <div className='row my-5'>
        <div className="col-12 col-md-6">
          <h1 className='font-weight-light'>Trust with confidence</h1>
          <h3 className='font-weight-light'>Customer-first always</h3>
          <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h3 className='font-weight-light'>No spam or gimmicks</h3>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h3 className='font-weight-light'>The Zerodha universe</h3>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='font-weight-light'>Do better with money</h3>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        
        <div className="col-12 col-md-6">
          <img 
            style={{ width: '623px', height: '612px' }} 
            src="https://zerodha.com/static/images/ecosystem.png" 
            alt="Zerodha Ecosystem"
          />
          <div className='row'>
            <div className='col-12 col-md-6'>
              <h3>Explore our products</h3>
            </div>
            <div className='col-12 col-md-6'>
              <h3>Try Kite demo</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className='row'>
        <div className='col-12 col-md-5'>
          <h1 className='font-weight-light'>Unbeatable pricing</h1>
          <h4 className='font-weight-light'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</h4>
          <h4 className='font-weight-light'>See pricing</h4>
        </div>
        
        <div className='col-12 col-md-2'>
          <div className="pricing-box">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="Free account opening" />
            <p>Free account<br/>opening</p>
          </div>
        </div>
        
        <div className='col-12 col-md-2'>
          <div className="pricing-box">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="Free equity delivery" />
            <p>Free equity delivery<br/>and direct mutual funds</p>
          </div>
        </div>
        
        <div className='col-12 col-md-2'>
          <div className="pricing-box">
            <img src="https://zerodha.com/static/images/other-trades.svg" alt="Intraday and other trades" />
            <p>Intraday and<br/>other trades</p>
          </div>
        </div>
        
        <div className='col-12 col-md-1'></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img src="https://zerodha.com/static/images/index-education.svg" alt="" srcset="" />
        </div>
        <div className="col-12 col-md-6 my-5">
          <h2>Free and open market education</h2>
          <h4>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</h4>
          <h4>Varsity </h4>
          <h4>TradingQnA, the most active trading and investment community in India for all your market related queries.</h4>
          <h4>Trading QnA </h4>
        </div>
      </div>
      <div className='text-center 'style={{marginTop:'30px'}}>
        <h1>Open a Zerodha account</h1>
        <h4>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and FnO trades.</h4>
        <button className="font-weight-light btn btn-lg btn-info my-5" style={{ width: "200px" }} id="zerodha-btn">Sign up now</button>
      </div>
    </div>
  );
};

export default Home;
