import React from 'react';

import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

const GenericPasswordInput = ({ label, value, onChange, sx }) => {

    const changeHandler = (event) => {
        onChange(event.target.value);
    }

    return <Grid>
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
                    minWidth: '350', ...sx
                }}
                // "outlined-number"
                label={label}
                value={value}
                type="password"
                id="outlined-password-input"
                onChange={changeHandler}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </ Box>
    </Grid>
}

export default GenericPasswordInput;