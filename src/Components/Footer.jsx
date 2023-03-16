import "./FooterStyles.css"
  import React from 'react'
  import {FaHome, FaPhone, FaMailBulk,FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
  const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />
                <div>    
                    <p>Jammu and Kashmir</p>
                    <p> India</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />
                    +91-6005136951 </h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />
                vishalvermajk99@gmail.com </h4>
        </div>
        </div>
        <div className="right"> 
        <h4> About Me</h4>
        <p> I'M  Vishal verma.
          
        </p>
        <div className="social">
        <FaFacebook size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />

<FaInstagram size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />

     <FaLinkedin size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />

<FaGithub size={20} style={{
                    color:"#ffff", mariginRight:"2rem"}} />  
        </div>
        </div>
        </div>
         </div>
    )
  }
  
  export default Footer
  