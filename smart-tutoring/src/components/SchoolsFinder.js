import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';


export default function SelectSchoolsFinder() {

    return (
        <Stack spacing={2.5} paddingTop={1}>

            <Box sx={{ minWidth: 350 }}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">aktuelle Schule</InputLabel>
                    <Select
                        defaultValue="" id="grouped-select" label="weiterführende Schule">
                        <MenuItem value="">
                            <em>Keine</em>
                        </MenuItem>
                        {/* <ListSubheader>Category 1</ListSubheader> */}
                        <MenuItem value={1}>Grundschule</MenuItem>
                        {/* <ListSubheader>Category 2</ListSubheader> */}
                        <MenuItem value={2}>Hauptschule</MenuItem>
                        <MenuItem value={3}>Realschule</MenuItem>
                        <MenuItem value={4}>Gymnasium</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ minWidth: 350 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Wunschschule</InputLabel>
                    <Select
                        defaultValue="" id="grouped-select" label="berufsausbildende Schule">
                        <MenuItem value="">
                            <em>Keine</em>
                        </MenuItem>
                        {/* <ListSubheader>Category 1</ListSubheader> */}
                        <MenuItem value={1}>Gymnasium</MenuItem>
                        <MenuItem value={2}>Realschule</MenuItem>
                        <MenuItem value={3}>Hauptschule</MenuItem>
                        {/* <ListSubheader>Category 2</ListSubheader> */}
                        <MenuItem value={3}>FOS</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </Stack>
    );
}