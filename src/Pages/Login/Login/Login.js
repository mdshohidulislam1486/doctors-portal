import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png'
import {  NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const [loaginData, setLogingData] = useState({})
    const {user, loginUser, isLoading, authError,  signInwithGoogle} = useAuth()
    const location = useLocation()
    const history  = useHistory()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loaginData}
        newLoginData[field] =value;
        setLogingData(newLoginData)

        console.log(loaginData)

    }
    const handleLoginSubmit =e=>{
        loginUser(loaginData.email, loaginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogleSignIn=()=>{
        signInwithGoogle(location, history)
    }
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2}> 
                <Grid item xs={12} md={6} sx={{mt:5}}>
                    <Typography variant={'body1'} gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                     <TextField sx={{width:"75%"}} id="standard-basic" onBlur={handleOnChange} name='email' label="Your Email" variant="standard" />
                     <TextField sx={{width:"75%"}} name='password' onBlur={handleOnChange}  type="password" id="standard-basic" label="Your Password" variant="standard" />
                    <Button type='submit' sx={{bgcolor:"success.main", width:"75%", my:2}} variant='contained'>Login</Button>
                    <NavLink style={{textDecoration:'none'}} to='/register'><Button variant="text" > New User? Plese register</Button></NavLink>
                     {isLoading && <CircularProgress /> }
                        {user?.email && <Alert severity="success">Successfully loged in</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <div>----------------------------</div>
                    <Button  onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img  style={{width:"100%"}} src={loginImg} alt="" />
                </Grid>

            </Grid>
        </Container>
       
    );
};

export default Login;