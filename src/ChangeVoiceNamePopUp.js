import CustomDialog from "./CustomDialog";
import {Grid} from "@mui/material";
import NewNameTextField from "./NewNameTextField";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import Typography from "@mui/material/Typography";

function ChangeVoiceNamePopUp({open, setOpen, voiceItem}) {
    return <CustomDialog open={open}
                         setOpen={setOpen}
                         title={<Typography><strong>Đổi tên giọng đọc</strong></Typography>}
                         dialogContent={
                             <Grid container spacing={3}>
                                 <Grid item xs={12}>
                                     <NewNameTextField/>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <CancelButton onClick={() => {
                                         setOpen(false);
                                     }}/>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <SaveButton onClick={() => {
                                         voiceItem.name = "New name";
                                         setOpen(false);
                                     }}/>
                                 </Grid>
                             </Grid>}
    />
}

export default ChangeVoiceNamePopUp;