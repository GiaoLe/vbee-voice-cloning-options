import CustomDialog from "./CustomDialog";
import {Grid} from "@mui/material";
import NameTextField from "./NameTextField";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

function ChangeVoiceNamePopUp({open, setOpen}) {
    return <CustomDialog open={open}
                         setOpen={setOpen}
                         title={"Đổi tên giọng đọc"}
                         dialogContent={
                             <Grid container spacing={3}>
                                 <Grid item xs={12}>
                                     <NameTextField/>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <CancelButton handleClose={() => {
                                         setOpen(false);
                                     }}/>
                                 </Grid>
                                 <Grid item xs={6}>
                                     <SaveButton/>
                                 </Grid>
                             </Grid>}
    />
}

export default ChangeVoiceNamePopUp;