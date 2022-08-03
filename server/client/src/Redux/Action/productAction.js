//sb action api calling and dispatch sb akhane hoibo

import * as actionTypes from '../Constant/productsConstant.js';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};
export const  getProductDetails = (id) => async (dispatch) => {
    try {
      
        const { data } = await axios.get(`/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCTS_Details_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_Details_FAIL, payload: error.response });
    }
};