import * as React from 'react';
import Profile from '../components/ProfileFinder';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';


const ProfileF = () => {
    return <div>
        <Stack>
            <HeaderBlack />
            <Profile />
        </Stack>
    </div>
}

export default ProfileF;