import { Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluriode from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';


const services = [
  {
    name:'Fluoride Treatment',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis dolore accusamus amet consequatur obcaecati, totam maxime mollitia ducimus, laudantium eum quidem architecto sint tempora ipsum assumenda',
    img:fluriode
  },
  {
    name:'Cavity filling',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis dolore accusamus amet consequatur obcaecati, totam maxime mollitia ducimus, laudantium eum quidem architecto sint tempora ipsum assumenda',
    img:cavity
  },
  {
    name:'Teeth Whitening',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis dolore accusamus amet consequatur obcaecati, totam maxime mollitia ducimus, laudantium eum quidem architecto sint tempora ipsum assumenda',
    img:whitening
  }

]

const Services = () => {
    
    return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{fontWeight:500, m:2, color:'success.main'}} variant='h6' component='div'>
            OUR SERVICES
          </Typography>
          <Typography sx={{fontWeight:'600', m:5}} variant='h4' component='div'>
            Services We Provide 
          </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service =><Service service={service} key={service.name}></Service>)
          }
         
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;