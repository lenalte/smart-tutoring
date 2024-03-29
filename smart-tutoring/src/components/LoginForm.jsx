
import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import GenericPasswordInput from './genericComponents/GenericPasswordInput';
import GenericTextField from './genericComponents/GenericTextField';
import userApi from '../services/userApi';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLaoding] = useState(true);

    console.log("email", email);
    console.log("password", password);

    const navigate = useNavigate();
    // eslint-disable-next-line
    const [searchParams, _] = useSearchParams();
    const targetPath = searchParams.get("targetPath");


    const send = () => {
        setLaoding(true);
        return userApi.loginUser(email, password).then(() => {
            setLaoding(false);
        })
    }


    return (
        <Stack>
            <Typography fontFamily={"Judson"} sx={{ fontSize: 30 }} variant="body1" lineHeight={1.2} paddingBottom={4} paddingTop={6} paddingLeft={3} color="black">
                sign in für smart <br /> tutoring
            </Typography>

            <Stack paddingLeft={2} paddingTop={3} spacing={2}>
                <GenericTextField label="Email" value={email} onChange={setEmail} />
                <GenericPasswordInput label="Passwort" value={password} onChange={setPassword} />
            </Stack>


            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                loading={loading}
                onClick={() => {
                    send().then(() => {
                        switch (targetPath) {
                            case 'findTutor':
                                navigate('/matchesfinder');
                                console.log('Hello')
                                break;
                            case 'becomeTutor':
                                navigate('/profileSelf');
                                console.log('Hello2')
                                break;
                            default:
                                console.log('Hello3')
                                navigate('/');
                        }
                    })
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
                sign in</Button>


        </Stack>

    )
}

export default LoginForm;