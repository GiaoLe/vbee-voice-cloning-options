import {TextField} from "@mui/material";

function NameTextField() {
    return <TextField
        sx={{
            borderRadius: '30px', width: '100%', '.MuiOutlinedInput-input': {
                height: '20px', textAlign: 'center'
            }, '.MuiOutlinedInput-root': {
                '& fieldset': {
                    borderRadius: '20px'
                },
            },
        }}
        variant={"outlined"}>
    </TextField>
}

export default NameTextField;