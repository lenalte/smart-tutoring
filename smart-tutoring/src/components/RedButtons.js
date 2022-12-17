import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

export default function RedButtons () {
    return (
        <Stack spacing={7}>
                <Button variant="contained"
            sx={{borderRadius: 50}}
            className='button'
            style={{
                position: 'fixed',
                // width: '9em',
                justifyContent: 'center',
                // left: '7em',
                // bottom: '4em',
                color: 'white', 
                fontFamily: 'Judson',
                fontSize: '17px', 
                textTransform: 'none',
                padding: '8px 50px 8px 50px',
                backgroundColor: '#FF453C',
                }}>
            finde tutor</Button>

            <Button variant="contained"
            sx={{borderRadius: 50}}
            className='button'
            style={{
                position: 'fixed',
                // width: '9em',
                justifyContent: 'center',
                // left: '7em',
                // bottom: '4em',
                color: 'white',
                fontFamily: 'Judson',
                fontSize: '17px',
                textTransform: 'none',
                padding: '8px 45px 8px 45px',
                backgroundColor: '#FF453C',
            }}>
            werde tutor</Button>
    </Stack>
    )
}