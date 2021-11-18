import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2>Our doctors</h2>
            <h2>our Doctors: {doctors.length}</h2>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                        doctor={doctor}
                        key={doctor._id}
                        ></Doctor>)
                    }
                </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Doctors;