import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBack icon
import Typography from "@mui/material/Typography";
import {Box, Grid} from "@mui/material";

function Header() {
    //TODO: Implement back navigation
    const handleBackNavigation = () => {
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                        <IconButton sx={{backgroundColor: '#1E164E0A'}} aria-label="back"
                                    onClick={handleBackNavigation}>
                            <ArrowBackIcon sx={{color: 'black'}}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" color="black" align="center" fontSize="20px">Gửi yêu cầu</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box></Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;