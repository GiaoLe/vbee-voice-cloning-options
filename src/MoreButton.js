import * as React from 'react';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import OwnedVoicePopUp from "./OwnedVoicePopUp";
import ProcessingVoicePopUp from "./ProcessingVoicePopUp";
import {Box} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function MoreButton({isProcessing, voiceItem}) {

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
                <MoreHorizIcon/>
            </IconButton>
            {isProcessing ? <ProcessingVoicePopUp open={open} setOpen={setOpen} voiceItem={voiceItem}/> :
                <OwnedVoicePopUp open={open} setOpen={setOpen} voiceItem={voiceItem}/>}
        </Box>
    );
}

export default MoreButton;
