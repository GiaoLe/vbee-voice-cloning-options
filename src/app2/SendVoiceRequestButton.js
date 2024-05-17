import Button from "@mui/material/Button";

function SendVoiceRequestButton() {

    const onClick = () => {
    }

    return <Button fullWidth sx={{
        backgroundColor: '#FFD60A', borderRadius: '20px', width: '343px', height: '45px', color: 'black', position: 'fixed', bottom: '20px'
    }}
                   onClick={onClick}>
        Gửi yêu cầu giọng đọc
    </Button>
}

export default SendVoiceRequestButton;