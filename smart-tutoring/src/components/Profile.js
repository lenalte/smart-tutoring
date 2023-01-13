import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#ff453c' : '#ffffff',
    },
}));

const card1 = (
    <React.Fragment>
        <CardContent>
            <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" lineHeight={1.2} color="black">
                Schulbildung:
                <br /> - Realschule
                <br /> - FOS
                <br /> - Keine
            </Typography>
        </CardContent>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent>
            <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" lineHeight={1.2} color="black">
                Sprachen:
                <br /> - Sprache 1
                <br /> - Sprache 2
                <br /> - Sprache 3
            </Typography>
        </CardContent>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <CardContent>
            <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" lineHeight={1.2} color="black">
                Über mich:
                Text
            </Typography>
        </CardContent>
    </React.Fragment>
);


export default function Profile() {
    return (
        <Stack paddingTop={6} paddingLeft={2}>
            <Grid container spacing={2}>
                <Grid item xs={2.5}>
                    <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <Typography fontFamily={"Judson"} sx={{ fontSize: 20 }} variant="body1" lineHeight={1.2} color="black">
                            Vorname Nachname, Alter
                        </Typography>
                        <Rating name="read-only" value={5} readOnly size="small" style={{ paddingTop: 8 }} />
                    </Box>
                </Grid>
            </Grid>
            <Stack paddingTop={5}>
                <Typography fontFamily={"Judson"} sx={{ fontSize: 15 }} variant="body1" lineHeight={1.2} color="black">
                    Übereinstimmung:
                </Typography>
                <Box paddingTop={1.5} paddingRight={2.5}>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Box>
            </Stack>
            <Stack spacing={1} paddingTop={3} paddingRight={2.5}>
                {/* <Box sx={{ minWidth: 275 }}> */}
                <Card variant="outlined" sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>{card1}</Card>
                <Card variant="outlined" sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>{card2}</Card>
                <Card variant="outlined" sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>{card3}</Card>
                {/* </Box> */}
            </Stack>
            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                // onClick={nextAction}
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
                <CalendarMonthOutlinedIcon fontSize={'medium'} /></Button>
        </Stack>
    )
}