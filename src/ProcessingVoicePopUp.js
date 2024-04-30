import {Dialog, DialogContent} from "@mui/material";
import React from "react";
import PopUpTitle from "./PopUpTitle";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";
import Transition from "./Transition";

function ProcessingVoicePopUp({open, setOpen}) {
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
            <PopUpButton text={"Đổi tên giọng"} onClick={() => console.log("Edit")}/>
            <DeleteButton/>
        </DialogContent>
    </Dialog>
}

export default ProcessingVoicePopUp;