import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const navigate = useNavigate()
  if (!user) {
    return navigate('/');
  }
  return children;
};

export default ProtectedRoute;