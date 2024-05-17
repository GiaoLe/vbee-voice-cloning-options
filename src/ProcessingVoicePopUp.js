import {Dialog, DialogContent} from "@mui/material";
import React from "react";
import PopUpTitle from "./PopUpTitle";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import Transition from "./Transition";

function ProcessingVoicePopUp({open, setOpen, voiceItem, setChangeVoiceNamePopUpOpen, setDeleteVoicePopUpOpen}) {
    const handleOpenChangeVoiceNamePopUp = () => {
        setOpen(false);
        setChangeVoiceNamePopUpOpen(true);
    };

    const handleOpenDeleteVoicePopUp = () => {
        setOpen(false);
        setDeleteVoicePopUpOpen(true);
    }

    return <Dialog open={open}
                   TransitionComponent={Transition}
                   fullScreen
                   PaperProps={{
                       style: {
                           position: 'fixed',
                           bottom: 0,
                           width: '100%',
                           height: '30%',
                           borderTopLeftRadius: 24,
                           borderTopRightRadius: 24,
                           backgroundColor: '#f5f5f5',
                       },
                   }}>
        <PopUpTitle handleClose={() => {
            setOpen(false);
        }} voiceItem={voiceItem}
        />
        <DialogContent>
            <PopUpButton text={"Đổi tên giọng"} onClick={handleOpenChangeVoiceNamePopUp}/>
            <DeleteButton onClick={handleOpenDeleteVoicePopUp}/>
        </DialogContent>
    </Dialog>
}

export default ProcessingVoicePopUp;