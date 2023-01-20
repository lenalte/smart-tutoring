import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function Register({ onChange, value }) {


    const navigate = useNavigate();
    const [searchParams, _] = useSearchParams();
    const targetPath = searchParams.get("targetPath");



    return (
        <Grid>

            <Typography fontFamily={"Judson"} sx={{ fontSize: 30 }} variant="body1" lineHeight={1.2} paddingBottom={4} paddingTop={6} paddingLeft={3} color="black">
                sign up für smart <br /> tutoring
            </Typography>

            <Button style={{
                position: 'absolute',
                width: '315px',
                height: '50px',
                left: '34px',
                top: '234px',
                color: 'black',

            }} variant="outlined">Google</Button>
            <div style={{
                position: 'absolute',
                width: '78px',
                height: '18px',
                left: '153px',
                top: '293px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '15px',
                textAlign: 'center',
                color: '#000000'
            }}>
                <p>oder</p>
            </div>

            <Grid>
                <div style={{
                    position: 'absolute',
                    width: '315px',
                    height: '50px',
                    left: '34px',
                    top: '351px',
                }}>
                    <TextField
                        sx={{
                            minWidth: '350',
                        }}
                        id="outlined-vorname"
                        label="Vorname"
                    />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '315px',
                    height: '50px',
                    left: '34px',
                    top: '435px',
                }}>
                    <TextField
                        sx={{
                            minWidth: '350',
                        }}
                        id="outlined-nachname"
                        label="Nachname"
                    />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '315px',
                    height: '50px',
                    left: '34px',
                    top: '522px',
                }}>
                    <TextField
                        sx={{
                            minWidth: '350',
                        }}
                        id="outlined-email"
                        label="Email"
                    // defaultValue="Email"
                    />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '315px',
                    height: '50px',
                    left: '34px',
                    top: '609px',
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
                <div style={{
                    position: 'absolute',
                    width: '315px',
                    height: '50px',
                    left: '34px',
                    top: '675px',
                }}>
                    <FormGroup
                    >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Nutzungsbedinungen zustimmen" />
                    </FormGroup>
                </div>
                <Button variant="contained"
                    sx={{ borderRadius: 50 }}
                    className='button'
                    onClick={() => {
                        switch (targetPath) {
                            case 'findTutor':
                                navigate(`/questionnaireFind?targetPath=findTutor`);
                                console.log('Hello')
                                break;
                            case 'becomeTutor':
                                navigate(`/questionnaireBecome?targetPath=becomeTutor`);
                                console.log('Hello2')
                                break;
                            default:
                                console.log('Hello3')
                                navigate('/');
                        }
                    }}
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
                    sign up</Button>
                <div style={{
                    position: 'absolute',
                    width: '189px',
                    height: '18px',
                    left: '56px',
                    top: '781px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '15px',
                    color: '#000000'
                }}>
                    <p>du hast bereits einen Account?</p>
                </div>
                <Button variant="contained"
                    sx={{ borderRadius: 50 }}
                    className='button'
                    onClick={() => {
                        switch (targetPath) {
                            case 'findTutor':
                                navigate(`/signin?targetPath=findTutor`);
                                console.log('Hello')
                                break;
                            case 'becomeTutor':
                                navigate(`/signin?targetPath=becomeTutor`);
                                console.log('Hello2')
                                break;
                            default:
                                console.log('Hello3')
                                navigate('/');
                        }
                    }}
                    style={{
                        position: 'absolute',
                        height: '28px',
                        width: '86px',
                        justifyContent: 'center',
                        left: '250px',
                        top: '781px',
                        bottom: '4em',
                        color: 'black',
                        fontFamily: 'Judson',
                        fontSize: '14px',
                        textTransform: 'none',
                        padding: '8px 65px 8px 65px',
                        backgroundColor: 'white',
                        whiteSpace: 'nowrap',
                        borderRadius: 50
                    }}>
                    <p>sign in</p></Button>
            </Grid>
        </Grid>
    )
}
