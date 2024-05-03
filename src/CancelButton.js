import Button from "@mui/material/Button";

function CancelButton({handleClose}) {
    return <Button sx={{
        backgroundColor: '#dfe2e6', borderRadius: '20px', width: '100%'
    }}
                   onClick={handleClose}
    >Hủy</Button>
}

export default CancelButton;