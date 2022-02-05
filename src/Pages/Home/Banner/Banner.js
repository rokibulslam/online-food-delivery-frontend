import React from "react";
import Button from "@restart/ui/esm/Button";
import { NavLink } from "react-router-dom";
import img from '../../../Images/inna-podolska-JspLKUauwSI-unsplash-removebg.png'
import "./Banner.css";
const Banner = () => {
  return (
    <div className="py-5 banner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 pt-5 col-sm-12  text-start">
            <h4 className="h1-tag text-start">
              <i>Best Choice</i>{" "}
            </h4>
            <h1 className="h1-tag banner-text text-start">NEWYORK FIRE</h1>
            <p className="text-white text-start">
              A public eating establishment similar to a restaurant is mentioned
              in a 512 BC record from Ancient Egypt. The establishment served
              only one dish, a plate of cereal, wild fowl, and onions.
            </p>
            <NavLink to="/explore">
              <button className="order-now-btn fw-light">Order Now</button>
            </NavLink>
          </div>
          <div className="col-md-6 ">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
