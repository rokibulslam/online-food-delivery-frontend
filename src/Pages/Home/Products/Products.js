import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Products = (props) => {
    const { _id, Name, Price, Description, Image } = props.product;
    console.log(props.product);
    return (
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        item
        xs={12}
        md={4}
      >
        <Card
          sx={{
            maxWidth: 500,
            textAlign: "start",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Price:${Price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Description.slice(0, 100)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <NavLink
              style={{ textDecoration: "none" }}
              to={`/home/purchase/${_id}`}
            >
              <Button variant="contained">Purchase</Button>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
    );
};

export default Products;