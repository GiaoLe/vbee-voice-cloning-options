import React from "react";
import {ButtonGroup, Dialog, DialogContent} from "@mui/material";
import VoicePlayer from "./VoicePlayer";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import PopUpTitle from "./PopUpTitle";
import Transition from "./Transition";


function OwnedVoicePopUp({open, setOpen}) {
    const handleClose = () => {
        setOpen(false);
    }

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
        <PopUpTitle handleClose={handleClose} voice={{name: "Tên giọng", region: "SG"}}/>
        <VoicePlayer/>
        <DialogContent style={{backdropFilter: 'blur(5px)', padding: '16px'}}>
            <ButtonGroup orientation={"vertical"} fullWidth>
                <PopUpButton text={"Xuất bản"} onClick={() => console.log("Edit")}/>
                <PopUpButton text={"Sử dụng ngay"} onClick={() => console.log("Edit")}/>
                <PopUpButton text={"Đổi tên giọng"} onClick={() => console.log("Edit")}/>
            </ButtonGroup>
            <DeleteButton onClick={() => console.log("Delete")}/>
        </DialogContent>
    </Dialog>);
}

export default OwnedVoicePopUp;