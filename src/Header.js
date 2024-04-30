import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import {ReactComponent as Logo} from './aivoice-cloning-watermark.svg';


function Header() {

    //TODO: Implement menu opening
    const handleMenuOpening = () => {
    };

    return (
        <AppBar position="static" sx={{backgroundColor: 'white'}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <IconButton sx={{backgroundColor: '#1E164E0A'}} aria-label="menu" onClick={() => handleMenuOpening()}>
                    <MenuIcon/>
                </IconButton>
                <Logo style={{textAlign: 'center'}}/>
                <Avatar sx={{color: 'inherit'}}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
