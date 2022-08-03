


import { AppBar, Button, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Menu } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge, Dialog, TextField, Card } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Login from '../Login/Login';
import DialogLogin from './DialogLogin';
import { authenticatesignup, authenticateLogin } from '../../service/api.js'
import { LoginContext } from '../../context/contextProvider';
import Profile from './Profile';

import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';

const useStyle = makeStyles(theme => ({
    componentt: {
      
        height: '60vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        //backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: 'green',
       
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        [theme.breakpoints.down('md')]: {
            height:"55vh",
       

        },
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        [theme.breakpoints.down('md')]:{
          fontSize:"14px"
        },
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: 'green',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 5,
        fontWeight: 600
    },
    header: {
        background: 'black',
        height: 55
    },
    component: {
        marginLeft: '5%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 20
    },
    container: {
        display: 'flex',
        color:"#fff",
        lineHeight: 0,
        textDecoration: 'none'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);





const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}






const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;




    // const list = () => (
    //     <Box className={classes.list} onClick={handleClose}>
    //         <List>
    //             <listItem button>
    //                 <CustomButtons />
    //             </listItem>
    //         </List>
    //     </Box>
    // );
    const [username, setusername] = useState(loginInitialValues)
    const [open, setOpen] = useState(false)
    const [turn, setturn] = useState(false)
    const [error, seterror] = useState(false)
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [accountt, toggleAccount] = useState(accountInitialValues.login);
    const [cond, setcond] = useState(false)



    const { account, setaccount } = useContext(LoginContext)

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setturn(false)
    };



    const [duck, setduck] = useState(true)


  


    // useEffect(() => {
    //     showError(false);
    // }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }





    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }


    const signupData = async () => {
        let res = await authenticatesignup(signup)

        if (!res) return;
        if (res) {
            alert("Sign up successful")

        }

        toggleAccount(accountInitialValues.login);
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response)
            seterror(true);
        else {
            seterror(false);
            alert("Login Successful")

            setcond(true);
            setduck(false);

            setusername(login.username);
            setaccount(login)

            handleClose();
        }
    }

    console.log(account, "accountttt");
    const [cardopen, setcardopen] = useState(false)
    const userlogout = () => {
        setcardopen(true)
    }
    const cardClose = () => {
        setcardopen(false)
    }


    const [anchorEl, setAnchorEl] = useState(null);
    const openn = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClosee = () => {
        setAnchorEl(null);
    };
    const [openlogout, setopenlogout] = useState(true)

    const logout=()=>{
        
        setcond(false)
        setaccount("")
        setopenlogout(true)
    }
    
  const  subham=()=>{
     setopenlogout(!openlogout)
    }
    return (
        <>
            <AppBar position="fixed" className={classes.header}>
                <ToolBar>
                  



                    <Link to='/' className={classes.component} >
                        <Typography style={{color:"white"}}>ShopIndia by Subham</Typography>
                       
                    </Link>
                    <Search />
                    <Box>
                        <Box>


                            <Button style={{ color: 'white' }} variant="outlined" onClick={handleClickOpen} hidden={cond}>
                                Login
                            </Button>

                            <Dialog open={open} onClose={handleClose}>
                                <Box style={{display:"flex"}}>
                                    <Box className={classes.image}>
                                        <Typography variant="h5">{accountt.heading}</Typography>
                                        <Typography style={{ marginTop: 20 }}>{accountt.subHeading}</Typography>
                                    </Box>
                                    {
                                        accountt.view === 'login' ?
                                            <Box className={classes.login}>
                                                <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                                                {error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography>}
                                                <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                                <Button className={classes.loginbtn} onClick={loginUser}  >Login</Button>
                                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                                <Button className={classes.requestbtn}>Request OTP</Button>
                                                <Typography className={classes.createText} onClick={toggleSignup} >New to User? Create an account</Typography>
                                            </Box> :
                                            <Box className={classes.login}>
                                                <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                                <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                                <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                                <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                                <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                                <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                                <Button className={classes.loginbtn} onClick={signupData} >Continue</Button>
                                                <Typography style={{ marginTop: "3px" }} className={classes.createText} onClick={() => toggleAccount(accountInitialValues.login)} >Already have account? Login here</Typography>
                                            </Box>
                                    }
                                </Box>
                            </Dialog>



                        </Box>

                    </Box>
                    <Link to='/cart' className={classes.container}>
                        <Badge badgeContent={cartItems?.length} color="secondary">
                            <ShoppingCart style={{color:"white"}} />
                        </Badge>
                        <Typography style={{ color:"white",position: 'fixed', marginLeft:12, paddingLeft: '1.4rem' }}>Cart</Typography>
                    </Link>{
                        account.username &&
                        <Box>

                            <Button
                                style={{ color: 'white',marginLeft:"4rem"}}
                                onClick={subham}
                            >
                                {account.username}
                            </Button>
                           <Box> <MenuItem hidden={openlogout}  style={{position:"absolute",fontSize:".9rem",marginLeft:"4rem",background:'green',marginTop:".2rem"}} onClick={logout} ><Logout/>Logout</MenuItem></Box>
                         

                        </Box>

                    }


                </ToolBar>
            </AppBar>


        </>
    )
}

export default Header;