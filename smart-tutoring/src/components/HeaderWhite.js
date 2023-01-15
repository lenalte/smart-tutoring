import LogoWhite from '../img/LogoWhite.png';
import {
    styled,
    // useTheme
} from '@mui/material/styles';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import ClearIcon from '@mui/icons-material/Clear';

import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';


import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';



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
            <Toolbar posittion="fixed">
                <IconButton edge="start" color="inheritet" aria-label="menu" sx={{ mr: 2 }} style={{
                    color: 'white'
                }} onClick={toggleDrawer}>
                    <MenuIcon className="menu-icon" />
                </IconButton>
                <Box
                    component="img"
                    sx={{
                        height: 25,
                    }}
                    alt="smart tutoring"
                    src={LogoWhite}
                    className="logo"

                />
            </Toolbar>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        <ClearIcon />
                    </IconButton>
                </DrawerHeader>

                <List style={{ paddingRight: 70, paddingLeft: 10 }}>
                    {['Logout', 'gespeicherte Matches', 'Kontakt', 'Sprache', 'Einstellungen'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <LogoutOutlinedIcon /> : null}
                                    {index === 1 ? <GradeOutlinedIcon /> : null}
                                    {index === 2 ? <ContactSupportOutlinedIcon /> : null}
                                    {index === 3 ? <LanguageOutlinedIcon /> : null}
                                    {index === 4 ? <SettingsOutlinedIcon /> : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>
    )
}



