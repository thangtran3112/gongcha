import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/main.css';
import 'normalize.css';
import {Helmet} from "react-helmet";

const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
