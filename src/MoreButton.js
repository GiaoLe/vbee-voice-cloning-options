import * as React from 'react';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import {Box} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OwnedVoicePopUpManager from "./OwnedVoicePopUpManager";
import ProcessingVoicePopUpManager from "./ProcessingVoicePopUpManager";


function MoreButton({isProcessing, voiceItem}) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (<Box>
            <IconButton
                aria-label="more"
                aria-controls="options-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon/>
            </IconButton>
            {isProcessing ? <ProcessingVoicePopUpManager open={open} setOpen={setOpen} voiceItem={voiceItem}/> :
                <OwnedVoicePopUpManager open={open} setOpen={setOpen} voiceItem={voiceItem}/>}
        </Box>);
}

export default MoreButton;
