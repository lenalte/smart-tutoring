import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';




export default function RedButtons() {
    const navigate = useNavigate();

    return (
        <Stack spacing={7} paddingTop={20}>
            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                onClick={() => { navigate(`/login?targetPath=findTutor`) }}
                style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Judson',
                    fontSize: '17px',
                    textTransform: 'none',
                    padding: '8px 50px 8px 50px',
                    backgroundColor: '#FF453C',
                }}>
                finde tutor</Button>

            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                onClick={() => { navigate(`/login?targetPath=becomeTutor`) }}
                style={{
                    position: 'absolute',
                    justifyContent: 'center',
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