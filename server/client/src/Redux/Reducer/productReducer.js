
//Reducer ar moddha switch case apply hoibo ja action and state as a props nibo and further process krbo
//as like filter out krbo data ree


import * as actionTypes from '../Constant/productsConstant.js';


export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetailsReducer=(state={product:{}},action)=>{
 switch (action.type) {
     case actionTypes.GET_PRODUCTS_Details_SUCCESS:
         
     return {product:action.payload}
     case actionTypes.GET_PRODUCTS_Details_FAIL:
         return {error:action.payload}
     default:
         return state;
 }
}