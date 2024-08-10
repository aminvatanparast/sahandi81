import React from 'react';
import Header from "../header/header";

const Index = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default Index;
