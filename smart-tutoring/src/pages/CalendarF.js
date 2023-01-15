import * as React from 'react';
import CalendarFinder from '../components/CalendarFinder';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';

const CalendarF = () => {
    return (
        <Stack>
            <HeaderBlack />
            <CalendarFinder />
        </Stack>
    )
};

export default CalendarF;