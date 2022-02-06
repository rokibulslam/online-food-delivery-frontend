import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../Images/Burger.png'
import './Article.css'
const Article = () => {
    return (
      <div className="article-bg">
        <div className="container">
          <div className="row justify-content-center align-items-center  ps-3">
            <div className="col-md-6 col-sm-12 text-start">
              <h4>
                <i className="banner-text">Make With Love</i>
              </h4>
              <h1 className="">We Make the Best </h1>
              <h1 className="banner-text">On the Way!</h1>
              <NavLink to="/contact">
                <button className="order-now-btn">Contact With Us</button>
              </NavLink>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Article;