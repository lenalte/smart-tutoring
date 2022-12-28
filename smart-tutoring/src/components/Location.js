import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Location (){
    return (
        <Grid>
            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 0.2, width: '38ch'},
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            sx={{
                minWidth: '350',
            }}
            id="outlined-number"
            label="Postleitzahl"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
            </ Box> 
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
        </Grid>
    )
}