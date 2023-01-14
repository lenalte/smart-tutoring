import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// const numbers = [...Array(5).keys()];
// console.log(numbers);

export default function Age() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const numbers = [...Array(99).keys()];

    const createMenuItems = (numbers) => {
        return numbers.map(number => {
            return <MenuItem key={number} value={number}>{number}</MenuItem>
        });
    }

    const menuItems = createMenuItems(numbers);

    return (
        <Box sx={{ minWidth: 350 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    {menuItems}

                </Select>
            </FormControl>
        </Box>
    )
}

