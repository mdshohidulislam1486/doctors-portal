import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = ({service}) => {
    const {name, description, img} =service
    return (
       
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275,  border:'0', boxShadow:'0'}}>
            <CardMedia
                    component="img"
                    height="114"
                    style={{width:"auto", margin:'0 auto'}}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                    {name}
                    </Typography>
                
                    <Typography variant="body2" color='text.secondary'>
                    {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;