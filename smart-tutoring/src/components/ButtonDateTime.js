import * as React from 'react';
import Button from "@mui/material/Button";

export default function login() {
    return (
        <Button variant="contained"
            sx={{ borderRadius: 50 }}
            className='button'
            //onClick={nextAction}
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
                fontSize: '14px',
                textTransform: 'none',
                padding: '8px 65px 8px 65px',
                backgroundColor: 'black',
            }}>
            <p>set Time</p></Button>
    )
}
