import React from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='App'>
         <Navigation></Navigation>
         <Banner></Banner>
         <Services></Services>
         <AppointmentBanner></AppointmentBanner>
         <Doctors></Doctors>
        </div>
    );
};

export default Home;