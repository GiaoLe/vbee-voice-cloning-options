import React from "react";
import {Box, ButtonGroup, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import VoicePlayer from "./VoicePlayer";
import PopUpButton from "./PopUpButton";
import DeleteButton from "./DeleteButton";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function VoiceInfoPopUp({open, setOpen}) {
    const handleClose = () => {
        setOpen(false);
    }

    return (<Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            fullScreen
            PaperProps={{
                style: {
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    height: '50%',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    backgroundColor: '#f5f5f5',
                },
            }}
        >
            <DialogTitle sx={{backgroundColor: '#F5F7FB', border: '1px solid #cfd0d1', padding: '5px 0 0 0',}}>
                <Box sx={{padding: '0 10px 0 10px'}} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>Tên giọng • SG</Typography>
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon sx={{backgroundColor: '#cfd0d1', borderRadius: '50%'}}/>
                    </IconButton>
                </Box>
            </DialogTitle>
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

export default VoiceInfoPopUp;