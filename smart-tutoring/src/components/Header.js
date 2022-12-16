import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../img/Logo.png';
// import { CenterFocusStrong } from '@mui/icons-material';

export default function Header() {
    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon className="menu-icon"/>
            </IconButton>
            <Box
                component = "img"
                sx = {{
                height: 25,
                }}
                alt="smart tutoring"
                src={Logo}
                className="logo"

            />
        </Toolbar>
    )
}




// export default function Header() {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar variant="dense">
//             <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" component="div">
//               Photos
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     );
//   }