import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';

const bannerBg = {
    background:`url(${bg})`,

}
const verticalCenter={
    display:"flex",
    alignItmes:'center',
    height:'400px',

}

const Banner = () => {
    return (
            <Container style={bannerBg} sx={{ mt:5, flexGrow: 1 }}> 
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={6}>
                    <Box>
                    <Typography variant='h2'>Your New Spmile <br/> Starts Here</Typography>
                    <Typography variant='h6'  sx={{fontSize:14, color:"gray", my:3}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</Typography>
                    <Button variant='contained' sx={{my:2}}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{maxWidth:"100%"}} src={chair} alt=''/>

                </Grid>
            </Grid>
            </Container>
    );
};

export default Banner;