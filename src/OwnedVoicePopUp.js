import React from "react";
import {ButtonGroup, Dialog, DialogContent} from "@mui/material";
import VoicePlayer from "./VoicePlayer";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import PopUpTitle from "./PopUpTitle";
import Transition from "./Transition";
import ChangeVoiceNamePopUp from "./ChangeVoiceNamePopUp";
import DeleteVoicePopUp from "./DeleteVoicePopUp";
import PublishVoicePopUp from "./PublishVoicePopUp";

function OwnedVoicePopUp({open, setOpen, setChangeVoiceNamePopUpOpen, setDeleteVoicePopUpOpen, setPublishVoicePopUpOpen, voiceItem}) {

    const handleOpenChangeVoiceNamePopUp = () => {
        setOpen(false); // close the current pop-up
        setChangeVoiceNamePopUpOpen(true); // open the next pop-up
    };

    const handleOpenDeleteVoicePopUp = () => {
        setOpen(false); // close the current pop-up
        setDeleteVoicePopUpOpen(true); // open the next pop-up
    };

    const handleOpenPublishVoicePopUp = () => {
        setOpen(false); // close the current pop-up
        setPublishVoicePopUpOpen(true); // open the next pop-up
    };

    return (<Dialog
        open={open}
        TransitionComponent={Transition}
        fullScreen
        PaperProps={{
            style: {
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height: '53%',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backgroundColor: '#f5f5f5',
            },
        }}
    >
        <PopUpTitle handleClose={() => {
            setOpen(false);
        }} voice={{name: "Tên giọng", region: "SG"}}/>
        <VoicePlayer/>
        <DialogContent style={{backdropFilter: 'blur(5px)', padding: '16px'}}>
            <ButtonGroup orientation={"vertical"} fullWidth>
                <PopUpButton text={"Xuất bản"} onClick={handleOpenPublishVoicePopUp}/>
                <PopUpButton text={"Sử dụng ngay"} onClick={() => console.log("Sử dụng ngay là sao?")}/>
                <PopUpButton text={"Đổi tên giọng"} onClick={handleOpenChangeVoiceNamePopUp}/>
            </ButtonGroup>
            <DeleteButton onClick={handleOpenDeleteVoicePopUp}/>
        </DialogContent>
    </Dialog>);
}

export default OwnedVoicePopUp;