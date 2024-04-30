import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

function PopUpButton({text, onClick}) {
    return <Button fullWidth
                   sx={{
                       border: '1px solid #cfd0d1',
                       borderRadius: '10px',
                       '&:hover': {
                           borderColor: '#cfd0d1'
                       }
                   }}>
        <Typography sx={{color: '#1E164E', textTransform: 'none', padding: '3px', fontWeight: 'bold'}}
                    variant="subtitle1" onClick={onClick}>{text}</Typography>
    </Button>
}

export default PopUpButton;