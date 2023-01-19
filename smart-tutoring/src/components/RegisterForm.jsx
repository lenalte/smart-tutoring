import { Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenericTextField from './genericComponents/GenericTextField';
import { useSearchParams } from 'react-router-dom';
import GenericPasswordInput from './genericComponents/GenericPasswordInput';

const RegisterForm = () => {

    const [prename, setPrename] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();
    // eslint-disable-next-line
    const [searchParams, _] = useSearchParams();
    const targetPath = searchParams.get("targetPath");


    fetch('../backend/server.js/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prename, lastname, email, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    return (
        <Stack >
            <Typography fontFamily={"Judson"} sx={{ fontSize: 30 }} variant="body1" lineHeight={1.2} paddingBottom={4} paddingTop={6} paddingLeft={3} color="black">
                sign up für smart <br /> tutoring
            </Typography>

            <Button style={{
                position: 'absolute',
                width: '335px',
                height: '50px',
                left: '30px',
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

            <Stack paddingLeft={2} paddingTop={15} spacing={2}>
                <GenericTextField label="Vorname" value={prename} onChange={setPrename} />
                <GenericTextField label="Nachname" value={lastname} onChange={setLastname} />
                <GenericTextField label="Email" value={email} onChange={setEmail} />
                {/* <GenericTextField label="Passwort" value={password} onChange={setPassword} type="password" /> */}
                <GenericPasswordInput label="Passwort" value={password} onChange={setPassword} />

                {/* <div style={{
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
                </div> */}

            </Stack>

            <div style={{
                position: 'absolute',
                width: '315px',
                height: '50px',
                left: '34px',
                top: '675px',
            }}>
                <FormGroup
                //{...label} defaultChecked color="default"
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
                // href='/questionnaireBecome'
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


        </Stack>

    )
}

export default RegisterForm;