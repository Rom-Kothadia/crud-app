import { useEffect, useState } from 'react';

import { FormControl, FormGroup, Input, Button, InputLabel, Typography,styled } from '@mui/material';

import { getUser, editUser } from '../service/api';
import { useNavigate,useParams } from 'react-router-dom';


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


const EditUser = () => {

    const [user, setUser] = useState(initialValue)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserDetails();
    },[])

    const onValueChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }

    const getUserDetails = async () => {
       let response = await getUser(id);
        setUser(response.data)
    }

    const addUserDetails = async () => {
        await editUser(user, id);
        navigate('/all')
    }

    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='name' value={user.name} />
            </FormControl> 
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='username' value={user.username}/>
            </FormControl> 
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='email' value={user.email}/>
            </FormControl> 
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(event) => onValueChange(event)} name='phone' value={user.phone} />
            </FormControl> 
            <FormControl>
                <Button onClick={() => addUserDetails()}variant='contained'> Edit User </Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;