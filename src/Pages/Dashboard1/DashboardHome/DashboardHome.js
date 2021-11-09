import { Grid } from '@mui/material';
import * as React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointment from '../Appointment/Appointment';


const DashboardHome = () => {
    const [value, setValue] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                    <Calendar
                    value={value}
                    setValue={setValue}
                    ></Calendar>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Appointment value={value}>

                  </Appointment>

              </Grid>
          </Grid>
    );
};

export default DashboardHome;