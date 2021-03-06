import { Button, CircularProgress, Container, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import useAuth from '../../../Hooks/useAuth';

// Food Category 
const currencies = [
  {
    value: "Pizza",
    label: "Pizza",
  },
  {
    value: "Burger",
    label: "Burger",
  },
  {
    value: "Chicken",
    label: "Chicken",
  },
  {
    value: "Rice",
    label: "Rice",
  },
];


const AddProduct = () => {
  const {isLoading}= useAuth()
    const [category, setCategory] = useState("");
    const [productDetails, setProductDetails] = useState({});
    const handleOnChange = (e) => {
        setCategory(e.target.value)
       const field = e.target.name;
       const value = e.target.value;
        const newProductDetails = { ...productDetails };
        newProductDetails[field] = value;
        setProductDetails(newProductDetails);

    }
    
    const handleSubmit = (e) => {
    //   Send Product to Database 
      axios
        .post("https://lit-forest-28611.herokuapp.com/foods", productDetails)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Food Item Inserted Successfully`,
              showConfirmButton: false,
              timer: 2000,
            });
            setProductDetails({});
            window.location.reload();
          }
        });
        e.preventDefault();
    };
    return (
      <Container sx={{ display: "flex" }}>
          { (isLoading) &&
     <CircularProgress />}
  
        <Container>
          <h1 className="register-header-text">Add A Food</h1>

          {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}

          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Product Name"
              name="Name"
              onChange={handleOnChange}
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Price"
              type="number"
              name="Price"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Image URL"
              type="text"
              name="Image"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Description"
              type="text"
              name="Description"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Rating"
              type="text"
              name="Rating"
              onChange={handleOnChange}
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              select
              variant="standard"
              name="Category"
              label="Category"
              value={category}
              onChange={handleOnChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Add Food
            </Button>
          </form>
        </Container>
      </Container>
    );
};

export default AddProduct;