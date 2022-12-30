import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';


export default function SelectSchools() {

  return (
    <Stack spacing={2.5} paddingTop={1}>

      <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select">weiterführende Schule</InputLabel>
          <Select
            defaultValue="" id="grouped-select" label="weiterführende Schule">
            <MenuItem value="">
              <em>Keine</em>
            </MenuItem>
            {/* <ListSubheader>Category 1</ListSubheader> */}
            <MenuItem value={1}>Hauptschule</MenuItem>
            <MenuItem value={2}>Realschule</MenuItem>
            {/* <ListSubheader>Category 2</ListSubheader> */}
            <MenuItem value={3}>Gymnasium</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">berufsausbildende Schule</InputLabel>
          <Select
            defaultValue="" id="grouped-select" label="berufsausbildende Schule">
            <MenuItem value="">
              <em>Keine</em>
            </MenuItem>
            {/* <ListSubheader>Category 1</ListSubheader> */}
            <MenuItem value={1}>Ausbildung</MenuItem>
            <MenuItem value={2}>FOS</MenuItem>
            {/* <ListSubheader>Category 2</ListSubheader> */}
            <MenuItem value={3}>Ausbildung + BOS</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Studium</InputLabel>
          <Select
            defaultValue="" id="grouped-select" label="Studium">
            <MenuItem value="">
              <em>Keine</em>
            </MenuItem>
            {/* <ListSubheader>Category 1</ListSubheader> */}
            <MenuItem value={1}>Universität</MenuItem>
            <MenuItem value={2}>Hochschule</MenuItem>
            {/* <ListSubheader>Category 2</ListSubheader> */}
            <MenuItem value={3}>private Hochschule</MenuItem>
          </Select>
        </FormControl>
      </Box>

    </Stack>
  );
}