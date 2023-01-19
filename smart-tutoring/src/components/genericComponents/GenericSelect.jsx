import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// type option = {
//    label: string;
//    value: number | string;
// }

const GenericSelect = ({ options, value, onChange, label }) => {

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                value={value}
                label={label}
                onChange={handleChange}
            >
                {options.map((option, idx) => <MenuItem key={idx} value={option.value}>{option.label}</MenuItem>)}

            </Select>
        </FormControl>
    </Box>
}

export default GenericSelect;