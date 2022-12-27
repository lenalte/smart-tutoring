import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function Footer () {
    return (
        <Box
        sx={{
            width: "cover",
            height: 120,
            backgroundColor: '#E5E5E5',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        }}>
        <Grid padding={5}>
            <Link href="#" paddingRight={6} >Impressum</Link>
            <Link href="#" >Datenschutz</Link>
        </Grid>
        </Box>
    )
}