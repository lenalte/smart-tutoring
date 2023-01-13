import * as React from 'react';
import Profile from '../components/Profile';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';


const ProfileB = () => {
    return <div>
        <Stack>
            <HeaderBlack />
            <Profile />
        </Stack>
    </div>
}

export default ProfileB;