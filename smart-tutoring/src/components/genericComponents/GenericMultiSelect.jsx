import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const GenericMultiSelect = ({ options, label, value, onChange }) => {

    console.log("value", value);

    return (
        <Autocomplete
            multiple
            // id="checkboxes-tags-demo"
            // label={label}
            value={value}
            options={options}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <li {...props}>
                    {option.label}
                </li>
            )}
            style={{ width: 350 }}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={label} />
            )}
            onChange={(_, val) => onChange(val)}
        />
    )
}



export default GenericMultiSelect;
