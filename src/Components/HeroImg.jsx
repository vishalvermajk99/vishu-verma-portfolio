import "./HeroImgStyles.css";
import React from 'react'
import Pic from "../assets/pic.png"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="into-img"
      src={Pic} alt="Pic"/>
        </div> 
        <div className="content">
          <p> HELLO , I'M VISHAL VERMA </p>
          <h1> REACT DEVELOPER </h1>
          <div>
            <Link to="/project"
            className="btn"> Projects </Link>
             <Link to="/contact"
            className="btn btn-light"> Contact </Link>
          </div>
        </div>
        </div>;
};

export default HeroImg ;
