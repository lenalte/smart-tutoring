import * as React from 'react';
import Date from '../components/Date';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';


const SetDate = () => {
    return <div>
        <Stack>
            <HeaderBlack />
            <Date />
        </Stack>
    </div>
}

export default SetDate;