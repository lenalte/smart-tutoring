import * as React from 'react';
import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

export default function Subjects() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Grid container spacing={1}>
            <Grid xs={2.5}>
                <Chip label="Mathe" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.8}>
                <Chip label="Deutsch" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.7}>
                <Chip label="Enlisch" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.7}>
                <Chip label="HSU" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={3}>
                <Chip label="Erdkunde" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.8}>
                <Chip label="Biologie" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={3.4}>
                <Chip label="Geschichte" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.7}>
                <Chip label="Chemie" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.6}>
                <Chip label="Physik" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.5}>
                <Chip label="Latein" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={3.6}>
                <Chip label="Französisch" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={2.9}>
                <Chip label="Religion" variant="outlined" onClick={handleClick} />
            </Grid>
            <Grid xs={3}>
                <Chip label="Spanisch" variant="outlined" onClick={handleClick} />
            </Grid>
        </Grid>
    );
}