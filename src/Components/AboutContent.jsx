import "./AboutContentStyles.css"
import React from 'react'
import {Link} from "react-router-dom";
import React1 from "../assets/React1.png"
import React2 from "../assets/React2.png"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
<h1> Who Am I?</h1>
<p> Im a react front-end Developer. I create responsive secure website.</p>
     <Link to="/contact">
        <button className="btn"> CONTACT</button>
     </Link>
      </div>
      <div classname="right">
        <div className="img-container">
      <div className="img-stack top">
        <img src={React1}
        className="img"
        alt="true"/>
         </div>
         <div className="img-stack  bottom">
        <img src={React2}
        className="img"
        alt="true"/>
        </div>
         </div>
    </div>
    </div>
  )
}

export default AboutContent
