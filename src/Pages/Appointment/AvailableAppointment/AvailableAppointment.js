import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings =[
    {
        id:4,
        name:'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price:20,
        space:5 
    }, 
    {
        id:5,
        name:'Peditaric Dental',
        time: '06.00 AM - 07.00 PM',
        price:19,
        space:10
    }, 
    {
        id:6,
        name:'Oral Surgery ',
        time: '07.00 AM - 11.00 PM',
        price:18,
        space:5 
    }, 
    {
        id:7,
        name:'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        price:17,
        space:12
    }, 
    {
        id:8,
        name:'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        price:15,
        space:15
    }, 
    {
        id:9,
        name:'Teeth Cleaning',
        time: '05.00 PM - 06.30 AM',
        price:10,
        space:8
    }, 
] 

const AvailableAppointment = ({value}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant='h3' sx={{ color: 'success.main'}}>Avialable appintment on {value.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment booked successfully</Alert>}

   
            <Grid container spacing={2}>
                {
                    bookings.map(booking=> <Booking
                    key={booking.id}
                    booking={booking}
                    value={value}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
               
            </Grid>
        
        </Container>
    );
};

export default AvailableAppointment;