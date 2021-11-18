import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, value, setBookingSuccess}) => {
    const {name, time, space, price} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5, px:2}}>
                <Typography sx={{ color: 'success.main', fontWeight:600 }} variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant='caption' gutterBottom component='div'>
                    {space} Spaces Avialable
                </Typography>
                <Typography variant='caption' gutterBottom component='div'>
                    Price: ${price} 
                </Typography>
                <Button onClick={handleBookingOpen} sx={{ bgcolor: 'success.main', fontWeight:600 }} variant='contained'>Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
        value={value}
        booking={booking}  
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
        ></BookingModal>
        </>
    );
};

export default Booking;