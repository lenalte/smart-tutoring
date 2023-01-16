import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

export default function login() {
    return (
        <Grid>
            <div style={{
                position: 'absolute',
                width: '335px',
                height: '79px',
                left: '29px',
                top: '100px',
                fontFamily: 'Judson',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '37px',
                color: '#000000'
            }}>
                <Typography fontFamily={"Judson"} sx={{ fontSize: 27 }} variant="body1" lineHeight={1.2} paddingBottom={4} paddingTop={6} paddingLeft={1} color="black">
                    sign in für smart tutoring
                </Typography>
            </div>

            <div style={{
                position: 'absolute',
                width: '315px',
                height: '50px',
                left: '34px',
                top: '234px',
            }}>
                <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-email"
                    label="Email"
                    defaultValue="Email"
                />
            </div>
            <div style={{
                position: 'absolute',
                width: '315px',
                height: '50px',
                left: '34px',
                top: '318px',
            }}>
                <TextField
                    sx={{
                        minWidth: '350',
                    }}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                href='/questionnaireBecome'
                style={{
                    position: 'absolute',
                    height: '46px',
                    width: '189px',
                    justifyContent: 'center',
                    left: '97px',
                    top: '717px',
                    bottom: '4em',
                    color: 'white',
                    fontFamily: 'Judson',
                    fontSize: '17px',
                    textTransform: 'none',
                    padding: '8px 65px 8px 65px',
                    backgroundColor: 'black',
                }}>
                sign in</Button>
        </Grid>

    )
}
