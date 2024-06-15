import React from 'react'
import './Footer.css'
import {assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Foody delivers diverse cuisines swiftly from local
                     restaurants with real-time tracking and secure payments.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>91+ 810903174</li>
                    <li>conatct@foody.com</li>
                </ul>
            </div>
        </div> 
        <hr />
        <p className="footer-copyright">Copyright © 2024 Foody.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
