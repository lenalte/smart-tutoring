import { Box, TextField } from '@mui/material';
import React from 'react';

const GenericTextArea = (label, value, onChange) => {

    const changeHandler = (event) => {
        onChange(event.target.value);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 0.2, width: '38ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label={label}
                value={value}
                onChange={changeHandler}
                id="outlined-multiline-static"
            // multiline
            />
        </Box>
        // <FormControl>
        //     <FormLabel>Label</FormLabel>
        //     <Textarea placeholder="Placeholder" minRows={2} />
        //     <FormHelperText>This is a helper text.</FormHelperText>
        // </FormControl>
    );
}

export default GenericTextArea;