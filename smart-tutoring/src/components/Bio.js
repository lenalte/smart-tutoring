import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import { OutlinedInput } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function SelectSchools() {

  const theme = createTheme({
    overrides: {
      OutlinedInput: {
        focused: {
          "& $notchedOutline": {
            color: "#4caf50"
          }
        }
      }
    }
  });

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
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-multiline-static"
            label="Schreibe hier etwas über dich..."
            multiline
            rows={8}
          />
        </ThemeProvider>
      </Box>
    </Stack>
  )
}