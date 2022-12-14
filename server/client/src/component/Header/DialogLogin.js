import { Box } from '@material-ui/core'
import { useEffect, useState } from 'react';
import {authenticatesignup} from '../../service/api.js'

import { Dialog, DialogContent, TextField, Button, makeStyles, Typography } from '@material-ui/core';
//import { authenticateLogin, authenticateSignup } from '../../service/api';

const useStyle = makeStyles({
    componentt: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        //backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: 'green',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
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
        marginTop: 10,
        fontWeight: 600
    }
})

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



const DialogLogin = ({setOpen}) => {
    const classes = useStyle();

    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);

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
       if(res){
           alert("Sign up successful")
       }

    }
    const [cond, setcond] = useState(true)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
         
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                                {error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography>}
                                <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button className={classes.loginbtn}  >Login</Button>
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
            
        </>

    )
}

export default DialogLogin