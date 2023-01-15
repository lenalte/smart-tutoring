import {
    styled,
    // useTheme
} from '@mui/material/styles';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../img/Logo.png';
import Drawer from '@mui/material/Drawer';

import ClearIcon from '@mui/icons-material/Clear';

import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';




const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SidebarTest() {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                    <MenuIcon className="menu-icon" />
                </IconButton>
                <Box
                    component="img"
                    sx={{
                        height: 25,
                    }}
                    alt="smart tutoring"
                    src={Logo}
                    className="logo"
                />
            </Toolbar>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        <ClearIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    <ListItem >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                </List>
            </Drawer>

        </>
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