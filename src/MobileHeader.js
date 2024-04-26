import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import {ReactComponent as Logo} from './aivoice-cloning-watermark.svg';


function MobileHeader() {

    const handleMenuOpen = () => {
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <IconButton aria-label="menu" onClick={() => handleMenuOpen()}>
                    <MenuIcon/>
                </IconButton>
                <Logo style={{textAlign: 'center'}}/>
                <Avatar sx={{color: 'inherit'}}/>
            </Toolbar>
        </AppBar>
    );
}

export default MobileHeader;
