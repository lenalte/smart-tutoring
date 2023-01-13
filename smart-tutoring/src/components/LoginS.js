import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button"

export default function login() {
    return (
    <Grid>
    <Button variant="outlined">Google</Button>
    <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0.2, width: '38ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>
    <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-vorname"
                    label="Vorname"
                    defaultValue="Vorname"
                />
     <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-nachname"
                    label="Nachname"
                    defaultValue="Nachname"
                />
     <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-email"
                    label="Email"
                    defaultValue="Email"
                />
     <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
    <FormGroup
   //{...label} defaultChecked color="default"
   >
        <FormControlLabel control={<Checkbox defaultChecked />} label="Nutzungsbedinungen zustimmen" />
    </FormGroup>
    <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                //onClick={nextAction}
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
                sign up</Button>
    </Grid>
)}
