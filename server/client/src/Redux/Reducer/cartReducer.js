
import * as ActionTypes from '../Constant/cartConstant.js'

export const cartReducer=(state={cartItems:[]},action)=>{
 switch (action.type) {
     case ActionTypes.ADD_TO_CART :
         const item=action.payload
        const exist= state.cartItems.find(product=>product.id===item.id);
        if(exist){
         return ;
        }
        return {...state,cartItems:[...state.cartItems,item]} 
        case ActionTypes.REMOVE_FROM_CART:
            
            let s =  {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
          
            return s;
     default:
         return state;
        
 }
}