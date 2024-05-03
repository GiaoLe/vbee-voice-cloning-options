import * as React from 'react';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OwnedVoicePopUp from "./OwnedVoicePopUp";
import ProcessingVoicePopUp from "./ProcessingVoicePopUp";
import {Box} from "@mui/material";

function MoreButton({isProcessing, voice}) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <Box>
            <IconButton
                aria-label="more"
                aria-controls="options-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            {isProcessing ? <ProcessingVoicePopUp open={open} setOpen={setOpen} voice={voice}/> :
                <OwnedVoicePopUp open={open} setOpen={setOpen} voice={voice}/>}
        </Box>
    );
}

export default MoreButton;
