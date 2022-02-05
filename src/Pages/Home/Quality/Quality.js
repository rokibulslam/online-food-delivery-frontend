import React from 'react';
import img from '../../../Images/packet.png'
import './Quality.css'
const Quality = () => {
    return (
      <div className="quality-bg">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 text-start ">
              <h3 className="banner-text">
                <i>Fast Delivery</i>
              </h3>
              <h1>Your Favourite Pizza,</h1>
              <h1 className="banner-text">On The Way</h1>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Quality;