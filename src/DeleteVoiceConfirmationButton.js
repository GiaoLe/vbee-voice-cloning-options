import Button from "@mui/material/Button";

function DeleteVoiceConfirmationButton() {
    return <Button
        onClick={() => {
            //TODO: Implement delete voice
        }}
        sx={{
        backgroundColor: '#FFD60A', borderRadius: '20px', width: '100%',
    }}>Xóa</Button>
}

export default DeleteVoiceConfirmationButton;