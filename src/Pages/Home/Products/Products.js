import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Product.css'
const Products = (props) => {
    const { _id, Name, Price, Description, Image } = props.product;
    return (
      <div className="col-md-3">
        <Card className='card-bg' >
          <Card.Img variant="top" height="200px" src={Image} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Card.Title className='banner-text'>${Price}</Card.Title>
            <NavLink className="card-btn fs-5" to={`/home/purchase/${_id}`}>
              ADD TO CART
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Products;