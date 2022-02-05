
import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, isLoading, authError, loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate()

  // Login Control 
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSign = () => {
    signInWithGoogle(location, navigate) 
  }

  return (
    <div>
      <Navigation></Navigation>
      <Container sx={{ display: "flex" }}>
        <Container>
          <h1 className="register-header-text">Login Here</h1>

          {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
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

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>

              <div>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert sx={{ width: "75%", m: 1 }} severity="success">
                    Logged In successfully!
                  </Alert>
                )}
                {authError && (
                  <Alert sx={{ width: "75%", m: 1 }} severity="error">
                    {authError}
                  </Alert>
                )}
              </div>
            </form>
          )}

          {/* </Grid> */}
          {/* <Grid item xs={12} md={6}>
           
          </Grid> */}
          <Button
            sx={{ width: "75%", m: 1 }}
            onClick={handleGoogleSign}
            
            variant="contained"
          >
            Sign In With Google
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/register"> <br/>
            <Button variant="text">Register Here</Button>
          </NavLink>
        </Container>
      </Container>
    </div>
  );
};

export default Login;