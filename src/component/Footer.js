import React from 'react';
// import { MdCall } from "react-icons/md";
import { FaYoutube, FaWhatsapp, FaTelegram, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import '../App.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="row" style={{ margin: "30px" }}>
        <div className="col-12 col-md-3">
          <img src="https://zerodha.com/static/images/logo.svg" alt="" srcSet="" className="navbar-logo" />
          <br/>
          <h5>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</h5>
          <br/>
          <div className="row">
            <div className="col-12 col-md-2"><FaInstagram/></div>
            <div className="col-12 col-md-2"><FaXTwitter/></div>
            <div className="col-12 col-md-2"><FaLinkedinIn/></div>
            <div className="col-12 col-md-2"><FaXTwitter/></div>
            <div className="col-12 col-md-4"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-12 col-md-2"><FaYoutube/></div>
            <div className="col-12 col-md-2"><FaWhatsapp/></div>
            <div className="col-12 col-md-2"><FaTelegram/></div>
            <div className="col-12 col-md-6"></div>
          </div>
        </div>


        <div className='col-12 col-md-3'>
          <h3>Company</h3>
          <h5>About</h5>
          <h5>Products</h5>
          <h5>Pricing</h5>
          <h5>Referral programme</h5>
          <h5>Zerodha.tech</h5>
          <h5>Press And media</h5>
          <h5>Zerodha Cares (CSR)</h5>
        </div>
        <div className='col-12 col-md-3'>
          <h3>Support</h3>
          <h5>Contact us</h5>
          <h5>Support portal</h5>
          <h5>Z-Connect blog</h5>
          <h5>Downloads n resources</h5>
          <h5>Market overview</h5>
          <h5>How to file a complaint?</h5>
          <h5>Status of your complaints</h5>
        </div>
        <div className='col-12 col-md-3'>
          <h3>Open an account</h3>
          <h5>Fund transfer</h5>
          
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
