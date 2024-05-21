import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div>
            {children}    {/*destructure directly other wise we have to use props.children*/}
        </div>
        <Footer/>
    </>
  );
};

export default Layout;

