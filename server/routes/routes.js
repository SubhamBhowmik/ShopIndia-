import express from 'express'
import { userLogIn, userSignup } from '../controller/usercontroller.js';
import {getproducts, getProductById} from "../controller/productcontroller.js"
//import { addPaymentGateway } from '../controller/payment-controller.js';
const router=express.Router();

router.post('/signup',userSignup);
router.post('/login', userLogIn);

router.get('/products',getproducts);
router.get('/product/:id', getProductById);

// router.post('/payment', addPaymentGateway);

export default router;