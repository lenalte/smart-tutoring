import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const GenericTextField = ({ label, value, onChange, rows, id, sx }) => {

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
                id={id}
                // "outlined-number"
                label={label}
                value={value}
                rows={rows}
                onChange={changeHandler}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </ Box>
    </Grid>
}

export default GenericTextField;