import { useState } from 'react';

import { FormControl, FormGroup, Input, Button, InputLabel, Typography,styled } from '@mui/material';

import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 50px auto 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 25px;
    border-radius: 10px;
    & > div {
        margin-top: 20px
    }
`

const initialValue = {
        name: '',
        username: '',
        email: '',
        phone: '',
}


const AddUser = () => {

    const [user, setUser] = useState(initialValue)
    const navigate = useNavigate();

    const onValueChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }

    const addUserDetails = async () => {
       await addUser(user);
       navigate('/all')

    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='name' />
            </FormControl> 
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='username' />
            </FormControl> 
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='email' />
            </FormControl> 
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='phone' />
            </FormControl> 
            <FormControl>
                <Button onClick={() => addUserDetails()}variant='contained'> Add User </Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;