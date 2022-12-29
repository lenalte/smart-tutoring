import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

    const card = (
    <React.Fragment>
        <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Sprache
        </Typography>
            <CardActions>
                <Slider
                    size="small"
                    defaultValue={1}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    style={{color: "#eb4034"}}
                />
            </CardActions>
        <Stack direction="row" spacing={6.5}>
            <Typography sx={{ mb: 1.5 , fontSize: 13}} color="text.secondary">
                schlecht
            </Typography>
            <Typography sx={{ mb: 1.5 , fontSize: 13}} color="text.secondary">
                mittel
            </Typography>
            <Typography sx={{ mb: 1.5 , fontSize: 13}} color="text.secondary">
                gut
            </Typography>
            <Typography sx={{ mb: 1.5 , fontSize: 13}} color="text.secondary">
                fließend
            </Typography>
        </Stack>
        </CardContent>
    </React.Fragment>
    );

export default function Skills (){
    return (
        <Grid>
            <Box sx={{ minWidth: 340 }}>
                <Card variant="outlined">{card}</Card>
            </Box>

            <Button variant="contained"
                sx={{borderRadius: 50}}
                className='button'
                style={{
                    position: 'fixed',
                    width: '9em',
                    justifyContent: 'center',
                    left: '7em',
                    bottom: '4em',
                    color: 'white', 
                    fontFamily: 'Judson',
                    fontSize: '17px', 
                    textTransform: 'none',
                    padding: '8px 65px 8px 65px',
                    backgroundColor: 'black',
                    }}>
            next</Button>
        </Grid>
    )
}