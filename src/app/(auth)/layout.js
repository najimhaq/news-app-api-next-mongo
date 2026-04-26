import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { montserrat } from '../layout';

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className} min-h-screen flex flex-col bg-background text-foreground`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
