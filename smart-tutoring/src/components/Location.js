import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Location() {
    return (
        <Grid>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0.2, width: '38ch' },
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
        </Grid>
    )
}