import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, NavLink } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';


const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch("https://lit-forest-28611.herokuapp.com/foods")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    // Delete a Food Item 
  const handleDeleteFood = (id) => {
      const confirm = window.confirm(
        "Are You Sure? You are going to delete Product"
      );
    if (confirm) {
        axios
          .delete(`https://lit-forest-28611.herokuapp.com/foods/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product has been Deleted",
                showConfirmButton: false,
                timer: 2000,
              });
              window.location.reload();
            }
          });
      }
    };
      
    return (
      <div className="my-5">
        <div className="container">
          <h4 className="banner-text ">
            <i>Special For You</i>
          </h4>
          <h1>Popular Dishes</h1>
          <div className="py-5">
            <div className="row g-5">
              {products.map((product) => (
                <div className="col-md-3">
                  <Card className="card-bg">
                    <Card.Img
                      variant="top"
                      src={product.Image}
                    />
                    <Card.Body>
                      <Card.Title>{product.Name}</Card.Title>
                      <Card.Title className="banner-text">
                        ${product.Price}
                      </Card.Title>
                      <button
                        className="card-btn"
                        onClick={() => handleDeleteFood(product._id)}
                      >
                        Delete
                      </button>
                      <NavLink
                        className="card-btn mt-2"
                        to={`/home/purchase/${product._id}`}
                      >
                        Update
                      </NavLink>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageProduct;