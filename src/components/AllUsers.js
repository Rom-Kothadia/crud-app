import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";

import { useEffect, useState } from "react";

import { getUsers } from "../service/api";
import { Link } from "react-router-dom";

const TableStyle = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 25px;
    border-radius: 10px;
`

const Thead = styled(TableRow)`
    background: #111111;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const Tbody = styled(TableRow)`
    & > td {
        font-size: 20px;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsersDetails();
    },[])

    const getUsersDetails = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <TableStyle>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(users => (
                    <Tbody key={users.id}>
                        <TableCell>{users.id}</TableCell>
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.username}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${users.id}`}>Edit</Button>
                            <Button variant='contained' color='secondary'>Delete</Button>
                        </TableCell>
                    </Tbody>
                    ))
                }
            </TableBody>
        </TableStyle>
    )
}

export default AllUsers;