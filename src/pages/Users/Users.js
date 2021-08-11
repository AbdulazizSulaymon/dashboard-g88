import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error';
import { setUsers } from '../../redux/actions';
import UsersWrapper from './UsersWrapper'

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch)
    }, [])

    const data = useSelector(state => state.users);
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);

    return (
        <UsersWrapper>
            <h1>Users</h1>

            {loading && <LinearProgress /> || ""}
            {error && <Error /> || ""}
            {data.length > 0 && <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>user name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(v => <TableRow>
                            <TableCell>{v.id}</TableCell>
                            <TableCell>{v.name}</TableCell>
                            <TableCell>{v.username}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer> || ""}

        </UsersWrapper>
    )
}

export default Users
