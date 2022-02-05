import { CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Products from "../Products/Products";

const ProductFetch = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div className="my-5">
      <div className="container">
        <h4 className="banner-text ">
          <i>Special For You</i>
        </h4>
        <h1>Popular Dishes</h1>
        <div>
          <div className="row">
            {products.slice(0, 6)?.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFetch;
