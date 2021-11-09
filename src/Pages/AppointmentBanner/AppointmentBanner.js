import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png'
import appointbg from '../../images/appointment-bg.png'
import { Button, Typography, Container } from '@mui/material';

const appointmmentBg ={
    background:`url(${appointbg}) no-repeat`,
    marginTop:"150px",
    backgroundSize:'cover',
    backgroundColor:'rgba(72, 69, 95, .8)',
    backgroundBlendMode:'darken, luminosity'
   
}

const AppointmentBanner = () => {
    return (
    <Box style={appointmmentBg} sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img src={doctor} style={{width:400, marginTop:'-110px'}} alt=''></img>
        </Grid>

        <Grid item xs={12} md={6} sx={{dispaly:'flex', justifyContent:'center', textAlign:'left', alignItems:'center'}}>
           <Container>
            <Typography variant='h6' sx={{mb:2}} style={{color:'#378D83'}}> 
                    Appointment
                </Typography>
                <Typography variant='h4' sx={{mb:2}} style={{color:'#fff'}}>
                    Make an Appointment Today
                </Typography>
                <Typography variant='h6' sx={{mb:2}} style={{color:'#9DB1B7', fontSize:14, fotntWeight:300}}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                </Typography>
                <Button variant='contained' sx={{my:2}}>Learn More</Button>
           </Container>
        </Grid>

      </Grid>
    </Box>
    )};

export default AppointmentBanner;