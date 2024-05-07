import React from "react";
import {ButtonGroup, Dialog, DialogContent} from "@mui/material";
import VoicePlayer from "./VoicePlayer";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import PopUpTitle from "./PopUpTitle";
import Transition from "./Transition";

function OwnedVoicePopUp({
                             open,
                             setOpen,
                             setChangeVoiceNamePopUpOpen,
                             setDeleteVoicePopUpOpen,
                             setPublishVoicePopUpOpen
                         }) {

    const handleOpenChangeVoiceNamePopUp = () => {
        setOpen(false);
        setChangeVoiceNamePopUpOpen(true);
    };

    const handleOpenDeleteVoicePopUp = () => {
        setOpen(false);
        setDeleteVoicePopUpOpen(true);
    };

    const handleOpenPublishVoicePopUp = () => {
        setOpen(false);
        setPublishVoicePopUpOpen(true);
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
                <PopUpButton text={"Sử dụng ngay"} onClick={() => console.log("Chưa biết nút này dùng làm gì")}/>
                <PopUpButton text={"Đổi tên giọng"} onClick={handleOpenChangeVoiceNamePopUp}/>
            </ButtonGroup>
            <DeleteButton onClick={handleOpenDeleteVoicePopUp}/>
        </DialogContent>
    </Dialog>);
}

export default OwnedVoicePopUp;