import CustomDialog from "./CustomDialog";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import OwnedVoiceItem from "./OwnedVoiceItem";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShareButton from "./ShareButton";
import SharingStateSnackBar from "./SharingStateSnackBar";
import {useState} from "react";


function PublishVoicePopUp({open, setOpen, voiceItem}) {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    //TODO: set the message if the voice is shared unsuccessfully
    const [snackBarMessage, setSnackBarMessage] = useState('Chia sẻ giọng lên thư viện thành công');

    return (<>
        <CustomDialog
            open={open}
            setOpen={setOpen}
            title={<Typography>
                <strong>Chia sẻ lên thư viện giọng Vbee</strong>
                <IconButton
                    aria-label="close"
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </Typography>}
            dialogContent={<Stack direction="column" spacing={2}>
                <OwnedVoiceItem voiceItem={voiceItem}/>
                <Typography variant="body2" sx={{color: '#007AFF'}}>*Giọng sẽ được tải lên thư viện
                    giọng công khai của Vbee, bất cứ ai cũng có
                    thể sử dụng giọng đọc.</Typography>
                <ShareButton onClick={() => {
                    setOpenSnackBar(true);
                    setOpen(false);
                }}/>
            </Stack>}
        />
        <SharingStateSnackBar setOpen={setOpenSnackBar} open={openSnackBar} message={snackBarMessage}/>
    </>);
}

export default PublishVoicePopUp;