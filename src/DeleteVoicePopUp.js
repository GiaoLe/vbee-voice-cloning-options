import CustomDialog from "./CustomDialog";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import CancelButton from "./CancelButton";
import DeleteVoiceConfirmationButton from "./DeleteVoiceConfirmationButton";

function DeleteVoicePopUp({open, setOpen, voice}) {
    return <CustomDialog open={open} setOpen={setOpen} title={<Typography sx={{color: 'red'}}>Xóa giọng</Typography>} dialogContent={
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography>Bạn chắc chắn muốn xóa giọng đọc <strong>{voice.region}-{voice.name}</strong> này không?</Typography>
            </Grid>
            <Grid item xs={6}>
                <CancelButton handleClose={() => {
                    setOpen(false);
                }}/>
            </Grid>
            <Grid item xs={6}>
                <DeleteVoiceConfirmationButton/>
            </Grid>
        </Grid>

    }/>;
}

export default DeleteVoicePopUp;