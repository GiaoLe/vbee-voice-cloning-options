import Button from "@mui/material/Button";

function ShareButton({onClick}) {
    return (<Button fullWidth sx={{
        backgroundColor: '#FFD60A', borderRadius: '20px', width: '100%', height: '45px', color: 'black'
    }}
                    onClick={onClick}>
        Chia sẻ
    </Button>);
}

export default ShareButton;