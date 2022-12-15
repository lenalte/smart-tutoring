import * as React from 'react';
import Button from '@mui/material/Button';
// import { styled } from "@mui/material/styles";
// import { textTransform } from '@mui/system';

export default function NextButton() {
    return (
        <Button variant="contained"
        sx={{borderRadius: 50}}
        style={{color: 'white', fontFamily: 'Judson', textTransform: 'none'}}>
        next</Button>
    )
}