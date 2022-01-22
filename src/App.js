import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero/Hero';
import Sidebar from './components/sidebar/Sidebar';
import Products from './components/products/Products';
import { productData, productDataTwo } from './components/products/data';
import Feature from './components/feature/Feature';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Sidebar />
        <Products heading='Your Best Ladies Collection' data={productData} />
        <Feature />
        <Products heading='Great Men Outfits' data={productDataTwo} />
        <Footer />
    </Router>
  )
}

export default App
