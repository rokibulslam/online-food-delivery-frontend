import React from 'react';
import img from '../../../Images/packet.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


import './Quality.css'
const Quality = () => {
    return (
      <div className="quality-bg">
        <div className="container">
          <div className="row justify-content-center align-items-center py-5 ps-3">
            <div className="col-md-6 col-sm-12 text-start ">
              <h3 className="banner-text">
                <i>Fast Delivery</i>
              </h3>
              <h1>Your Favourite Pizza,</h1>
              <h1 className="banner-text">On The Way</h1>
              <p>
                pizza, dish of Italian origin consisting of a flattened disk of
                bread dough topped with some combination of olive oil, oregano,
                tomato, olives, mozzarella or other cheese, and many other
                ingredients, baked quickly—usually, in a commercial setting,
                using a wood-fired oven heated to a very high temperature—and
                served hot.
              </p>
              <div className="d-flex">
                <div className="d-flex flex-column m-3">
                  <FontAwesomeIcon icon={faCoffee} size="3x" />
                  <p>
                    Delivery In <br /> 30 Minutes
                  </p>
                </div>
                <div className="d-flex m-3 flex-column">
                  <FontAwesomeIcon icon={faCoffee} size="3x" />
                  <p>
                    Free Shipping <br /> from 75$
                  </p>
                </div>
                <div className="d-flex m-3 flex-column">
                  <FontAwesomeIcon icon={faCoffee} size="3x" />
                  <p>
                    Delivery on <br />
                    your deskstep
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Quality;