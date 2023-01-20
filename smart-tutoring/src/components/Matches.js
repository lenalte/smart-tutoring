import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import userApi from '../services/userApi';
import UserCard from './UserCard';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Subjects';



export default function Matches() {

    const [users, setUsers] = useState(undefined)

    useEffect(() => {
        console.log("useEffect")
        if (users === undefined) {
            console.log("users === undefined")
            userApi.getAllUsers().then(res => {
                console.log("user fetched:", res);
                setUsers(res);

            });
        }
    })

    console.log("users", users);

    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ paddingLeft: 2, paddingRight: 2 }} spacing={2}>

                {users?.map(user => <UserCard preName={user.prename} lastName={user.lastname} subjects={[]} />)}

            </Stack >
        </ThemeProvider>
    )
}

