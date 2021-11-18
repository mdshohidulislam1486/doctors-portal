import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image} = doctor
    
    return (
        <Grid item xs={12} sm={6} md={4}>
              <h3>Name: {name}</h3>
              <img style={{width:'200px', height:'180px'}} src={`data:image/jpeg;base64,${image}`} alt="" />
        </Grid>
                    
    );
};

export default Doctor;