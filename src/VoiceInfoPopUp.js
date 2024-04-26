import React from "react";
import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    List,
    Slide,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PopUpMenuItem from "./PopUpMenuItem";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function VoiceInfoPopUp({open, setOpen}) {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
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
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" padding={2}>
                    <Typography variant="h6" color="textSecondary">Tên giọng • SG</Typography>
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent style={{backdropFilter: 'blur(5px)', padding: '16px'}}>
                <DialogContentText>
                    <List>
                        <PopUpMenuItem name={"Xuất bản"} handleClick={() => {
                        }}/>
                        <PopUpMenuItem name={"Sử dụng ngay"} handleClick={() => {
                        }}/>
                        <PopUpMenuItem name={"Đổi tên giọng"} handleClick={() => {
                        }}/>
                        <PopUpMenuItem name={"Xóa"} handleClick={() => {
                        }}/>
                    </List>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default VoiceInfoPopUp;