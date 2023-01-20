import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Hours() {

    const [hours, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const numbers = [...Array(31).keys()];

    const createMenuItems = (numbers) => {
        return numbers.map(number => {
            return <MenuItem key={number} value={number}>{number}</MenuItem>
        });
    }

    const menuItems = createMenuItems(numbers);

    return (
        <Box sx={{ minWidth: 350 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hours</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hours}
                    label="Hours"
                    onChange={handleChange}
                >
                    {menuItems}

                </Select>
            </FormControl>
        </Box>
    )
}