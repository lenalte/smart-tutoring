import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoWhite from '../img/LogoWhite.png';
// import { CenterFocusStrong } from '@mui/icons-material';

export default function HeaderBlack() {
    return (
        <Toolbar>
            <IconButton edge="start" color="inheritet" aria-label="menu" sx={{ mr: 2 }} style={{
                color: 'white'
            }}>
                <MenuIcon className="menu-icon"/>
            </IconButton>
            <Box
                component = "img"
                sx = {{
                height: 25,
                }}
                alt="smart tutoring"
                src={LogoWhite}
                className="logo"

            />
        </Toolbar>
    )
}