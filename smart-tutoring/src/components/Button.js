import * as React from 'react';
import Button from '@mui/material/Button';
// import { styled } from "@mui/material/styles";
// import { textTransform } from '@mui/system';

export default function NextButton() {
    return (
        <Button variant="contained"
        sx={{borderRadius: 50}}
        style={{
            position: 'fixed',
            width: '9em',
            justifyContent: 'center',
            bottom: '4em',
            color: 'white', 
            fontFamily: 'Judson',
            fontSize: '17px', 
            textTransform: 'none',
            padding: '8px 65px 8px 65px',
            backgroundColor: 'black',
            }}>
        next</Button>
    )
}
