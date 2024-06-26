import {Snackbar, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ReactComponent as Vector} from "./Vector.svg";

function CustomSnackBar({open, setOpen, message}) {
    return <Snackbar open={open}
                     autoHideDuration={3000}
                     onClose={() => setOpen(false)}
                     message={<Stack direction="row" spacing={2}>
                         <Vector/>
                         <Typography variant="subtitle1"><strong>{message}</strong></Typography>
                     </Stack>}
                     anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                     sx={{
                         '& .MuiSnackbarContent-root': {
                             backgroundColor: '#34C759',
                             color: 'white',
                             width: '100%',
                         },
                         marginTop: '53px',
                         fontSize: '14px',
                         height: '48px',
                     }}
    />
}

export default CustomSnackBar;