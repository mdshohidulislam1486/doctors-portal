import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [image, setImage] = useState(null);
    const [succes, setSuccess] = useState(false)



    const handleSubmit = e =>{
        
        e.preventDefault()
        if(!image){
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image) 
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('Doctor addeded successfully')
                }
        
            })
            .catch(error => {
            }); 
    }

    return (
        <div className='App'> 
            <h3>Add a doctor</h3>
            <form onSubmit={handleSubmit}>
                
               <TextField 
               sx={{width:'50%'}}
               label="Name" 
               required
               variant="standard"
            //    we used to make function in the top you can write it this way too 
               onChange={e=> setName(e.target.value)}
                /> 
                <br/>
               <TextField 
               type='email'
               sx={{width:'50%'}}
               label="Email" 
               required
               onChange={e=> setEmail(e.target.value)}
               variant="standard"
                /> 
                <br/>
                {/* add multiple for multiple data  you can add png jpg etc for all type use star after image like below */}
                <Input
                 sx={{width:'100px'}}
                accept="image/*"  type="file"
                onChange={e=> setImage(e.target.files[0])}
                />
                <br/> 
                <br/> 
                    <Button   variant="contained" type='submit'>
                        Add a doctor
                    </Button>

            </form>
            {
                succes && <p style={{color:'green'}}>{succes}</p>
            }

        </div>
    );
};

export default AddDoctor;