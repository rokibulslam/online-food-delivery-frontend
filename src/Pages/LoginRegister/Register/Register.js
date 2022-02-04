import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const [userRegisterData, setUserRegisterData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    // Control Register Form 
    const handleOnBlur = (e) => {
      const nameField = e.target.name;
      const value = e.target.value;
      const finalRegisterData = { ...userRegisterData };
      finalRegisterData[nameField] = value;
      setUserRegisterData(finalRegisterData);
    };
    const handleRegisterSubmit = (e) => {
      if (userRegisterData.password !== userRegisterData.password2) {
        alert("Your password did not match");
        return;
      }
      registerUser(
        userRegisterData.email,
        userRegisterData.password,
        userRegisterData.name,
        navigate
      );
      e.preventDefault();
    };
    return (
      <Container sx={{ display: "flex" }}>
        <Container>
          <h1 className="register-header-text">Register Here</h1>

          {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          {/* </Grid> */}
          {/* <Grid item xs={12} md={6}>
           
          </Grid> */}
        </Container>
      </Container>
    );
};

export default Register;