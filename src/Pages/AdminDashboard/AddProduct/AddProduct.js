import { Button, Container, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

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
    const [category, setCategory] = useState("Pizza");

    const handleOnBlur = (e) => {
        setCategory(e.target.value);
    }
    const handleSubmit = (e) => {
    //   Send to Database 
        e.preventDefault();
    };
    return (
      <Container sx={{ display: "flex" }}>
        <Container>
          <h1 className="register-header-text">Add A Food Item</h1>

          {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}

          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Product Name"
              name="name"
              onChange={handleOnBlur}
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Price"
              type="number"
              name="Price"
              onChange={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Image URL"
              type="text"
              name="Image"
              onChange={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Description"
              type="text"
              name="Description"
              onChange={handleOnBlur}
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
              onChange={handleOnBlur}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>

          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Add Food
          </Button>
        </Container>
      </Container>
    );
};

export default AddProduct;