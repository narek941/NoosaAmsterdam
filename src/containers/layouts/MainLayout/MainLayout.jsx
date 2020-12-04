import React from 'react';
import {Header} from '../../../components';
import {Container, Paper} from '@material-ui/core';
import "./MainLayout.css"

const MainLayout = ({children, ...props}) => {
  return(
    <>
      <Header />
      <div className="MainLayout__Container">
        
          {children}
        
      </div>
    </>
  )
};

export default MainLayout