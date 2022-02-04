import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Products from '../Products/Products';

const ProductFetch = () => {
    const [products, setProducts] = useState([]);
     const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products)
    return (
      <div>
        <h1>Lets Order</h1>
        <Container>
          {isLoading && <CircularProgress />}
          <Box sx={{ flexGrow: 1, m: 5 }}>
            <Grid container spacing={4}>
                {
                     products.map(product =><Products key={product._id} product={product}></Products>)
                }
            </Grid>
          </Box>
        </Container>
      </div>
    );
};

export default ProductFetch;