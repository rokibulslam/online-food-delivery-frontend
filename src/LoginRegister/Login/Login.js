
import { Button } from '@mui/material';
import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { user, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate()

  const handleGoogleSign = () => {
    signInWithGoogle(location, navigate) 
  }
  return (
    <div>
      <Button
        sx={{ width: "25%", m: 1 }}
        onClick={handleGoogleSign}
        type="submit"
        variant="contained"
      >
        Sign In With Google
      </Button>
      
    </div>
  );
};

export default Login;