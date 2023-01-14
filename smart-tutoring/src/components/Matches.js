import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 9,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#ff453c' : '#ffffff',
    },
}));

const subjects = [
    "Mathe",
    "Deutsch",
    "Englisch",
]

export default function Matches() {

    return (
        <Stack style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>
                <CardContent>
                    {/* <Stack direction="row" spacing={2}> */}
                    <Grid container spacing={3}>
                        <Grid xs={3}>
                            <Box>
                                <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                                <Rating name="read-only" value={3} readOnly size="small" style={{ paddingTop: 8, color: '#ff453c' }} />
                            </Box>
                        </Grid>
                        <Grid xs={6}>
                            <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" color="black" gutterBottom>
                                Vorname Nachname <br /> Alter
                            </Typography>
                        </Grid>
                        <Grid xs={3} paddingTop={2.5}>
                            <BorderLinearProgress variant="determinate" value={50} />
                        </Grid>
                    </Grid>
                    {/* </Stack> */}
                    <Grid container spacing={1} style={{ paddingTop: 9 }}>
                        {subjects.map(subject => <Grid xs="auto">
                            <Chip label={subject} variant={'outlined'} />
                        </Grid>)}
                    </Grid >


                </CardContent>
            </Card>

        </Stack>
    )
}

