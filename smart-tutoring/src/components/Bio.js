import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


export default function SelectSchools() {

  return (
    <Stack>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 0.2, width: '38ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Schreibe hier etwas über dich..."
          multiline
          rows={8}
        //   defaultValue="Default Value"
        />
      </Box>
    </Stack>
  )
}