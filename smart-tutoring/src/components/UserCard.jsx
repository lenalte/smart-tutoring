import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Chip, Grid, LinearProgress, linearProgressClasses, Link, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';


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

const UserCard = ({ preName, lastName, subjects }) => {

    const fullName = `${preName} ${lastName}`
    const navigate = useNavigate();

    return <Link
        overlay
        underline="none"
        onClick={() => { navigate(`/profileFind?name=${fullName}`) }}
    // href="/profileFind"
    >
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>
            <CardContent>
                {/* <Stack direction="row" spacing={2}> */}
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <Box paddingLeft={3} paddingTop={3} paddingBottom={3}>
                            <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                            <Rating name="read-only" value={5} readOnly size="small" disabled style={{ paddingTop: 8, color: '#ff453c' }} />
                        </Box>
                    </Grid>
                    <Grid xs={6} paddingTop={3} paddingLeft={2}>
                        <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" color="black" gutterBottom>
                            {fullName}
                        </Typography>
                    </Grid>
                    <Grid xs={3} paddingTop={4}>
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
    </Link>
}

export default UserCard;