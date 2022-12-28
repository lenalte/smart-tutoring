import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function SelectSchools() {

  return (
    <Stack>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 0.2, width: '38ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          id="outlined-multiline-static"
          label="Schreibe hier etwas über dich..."
          multiline
          rows={8}
        //   defaultValue="Default Value"
        />
        </Box>
        <Button variant="contained"
        sx={{borderRadius: 50}}
        className='button'
        style={{
            position: 'fixed',
            width: '9em',
            justifyContent: 'center',
            left: '7em',
            bottom: '4em',
            color: 'white', 
            fontFamily: 'Judson',
            fontSize: '17px', 
            textTransform: 'none',
            padding: '8px 65px 8px 65px',
            backgroundColor: 'black',
            }}>
        next</Button>
    </Stack>
  )
}