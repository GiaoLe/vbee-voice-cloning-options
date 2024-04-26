import * as React from 'react';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VoiceInfoPopUp from "./VoiceInfoPopUp";

function OptionsMenu() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="options-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <VoiceInfoPopUp open={open} setOpen={setOpen}/>
        </div>
    );
}

export default OptionsMenu;
