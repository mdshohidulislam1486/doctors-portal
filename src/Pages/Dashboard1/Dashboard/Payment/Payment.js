import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JwUsYIi6O5hRZ5M9MZIF6ziXtO0IPDt63ig4urwBVWYPQDqmmwCGKsaF7bkL7zH4JxF5Eks9iE6OyObRChadb5U00f9C3rIFp')


const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <div className='App'>
        <h2>Please pay for: {appointment.patientName} for {appointment.serviceName} </h2>
        <h4>Pay: ${appointment?.price} </h4>
        {appointment.price && <Elements stripe={stripePromise}>
          <CheckOutFrom 
          appointment={appointment}
          />
        </Elements>}

            
        </div>
    );
};

export default Payment;