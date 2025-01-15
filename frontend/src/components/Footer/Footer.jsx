import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta asperiores minima, deleniti impedit quo id dignissimos
                      animi velit veniam vel? Fugiat provident omnis cum a voluptatum quaerat illum facere deserunt
                    .</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>delivery</li>
                    <li>policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul >
                    <li>Phone: 123-456-7890</li>
                    <li>Email: [info@company.com](mailto:info@company.com)</li>
                </ul>
            </div>
            
        </div>
<hr></hr>
<p className='footer-copyright'> Copyright 2023. All rights reserved.</p>
    </div>
  )
}

export default Footer