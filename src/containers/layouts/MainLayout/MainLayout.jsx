import React from 'react';
import {Header,Footer} from '../../../components';
import "./MainLayout.css"

const MainLayout = ({children, ...props}) => {
  return(
    <>
      <Header />
      <div className="MainLayout__Container">
        
          {children}
        
      </div>
      <Footer />
    </>
  )
};

export default MainLayout