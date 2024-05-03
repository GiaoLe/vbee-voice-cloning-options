import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";

function CustomDialog({open, setOpen, title, dialogContent}) {
    //TODO: Prevent Dialog from closing when clicking outside the dialog
    return <Dialog maxWidth={"md"}
                   open={open} onClose={() => setOpen(false)}
                   PaperProps={{
                       style: {
                           position: 'fixed', width: '90%', height: '30%', borderRadius: 24, backgroundColor: '#f5f5f5',
                       },
                   }}>
        <DialogTitle align={"center"}>
            <Typography padding={0.5} variant="subtitle1">{title}</Typography>
        </DialogTitle>
        <DialogContent>
            {dialogContent}
        </DialogContent>
    </Dialog>
}

export default CustomDialog;