import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../Redux/Action/productAction.js'
import { addToCart } from '../../Redux/Action/cartAction.js';
import { Redirect, useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Footer from '../Footer.js';
//import { payUsingPaytm } from '../../service/api.js';
//import { post } from '../utils/paytm.js';
const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        width: "100%",
        marginTop: 55,
       

    },
    container: {

        // margin: '0 80px',
        marginTop: 55,
        display: 'flex',
        
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },


    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    },
    imgcontainer: {
        padding: '56px 30px 0 50px',
        height: "20vh"

    },
    footer:{
     marginTop:"55vh",
     [theme.breakpoints.down('md')]: {
        marginTop:"30vh"
    }
    },

    btn: {
        height: '5vh',
        fontSize: 16,
        borderRadius: "4px",
        fontWeight: "700",
        '&:hover': {
            background: "#20c997",
        },
    },

}));

const data = {
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    },
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '',
    tagline: ''
};

const DetailView = ({ match }) => {
    const classes = useStyles();
    const history = useHistory();

    const { product } = useSelector(state => state.getProductDetails);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart')
    }

    // const buynow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return (
        <>
            <Box className={classes.component}>
                {
                    product && Object.keys(product).length &&
                    <Box className={classes.container}>
                        <Box className={classes.leftwrap} style={{ minWidth: '40%', marginRight: '2rem' }}>
                            <Box className={classes.imgcontainer}>
                                <img src={product.detailUrl} style={{ width: '28vw' }} />


                            </Box>

                        </Box>
                        <Box className={classes.rightContainer}>
                            <Typography>{product.title.longTitle}</Typography>
                            <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 5 }}>
                                8 Ratings & 1 Reviews

                            </Typography>
                            <Typography>
                                <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                                <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                                <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                            </Typography>


                            <button type="button" onClick={addItemToCart} style={{ marginRight: '10px' }} class="btn btn-outline-dark "><AddShoppingCartIcon />Add To Cart</button>
                            <button type="button" class="btn btn-outline-success "  ><LocalOfferIcon style={{ marginRight: '.2rem' }} />Buy Now</button>
                        </Box>
                      
                    </Box>
               
                  
                }
               
            </Box>
            <Box className={classes.footer}>
                <Footer/>
            </Box>
        </>
    )
}

export default DetailView;

//add to cart main clcik karna sa jo prodcut object woh cart main send hona chahiya using redux