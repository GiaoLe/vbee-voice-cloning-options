import {Box, DialogTitle, IconButton, Typography} from "@mui/material";
import {ReactComponent as CloseIcon} from "./close-icon.svg";
import React from "react";

function PopUpTitle({voiceItem, handleClose}) {
    return <DialogTitle sx={{
        backgroundColor: '#F5F7FB',
        border: '1px solid #3C3C4329',
        padding: '5px 10px 5px 10px',
        margin: '0 0 20px 0'
    }}>
        <Box sx={{padding: '0 10px 0 10px'}} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>{voiceItem.name} • {voiceItem.region}</Typography>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon sx={{
                    backgroundColor: '#cfd0d1',
                    borderRadius: '50%',
                    color: 'white',
                }}/>
            </IconButton>
        </Box>
    </DialogTitle>
}

export default PopUpTitle;