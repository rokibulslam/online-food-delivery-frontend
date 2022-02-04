import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Products from '../Home/Products/Products';

const AllFoods = () => {
    const [products, setProducts] = useState([]);
    const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
      fetch("http://localhost:5000/foods")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <Container sx={{ mt: 5 }}>
        <h1>Lets Order</h1>
        {isLoading && <CircularProgress />}
        <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
          <Grid container spacing={4}>
            {products?.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </Grid>
        </Box>
      </Container>
    );
};

export default AllFoods;