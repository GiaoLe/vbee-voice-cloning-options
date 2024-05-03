import {Dialog, DialogContent} from "@mui/material";
import React, {useState} from "react";
import PopUpTitle from "./PopUpTitle";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import Transition from "./Transition";
import ChangeVoiceNamePopUp from "./ChangeVoiceNamePopUp";
import DeleteVoicePopUp from "./DeleteVoicePopUp";

function ProcessingVoicePopUp({open, setOpen, voice}) {
    const [isChangeVoiceNamePopUpOpen, setChangeVoiceNamePopUpOpen] = useState(false);
    const [isDeleteVoicePopUpOpen, setDeleteVoicePopUpOpen] = useState(false);

    const handleOpenChangeVoiceNamePopUp = () => {
        setChangeVoiceNamePopUpOpen(true);
    };
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
        }} voice={{name: "Tên giọng", region: "SG"}}
        />
        <DialogContent>
            <PopUpButton text={"Đổi tên giọng"} onClick={handleOpenChangeVoiceNamePopUp}/>
            <DeleteButton onClick={() => {
                setDeleteVoicePopUpOpen(true);
            }}/>
        </DialogContent>
        <ChangeVoiceNamePopUp open={isChangeVoiceNamePopUpOpen} setOpen={setChangeVoiceNamePopUpOpen}/>
        <DeleteVoicePopUp open={isDeleteVoicePopUpOpen} setOpen={setDeleteVoicePopUpOpen} voice={voice}/>
    </Dialog>
}

export default ProcessingVoicePopUp;