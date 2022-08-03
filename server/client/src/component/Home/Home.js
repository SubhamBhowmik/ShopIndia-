import { useEffect } from 'react';
import React from 'react';
import Navbar from './Navbar';
import { Divider } from '@mui/material';
import Banner from './Banner';

import Slide from './Slide';
//import { products } from '../../Constant/product.js';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../Redux/Action/productAction.js';
import Footer from '../Footer';
const Home = () => {
  
  const getProducts = useSelector(state => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])
  return <>
   
   
    <Navbar/>
    <Banner/>
    <Divider />
    <Slide products={products}/>
    <Footer/>
  </>;
};

export default Home;
