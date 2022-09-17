import styled from "@emotion/styled";
import { FormControl, FormGroup, Input, Button, InputLabel, Typography } from "@mui/material";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    ${'' /* width: 250px; */}
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 25px;
    border-radius: 10px;
    & > div {
        margin-top: 20px
    }
`


const AddUser = () => {
    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input />
            </FormControl> 
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input />
            </FormControl> 
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input />
            </FormControl> 
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input />
            </FormControl> 
            <FormControl>
                <Button variant='contained'> Add User </Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;