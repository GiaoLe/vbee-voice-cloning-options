import Button from "@mui/material/Button";

function DeleteVoiceConfirmationButton({onClick}) {
    return <Button
        onClick={onClick}
        sx={{
        backgroundColor: '#FFD60A', borderRadius: '20px', width: '100%',
    }}>Xóa</Button>
}

export default DeleteVoiceConfirmationButton;