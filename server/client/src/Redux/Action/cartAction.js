import * as actionTypes from '../Constant/cartConstant.js';
import axios from 'axios';

export const addToCart = (id) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: data});

       
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};