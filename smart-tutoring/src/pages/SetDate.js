import * as React from 'react';
import Date from '../components/Date';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';
import SetTime from '../components/SetTime';
import Button from '../components/ButtonDateTime';

const SetDate = () => {
    return <div>
        <Stack>
            <HeaderBlack />
            <Date />
            <SetTime />
            <Button />
        </Stack>
    </div>
}

export default SetDate;