import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const BookingModal = ({openBooking, handleBookingClose, booking, value, setBookingSuccess}) => {
    const {name, time, price} =booking;
    const {user} = useAuth()

    const initialInfo = {patientName:user.displayName, email: user.email, phone:'' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value
        console.log(newInfo)
        setBookingInfo(newInfo)


    }

    const handelBookingSubmit = e=>{

        // collect data from the form
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName:name,
            date: value?.toLocaleDateString()
            
        }
        console.log(appointment)
        // sent data to server  
        fetch('http://localhost:5000/appointments', {
            method:'POST',
            headers:{
                
                'content-type': 'application/json'
            },
            body:JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
              setBookingSuccess(true)
               handleBookingClose()
           }
        })


        handleBookingClose();
        e.preventDefault()
    }
    
    return (
    <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
            </Typography>
            <form onSubmit={handelBookingSubmit}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                
                <TextField
                    id="outlined-size-small"
                    disabled
                    sx={{width:"90%", m:1}}
                    defaultValue={time}
                    size="small"
                    />
                <TextField
                    id="outlined-size-small"
                    
                    sx={{width:"90%", m:1}}
                    placeholder='Your name'
                    onBlur={handleOnBlur}
                    size="small"
                    name='patientName'
                    defaultValue={user.displayName}
                    />
                <TextField
                    id="outlined-size-small"
                    
                    sx={{width:"90%", m:1}}
                    onBlur={handleOnBlur}
                    name="email"
                    placeholder='Your email'
                    size="small"
                    defaultValue={user.email}
                    />
                <TextField
                    id="outlined-size-small"
                    onBlur={handleOnBlur}
                    name='phone'
                    sx={{width:"90%", m:1}}
                    placeholder='Your phone number'
                    size="small"
                    />
                <TextField
                    id="outlined-size-small"
                    disabled
                    sx={{width:"90%", m:1}}
                    defaultValue={value.toDateString()}
                    size="small"
                    />
                    <Button  type='submit' variant='contained' defaultValue='Submit'>Submit</Button>
                
            </Typography>
            </form>
            </Box>
      </Modal>
    );
};

export default BookingModal;