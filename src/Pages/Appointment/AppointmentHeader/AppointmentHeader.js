import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({value, setValue}) => {
    
    return (
        <div> 
           <Container>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6}>
                        <Calendar value={value} setValue={setValue}></Calendar>
                   </Grid>

                   <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={chair} alt=""/>

                   </Grid>


               </Grid>
           </Container>
        </div>
    );
};

export default AppointmentHeader;