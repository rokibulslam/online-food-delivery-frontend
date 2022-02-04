
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const { user, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate()

  const handleGoogleSign = () => {
    signInWithGoogle(location, navigate) 
  }
  return (
    <div>
      <Button onClick={handleGoogleSign}>Sign In With Google</Button>
    </div>
  );
};

export default Login;